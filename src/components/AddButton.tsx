import React from 'react';

interface AddButtonProps {
  onClick: () => void;
}

function AddButton({ onClick }: AddButtonProps) {
  return (
    <button onClick={onClick} aria-label="Add Candidate">
      ➕
    </button>
  );
}

export default AddButton;

