import React, { useState } from "react";

function DaysMealsWeekOption(){
            const [selectDays, setselectDays] = useState("most-days");
        
            const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
                setselectDays(e.currentTarget.value);
            };

    return(
        <div id="progTypeOptions" className="option-cat d-flex flex-column mb-3">
            <p className="option-title tk-korolev fw-700 d-flex align-items-center  justify-content-between"><span>Days of Meals per week</span> 
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
                    value="most-days" 
                    id="mostDays" 
                    name="days-meals-week" 
                    aria-pressed="false" 
                    className={`w-50 ${selectDays === "most-days" ? "selected" : ""}`}
                >5 Days
                </button> 
                    <button 
                    type="button" 
                   onClick={handleClick}
                    value="every-day" 
                    id="everyDay" 
                    name="days-meals-week" 
                    aria-pressed="false" 
                    className={`w-50 ${selectDays === "every-day" ? "selected" : ""}`}
                    >7 Days
                    </button>
            </div>
        </div>
    );
}

export default DaysMealsWeekOption