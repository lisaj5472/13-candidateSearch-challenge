import { MdDelete } from "react-icons/md";  
interface RemoveButtonProps {
  onClick: () => void;
}

function RemoveButton({ onClick}: RemoveButtonProps) {
  return (
    <button onClick={onClick} aria-label="Remove Candidate">
      <MdDelete />
    </button>
  );
}

export default RemoveButton;
