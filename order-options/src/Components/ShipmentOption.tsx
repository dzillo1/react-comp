function ShipmentOption(){
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
                                aria-pressed="false" 
                                className="delivery-btn">
                                    <div className="d-flex flex-column">
                                        <div className="del-type fw-900 tk-korolev">
                                            Monthly Auto-Delivery
                                        </div> 
                                    <div className="d-flex">
                                        <div className="del-price">$309.99 </div> 
                                        <div className="per">/first shipment</div></div>
                                    </div>
                                </button>
                                <div className="d-flex align-items-center gap-2">
                                    <p className="fw-700 tk-korolev">or Pre-pay &amp; Save up to $409!:</p> <hr/>
                                </div>
    
                                <button 
                                type="button" 
                                id="bogo"
                                value="bogo"
                                name="delivery d-flex align-items-center"
                                aria-pressed="false"
                                className="delivery-btn">
                                    <div className="d-flex flex-column justify-content-between">
                                        <span className="del-type d-flex justify-content-between fw-900 tk-korolev">
                                            Pay for 2 Shipments Now
                                        </span> 
                                        <div className="d-flex">
                                            <span className="del-price">$278.99 </span> 
                                            <span className="per">/shipment</span>
                                        </div>
                                    </div>
                                    <span className="save ms-auto">Save<br className="d-block d-lg-none"/> $62</span> 
                                </button>
    
                                <button type="button" value="pre3pay" id="pre3pay" name="delivery"  aria-pressed="false" className="delivery-btn">
                                    <div className="d-flex flex-column">
                                    <span className="del-type fw-900 tk-korolev">
                                        Pay for 3 Shipments Now 
                                    </span> 
                                    <div>
                                        <div className="d-flex">
                                            <span className="del-price">$263.49 </span> 
                                            <span className="per">/shipment</span>
                                        </div>
                                    </div> 
                                    </div>
                                    <span className="save ms-auto">Save<br className="d-block d-lg-none"/> $140</span> 
                                </button>
    
                                <button type="button" value="pre4pay" id="pre4pay" name="delivery"  aria-pressed="false" className="delivery-btn">
                                    <div className="d-flex flex-column">
                                    <span className="del-type fw-900 tk-korolev">
                                        Pay for 4 Shipments Now 
                                        </span> 
                                        <div>
                                            <div className="d-flex">
                                                <span className="del-price"> $257.29 </span> 
                                                <span className="per">/shipment
                                                </span>
                                            </div>
                                        </div> 
                                    </div>
                                    <span className="save ms-auto">Save<br className="d-block d-lg-none"/> $211</span> 
                                </button>
    
                                <button type="button" value="pre6pay" id="pre6pay" name="delivery"  aria-pressed="false" className="delivery-btn">
                                    <div className="ship-btn-txt">
                                    <span className="del-type fw-900 tk-korolev">
                                        Pay for 6 Shipments Now 
                                        </span> 
                                        <div>
                                            <div className="d-flex">
                                                <span className="del-price"> $241.79 </span> 
                                                <span className="per">/shipment</span>
                                            </div>
                                        </div> 
                                    </div>
                                    <span className="save ms-auto">Save<br className="d-block d-lg-none"/> $409</span>
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