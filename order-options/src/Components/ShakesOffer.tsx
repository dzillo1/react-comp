import { useState } from 'react';


function ShakesOffer(){
    const [shakesAdded, setShakesAdded] = useState(false);

    return (
        <div id="addShakes"
        className="d-flex flex-column justify content-center align-items-start mb-3">
            <div 
            className="offer-link d-flex gap-2 justify-content-between w-100">
                <p className="tk-korolev">
                    <span 
                    className="fw-900"
                    >Bonus offer:
                    </span> 50% off shakes to jumpstart your weight loss!</p> 
                    <a 
                    href="#" 
                    data-bs-target="#shakes-learn-more" 
                    data-bs-toggle="modal" 
                    className="more-info-link">Details</a>
            </div> 
            <div 
            className="shake-checkbox d-flex align-items-start gap-2 p-3 w-100">
                <div className="form-check d-flex gap-2">
                <input 
                className="form-check-input" 
                type="checkbox" 
                value="" 
                id="shakesAdded"
                aria-checked="false"
                checked={shakesAdded}
                onChange={e => setShakesAdded(e.target.checked)}
                />
                <label className="form-check-label tk-korolev" htmlFor="shakesAdded">
                    Add 28 Protein Shakes<span className="text-green-darker fw-900 text-uppercase d-block">Save $40</span>
                </label>
                </div>
                <p className="ms-auto">
                    <s className="d-block">$79.98</s>
                    <span className="text-green-darker fw-700">$39.98</span>
                </p>
            </div> 
{shakesAdded && (
            <div 
            id="flavSelect"
            className={`w-100 flav-select-transition${shakesAdded ? ' show' : ''}`}>
                <select 
                id="chooseFlavor" 
                name="choose-flavor" 
                className="form-select w-100"
                defaultValue="7698">
                    <option value="7698">Chocolate &amp; Vanilla
                    </option>
                    <option value="7696">Vanilla
                    </option>
                    <option value="7694">Chocolate
                    </option>
                </select>
            </div>
   )}
        </div>
    );
}

export default ShakesOffer