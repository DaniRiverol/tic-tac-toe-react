// eslint-disable-next-line react/prop-types
const Square = ({ index, isSelected, children, updateBoard }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

const handleClick=()=>{
   
    updateBoard(index)
}

  return (
    <div className={className} onClick={handleClick}>
    {children}
    </div>
  );
};
export default Square;
