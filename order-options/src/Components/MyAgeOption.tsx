import React, { useState } from "react";

function MyAgeOption(){
        const [selectedAge, setselectedAge] = useState("allages");
    
        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            setselectedAge(e.currentTarget.value);
        };

    return(
        <div id="progTypeOptions" className="option-cat d-flex flex-column mb-3 flex-md-row justify-content-md-between">
            <p className="option-title d-flex align-items-center justify-content-between flex-md-column align-items-md-start">
                <span className="tk-korolev fw-700">My Age</span> 
                <a 
                href="#" 
               // onClick={}
                data-target="#included" 
                data-toggle="modal" 
                className="more-info-link d-block"
                >More info
                </a>
            </p> 
            <div className="d-flex justify-content-between gap-3 align-items-end">
                <button 
                    type="button" 
                   onClick={handleClick}
                    value="allages" 
                    id="allAges" 
                    name="myage" 
                    aria-pressed="false" 
                    className={selectedAge === "allages" ? "selected" : ""}
                >All Ages
                </button> 
                    <button 
                    type="button" 
                   onClick={handleClick}
                    value="over50" 
                    id="over50" 
                    name="myage" 
                    aria-pressed="false" 
                    className={selectedAge === "over50" ? "selected" : ""}
                    >50 and Over
                    </button>
            </div>
        </div>
    );
}

export default MyAgeOption