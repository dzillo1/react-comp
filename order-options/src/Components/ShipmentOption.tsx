import React, { useState } from "react";

type ShipmentOptionProps = {
    selectedShip: string;
    setSelectedShip: (value: string) => void;
};




function ShipmentOption({ selectedShip, setSelectedShip }: ShipmentOptionProps){



    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSelectedShip(e.currentTarget.value);
    };

    const [prePaySave, setPrePaySave] = useState(409);
    const [autoDeliveryPrice, setautoDeliveryPrice] = useState(309.99);
    const [bogoPrice, setbogoPrice] = useState(278.99);
    const [prePay2Save, setprePay2Save] = useState(62);
    const [pre3PayPrice, setpre3PayPrice] = useState(263.49);
    const [prePay3Save, setprePay3Save] = useState(140);
    const [pre4PayPrice, setpre4PayPrice] = useState(257.29);
    const [prePay4Save, setprePay4Save] = useState(211);
    const [pre6PayPrice, setpre6PayPrice] = useState(241.79);
    const [prePay6Save, setprePay6Save] = useState(409);
    

    return (
        <>
        <h2 className="tk-korolev mt-4 mb-2">Purchase Options</h2>
    
                            <div className="d-flex flex-column gap-3">
                                <div className="d-flex align-items-center gap-2">
                                    <p className="fw-700 tk-korolev">Pay monthly:</p> <hr/>
                                </div>
    
                                <button 
                                type="button" 
                                id="autoDelivery" 
                                value="autodelivery" 
                                name="delivery"
                                onClick={handleClick} 
                                aria-pressed="false" 
                                className={"delivery-btn" + (selectedShip === "autodelivery" ? " selected" : "")}
                                >
                                    <div className="d-flex flex-column">
                                        <div className="del-type fw-900 tk-korolev">
                                            Monthly Auto-Delivery
                                        </div> 
                                    <div className="d-flex">
                                        <div className="del-price">{`$${autoDeliveryPrice}`}</div> 
                                        <div className="per">/first shipment</div></div>
                                    </div>
                                </button>
                                <div className="d-flex align-items-center gap-2">
                                    <p className="fw-700 tk-korolev">{`or Pre-pay & Save up to $${prePaySave}!`}</p> <hr/>
                                </div>
    
                                <button 
                                type="button" 
                                id="bogo"
                                value="bogo"
                                name="delivery"
                                onClick={handleClick} 
                                aria-pressed="false"
                                className={"delivery-btn" + (selectedShip === "bogo" ? " selected" : "")}
                                >
                                    <div className="d-flex flex-column justify-content-between">
                                        <span className="del-type d-flex justify-content-between fw-900 tk-korolev">
                                            Pay for 2 Shipments Now
                                        </span> 
                                        <div className="d-flex">
                                            <span className="del-price">{`$${bogoPrice}`}</span> 
                                            <span className="per">/shipment</span>
                                        </div>
                                    </div>
                                    <span className="save ms-auto">Save<br className="d-block d-lg-none"/> {`$${prePay2Save}`}</span> 
                                </button>
    
                                <button 
                                type="button" 
                                value="pre3pay" 
                                id="pre3pay" 
                                name="delivery"  
                                onClick={handleClick} 
                                aria-pressed="false" 
                                className={"delivery-btn" + (selectedShip === "pre3pay" ? " selected" : "")}
                                >
                                <div className="d-flex flex-column">
                                    <span className="del-type fw-900 tk-korolev">
                                        Pay for 3 Shipments Now 
                                    </span> 
                                    <div>
                                        <div className="d-flex">
                                            <span className="del-price">{`$${pre3PayPrice}`}</span> 
                                            <span className="per">/shipment</span>
                                        </div>
                                    </div> 
                                    </div>
                                    <span className="save ms-auto">Save<br className="d-block d-lg-none"/>{`$${prePay3Save}`}</span> 
                                </button>
    
                                <button 
                                type="button" 
                                value="pre4pay" 
                                id="pre4pay" 
                                name="delivery"  
                                onClick={handleClick} 
                                aria-pressed="false" 
                                className={"delivery-btn" + (selectedShip === "pre4pay" ? " selected" : "")}
                                >
                                    <div className="d-flex flex-column">
                                    <span className="del-type fw-900 tk-korolev">
                                        Pay for 4 Shipments Now 
                                        </span> 
                                        <div>
                                            <div className="d-flex">
                                                <span className="del-price">{`$${pre4PayPrice}`}</span> 
                                                <span className="per">/shipment
                                                </span>
                                            </div>
                                        </div> 
                                    </div>
                                    <span className="save ms-auto">Save<br className="d-block d-lg-none"/>{`$${prePay4Save}`}</span> 
                                </button>
    
                                <button 
                                type="button" 
                                value="pre6pay" 
                                id="pre6pay" 
                                name="delivery" 
                                onClick={handleClick}  
                                aria-pressed="false" 
                                className={"delivery-btn" + (selectedShip === "pre6pay" ? " selected" : "")}
                                >
                                    <div className="ship-btn-txt">
                                    <span className="del-type fw-900 tk-korolev">
                                        Pay for 6 Shipments Now 
                                        </span> 
                                        <div>
                                            <div className="d-flex">
                                                <span className="del-price">{`$${pre6PayPrice}`}</span> 
                                                <span className="per">/shipment</span>
                                            </div>
                                        </div> 
                                    </div>
                                    <span className="save ms-auto">Save<br className="d-block d-lg-none"/>{`$${prePay6Save}`}</span>
                                </button>

                               <div className="d-flex gap-2">
                                    <img src="https://www.test.nutrisystem.com/images/diet-plans/basic/truck-grn-icon.svg" alt="green delivery truck"/> 
                                    <p>Free shipping when you pay for 2 or more shipments</p>
                                </div> 
    
                            </div>
        </>
    )
}

export default ShipmentOption