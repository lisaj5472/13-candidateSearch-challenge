import React from 'react';

interface RemoveButtonProps {
  onClick: () => void;
}

function RemoveButton({ onClick}: RemoveButtonProps) {
  return (
    <button onClick={onClick} aria-label="Remove Candidate">
      🗑️
    </button>
  );
}

export default RemoveButton;
