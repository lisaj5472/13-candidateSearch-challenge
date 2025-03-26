import {FaMinus} from 'react-icons/fa';

interface SkipButtonProps {
  onClick: () => void;
}

function SkipButton({ onClick}: SkipButtonProps) {
  return (
    <button onClick={onClick} aria-label="Skip to Next Candidate">
      <FaMinus />
    </button>
  );
}

export default SkipButton;
