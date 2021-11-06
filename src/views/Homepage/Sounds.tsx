import Button from 'components/Button';
import { sounds } from 'utils/constants';

interface SoundsProps {
  selectedSound: string;
  onChange: (sound: string) => void;
}

export function Sounds({ selectedSound, onChange }: SoundsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-h-64 sm:max-h-full overflow-auto sm:overflow-hidden pb-2">
      {sounds.map((sound) => (
        <Button
          key={sound.value}
          className="h-full"
          variant={selectedSound === sound.value ? 'success' : undefined}
          onClick={() => onChange(sound.value)}
        >
          {sound.label}
        </Button>
      ))}
    </div>
  );
}
