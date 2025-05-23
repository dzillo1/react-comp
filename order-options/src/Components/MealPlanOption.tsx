function MealPlanOption(){
    return(
        <div id="progTypeOptions" className="option-cat d-flex justify-content-between align-items-center">
            <p className="option-title tk-korolev fw-700">Meal Plan 
                <a 
                href="#" 
               // onClick={}
                data-target="#program-type-modal" 
                data-toggle="modal" 
                className="more-info-link d-block"
                >More info
                </a>
            </p> 
            <div className="d-flex justify-content-between gap-3 align-items-end">
                <button 
                type="button" 
                aria-pressed="true" 
               // onClick={} 
                value="classNameic" 
                id="classNameic" 
                name="classNameic-program" 
                className=""
                >Signature
                </button> 
                <div className="d-flex flex-column">
                    <span 
                    className="option-label bg-green-darker tk-korolev text-white text-uppercase fw-700"
                    >Hearty Inspirations
                    </span> 
                    <button 
                    type="button" 
                   // onClick={}
                    value="high-protein" 
                    id="high-protein" 
                    name="high-protein-program" 
                    aria-pressed="false" 
                    className=""
                    >High Protein
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MealPlanOption