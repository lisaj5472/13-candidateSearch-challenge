import { FaPlus } from "react-icons/fa";

interface AddButtonProps {
  onClick: () => void;
}

function AddButton({ onClick }: AddButtonProps) {
  return (
    <button onClick={onClick} aria-label="Add Candidate">
      <FaPlus />
    </button>
  );
}

export default AddButton;

