import React, { useState } from "react";

function DaysMealsWeekOption(){
            const [selectDays, setselectDays] = useState("most-days");
        
            const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
                setselectDays(e.currentTarget.value);
            };

    return(
        <div id="progTypeOptions" className="option-cat d-flex flex-column mb-3 flex-md-row justify-content-md-between align-items-md-center">
            <p className="option-title d-flex align-items-center justify-content-between flex-md-column align-items-md-start">
                <span className="tk-korolev fw-700">Days of Meals<br className="d-none d-md-block"/> per week</span> 
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
                    value="most-days" 
                    id="mostDays" 
                    name="days-meals-week" 
                    aria-pressed="false" 
                    className={selectDays === "most-days" ? "selected" : ""}
                >5 Days
                </button> 
                    <button 
                    type="button" 
                   onClick={handleClick}
                    value="every-day" 
                    id="everyDay" 
                    name="days-meals-week" 
                    aria-pressed="false" 
                    className={selectDays === "every-day" ? "selected" : ""}
                    >7 Days
                    </button>
            </div>
        </div>
    );
}

export default DaysMealsWeekOption