import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export function Spinner(): JSX.Element {
  return (
    <div className="flex h-[400px] w-full items-center justify-center bg-white">
      <div className="flex h-4  w-4 animate-spin items-center justify-center">
        <FontAwesomeIcon className="animate-pulse" icon={faSpinner} size="2x" />
      </div>
    </div>
  );
}