import volumeMin from 'assets/images/controls/volume_min.png';
import volumePlus from 'assets/images/controls/volume_plus.png';
import { MouseEvent, useCallback, useEffect } from 'react';

interface VolumeProps {
  value: number;
  onChange: (value: number) => void;
}

export function Volume({ value, onChange }: VolumeProps) {
  function handleProgressClick(e: MouseEvent<HTMLProgressElement>) {
    e.preventDefault();

    const target = e.target as HTMLProgressElement;
    const percentage = Number(Math.abs(e.nativeEvent.offsetX / target.offsetWidth).toFixed(2));

    onChange(percentage);
  }

  function handleVolumeIncrease() {
    const volumeIncreased = parseFloat(value.toFixed(2)) + 0.1;

    if (volumeIncreased > 1) {
      onChange(1);
    } else {
      onChange(volumeIncreased);
    }
  }

  function handleVolumeDecrease() {
    const volumeDecreased = parseFloat(value.toFixed(2)) - 0.1;

    if (volumeDecreased < 0) {
      onChange(0);
    } else {
      onChange(volumeDecreased);
    }
  }

  const onKeyPress = useCallback(
    (event) => {
      switch (event.keyCode) {
        // RIGHT ARROW
        case 39: {
          handleVolumeIncrease();
          break;
        }
        // L KEY
        case 37: {
          handleVolumeDecrease();
          break;
        }
      }
    },
    [value],
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyPress);

    return () => {
      window.removeEventListener('keydown', onKeyPress);
    };
  }, [onKeyPress]);

  return (
    <div className="flex items-center mb-3 hidden sm:flex c-pointer">
      <img className="h-8" src={volumeMin} alt="Volume min" onClick={handleVolumeDecrease} />
      <progress
        className="nes-progress is-primary h-5"
        value={value}
        max="1"
        onClick={handleProgressClick}
      />
      <img className="h-8" src={volumePlus} alt="Volume plus" onClick={handleVolumeIncrease} />
    </div>
  );
}
