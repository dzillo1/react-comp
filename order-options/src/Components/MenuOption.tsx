import React, { useState } from "react";

function MenuOptions(){

        const [selectedPlan, setSelectedPlan] = useState("favorite");
    
        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            setSelectedPlan(e.currentTarget.value);
        };

    return(
        <div id="menuOptions" className="option-cat d-flex flex-column mb-3">
            <p className="option-title d-flex align-items-center">
            <span className="tk-korolev fw-700">Menu</span> 
            <a 
            href="#" 
            // onClick={}
            data-bs-target="#best-for-me" 
            data-bs-toggle="modal" 
            className="more-info-link d-block ms-auto">
                More info
            </a>
            </p> 
            <div className="d-flex justify-content-between gap-3 align-items-end w-100">
                
                    <div className="d-flex flex-column w-50">
                        <span 
                        className="option-label bg-green-darker tk-korolev text-white text-uppercase fw-700">Best for first order</span> 
                        <button 
                        type="button" 
                        aria-pressed="true" 
                        onClick={handleClick} 
                        value="favorite" 
                        id="favorites" 
                        name="menuoption" 
                        className={selectedPlan === "favorite" ? "selected" : ""}>
                            Chef’s Picks
                        </button>
                    </div>
                   
                    <button 
                    type="button" 
                    aria-pressed="false" 
                    onClick={handleClick} 
                    value="custom" 
                    id="custom" 
                    name="menuoption" 
                    className={`w-50 ${selectedPlan === "custom" ? "selected" : ""}`}>
                        I’ll Pick My Menu
                    </button>
                </div>
            </div>
    )
}

export default MenuOptions