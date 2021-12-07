import play from 'assets/images/controls/play.png';
import pause from 'assets/images/controls/pause.png';
import { useState } from 'react';
import ReactHowler from 'react-howler';
import { DEFAULT_SOUND, DEFAULT_VOLUME, sounds } from 'utils/constants';
import { Navbar } from 'components/Navbar';
import Button from 'components/Button';
import { Sounds } from './Sounds';
import { Volume } from './Volume';

export function Homepage() {
  const [sound, setSound] = useState(DEFAULT_SOUND);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(
    localStorage.getItem('sow.default_volume')
      ? Number(localStorage.getItem('sow.default_volume'))
      : DEFAULT_VOLUME,
  );

  function handleVolumeChange(value: number) {
    setVolume(value);
    localStorage.setItem('sow.default_volume', value.toString());
  }

  function handleSoundChange(selectedSound: string) {
    if (selectedSound !== sound) {
      setSound(selectedSound);

      if (!playing) {
        setPlaying(true);
      }
    }
  }

  return (
    <>
      {/* PRE-RENDER ALL VIDEOS TO AVOID WHITE SCREEN DURING LOADING */}
      {sounds.map((_sound) => (
        <video
          key={_sound.value}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            display: _sound.value === sound ? 'unset' : 'none',
          }}
        >
          <source src={`../backgrounds/${_sound.value}.mp4`} type="video/mp4" />
        </video>
      ))}

      <div className="fixed top-0 left-0 h-full w-full">
        <Navbar />
        <div className="flex justify-center items-center h-full">
          <div className="px-6 py-5 sm:px-10 sm:py-8 mx-5 bg-white bg-opacity-75 nes-container text-center">
            <Button
              variant="primary"
              className="align-center mb-6"
              onClick={() => setPlaying(!playing)}
            >
              <img alt={playing ? 'Pause' : 'Play'} src={playing ? pause : play} className="h-12" />
            </Button>
            <h1 className="text-3xl uppercase mb-3">Sounds of the world</h1>
            <Volume value={volume} onChange={handleVolumeChange} />
            <Sounds selectedSound={sound} onChange={handleSoundChange} />
          </div>
        </div>

        <ReactHowler src={`../sounds/${sound}.mp3`} html5 loop volume={volume} playing={playing} />
      </div>
    </>
  );
}
