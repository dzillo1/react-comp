import React, { useState } from "react";

function MenuOptions(){

        const [selectedPlan, setSelectedPlan] = useState("favorite");
    
        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            setSelectedPlan(e.currentTarget.value);
        };

    return(
        <div id="menuOptions" className="option-cat d-flex flex-column mb-3 flex-md-row justify-content-md-between">
            <p className="option-title d-flex align-items-center flex-md-column align-items-md-start">
            <span className="tk-korolev fw-700">Menu</span> 
            <a 
            href="#" 
            // onClick={}
            data-bs-target="#best-for-me" 
            data-bs-toggle="modal" 
            className="more-info-link d-block ms-auto ms-md-0">
                More info
            </a>
            </p> 
            <div className="d-flex justify-content-between gap-3 align-items-end">
                
                    <div className="d-flex flex-column btn-callout">
                        <span 
                        className="option-label bg-green-darker tk-korolev text-white text-uppercase fw-700">Best for first order</span> 
                        <button 
                        type="button" 
                        aria-pressed="true" 
                        onClick={handleClick} 
                        value="favorite" 
                        id="favorites" 
                        name="menuoption" 
                        className={selectedPlan === "favorite" ? "active" : ""}>
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
                    className={selectedPlan === "custom" ? "active" : ""}>
                        I’ll Pick My Menu
                    </button>
                </div>
            </div>
    )
}

export default MenuOptions