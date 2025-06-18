import React, { useState } from "react";

function MealPlanOption(){

    const [selectedPlan, setSelectedPlan] = useState("classic");

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSelectedPlan(e.currentTarget.value);
    };

    return(
        <div id="progTypeOptions" className="option-cat d-flex flex-column mb-3 flex-md-row justify-content-md-between">
            <p className="option-title d-flex align-items-center flex-md-column align-items-md-start">
                <span className="tk-korolev fw-700">Meal Plan</span> 
                <a 
                href="#" 
               // onClick={}
                data-target="#program-type-modal" 
                data-toggle="modal" 
                className="more-info-link d-block ms-auto ms-md-0"
                >More info
                </a>
            </p> 
            <div className="d-flex justify-content-between gap-3 align-items-end">
                <button 
                type="button" 
                aria-pressed="true" 
               onClick={handleClick} 
                value="classic" 
                id="classic" 
                name="meal-plan" 
                className={selectedPlan === "classic" ? "selected" : ""}
                >Signature
                </button> 
                <div className="d-flex flex-column btn-callout">
                    <span 
                    className="option-label bg-green-darker tk-korolev text-white text-uppercase fw-700"
                    >Hearty Inspirations
                    </span> 
                    <button 
                    type="button" 
                   onClick={handleClick}
                    value="high-protein" 
                    id="highProtein" 
                    name="meal-plan" 
                    aria-pressed="false" 
                    className={selectedPlan === "high-protein" ? "selected" : ""}
                    >High Protein
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MealPlanOption