import { useState } from "react";

function QuantityStepper() {
    const [quantity, setQuantity] = useState(0);

    const handleDecrease = () => {
        if (quantity > 0) setQuantity(quantity - 1);
    };

    const handleIncrease = () => {
        if (quantity < 999) setQuantity(quantity + 1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(0, Math.min(999, parseInt(e.target.value) || 0));
        setQuantity(value);
    };

    return (

        <div className="counter d-flex">
            <button type="button" 
                className="lower-qty btn exclude-load fw-400 d-flex align-items-center justify-content-center"
                onClick={handleDecrease}
                >-
                <span className="visually-hidden">Remove</span></button> 
            <input type="number" 
                    title="numbers only" 
                    min="0" 
                    max="999"
                    value={quantity} 
                    onChange={handleChange}
                    className="form-control qty fw-700"
                    /> 
            <button type="button" 
                    className="add-qty btn exclude-load d-flex align-items-center justify-content-center"
                    onClick={handleIncrease}
                    >+<span className="visually-hidden">Add</span></button>
        </div>
    );
}
export default QuantityStepper