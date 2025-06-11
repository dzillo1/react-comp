import React, { useState } from "react";

function MyAgeOption(){
        const [selectedAge, setselectedAge] = useState("allages");
    
        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            setselectedAge(e.currentTarget.value);
        };

    return(
        <div id="progTypeOptions" className="option-cat d-flex flex-column mb-3">
            <p className="option-title tk-korolev fw-700 d-flex align-items-center justify-content-between"><span>My Age</span> 
                <a 
                href="#" 
               // onClick={}
                data-target="#included" 
                data-toggle="modal" 
                className="more-info-link d-block"
                >More info
                </a>
            </p> 
            <div className="d-flex justify-content-between gap-3 align-items-end w-100">
                <button 
                    type="button" 
                   onClick={handleClick}
                    value="allages" 
                    id="allAges" 
                    name="myage" 
                    aria-pressed="false" 
                    className={`w-50 ${selectedAge === "allages" ? "selected" : ""}`}
                >All Ages
                </button> 
                    <button 
                    type="button" 
                   onClick={handleClick}
                    value="over50" 
                    id="over50" 
                    name="myage" 
                    aria-pressed="false" 
                    className={`w-50 ${selectedAge === "over50" ? "selected" : ""}`}
                    >50 and Over
                    </button>
            </div>
        </div>
    );
}

export default MyAgeOption