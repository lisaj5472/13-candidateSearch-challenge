import React from 'react';

interface SkipButtonProps {
  onClick: () => void;
}

function SkipButton({ onClick}: SkipButtonProps) {
  return (
    <button onClick={onClick} aria-label="Skip to Next Candidate">
      "-"
    </button>
  );
}

export default SkipButton;
