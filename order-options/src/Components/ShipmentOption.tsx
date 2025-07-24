type ShipmentOptionProps = {
  selectedShip: string;
  setSelectedShip: (ship: string) => void;
  autoDeliveryPrice: number;
  prePaySave: number;
  bogoPrice: number;
  prePay2Save: number;
  pre3PayPrice: number;
  prePay3Save: number;
  pre4PayPrice: number;
  prePay4Save: number;
  pre6PayPrice: number;
  prePay6Save: number;
};

function ShipmentOption({   selectedShip,
  setSelectedShip,
  autoDeliveryPrice,
  prePaySave,
  bogoPrice,
  prePay2Save,
  pre3PayPrice,
  prePay3Save,
  pre4PayPrice,
  prePay4Save,
  pre6PayPrice,
  prePay6Save }: ShipmentOptionProps) {

  return (
    <div className="shipment-options ">
        <h2 className="tk-korolev mb-2">Purchase Options</h2>
         <div className="d-flex flex-column gap-3">
            <div className="d-flex align-items-center gap-2">
                <p className="fw-700 tk-korolev">Pay monthly:</p> <hr/>
            </div>

      <button
        type="button" 
        id="autoDelivery" 
        value="autodelivery" 
        name="delivery"
        className={selectedShip === "autodelivery" ? "active" : ""}
        onClick={() => setSelectedShip("autodelivery")}
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
        className={selectedShip === "bogo" ? "active" : ""}
        onClick={() => setSelectedShip("bogo")}
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
          <span className="save ms-auto">Save <br className="d-block d-lg-none"/> {`$${prePay2Save}`}</span> 
      </button>

      <button
        type="button" 
        value="pre3pay" 
        id="pre3pay" 
        name="delivery"
        className={selectedShip === "pre3pay" ? "active" : ""}
        onClick={() => setSelectedShip("pre3pay")}
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
        <span className="save ms-auto">Save <br className="d-block d-lg-none"/>{`$${prePay3Save}`}</span> 
      </button>

      <button
        type="button" 
        value="pre4pay" 
        id="pre4pay" 
        name="delivery"
        className={selectedShip === "pre4pay" ? "active" : ""}
        onClick={() => setSelectedShip("pre4pay")}
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
        <span className="save ms-auto">Save <br className="d-block d-lg-none"/>{`$${prePay4Save}`}</span> 
      </button>

      <button
        type="button" 
        value="pre6pay" 
        id="pre6pay" 
        name="delivery"
        className={selectedShip === "pre6pay" ? "active" : ""}
        onClick={() => setSelectedShip("pre6pay")}
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
            <span className="save ms-auto">Save <br className="d-block d-lg-none"/>{`$${prePay6Save}`}</span>
      </button>

      </div>
    </div>
  );
}

export default ShipmentOption;