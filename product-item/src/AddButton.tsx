
function AddButton({onClick}: {onClick: () => void}){
    return <button className="add-to-cart-btn" onClick={onClick}>Add +</button>
}

export default AddButton