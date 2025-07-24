import { useState, useEffect } from "react";
import DaysMealsWeekOption from "./DaysMealsWeekOption";
import MealPlanOption from "./MealPlanOption";
import MyAgeOption from "./MyAgeOption";
import MenuOption from "./MenuOption";
import ShipmentOption from "./ShipmentOption";
import ShakesOffer from "./ShakesOffer";
import mbgImg from "../assets/2020-MBG-GoldSeal.svg";
import pricingData from "../../pricing.json"; 

type TabContentProps = {
  type: string;
};

function TabContent({ type }: TabContentProps) {

  // State for all options
  const [selectedMealPlan, setSelectedMealPlan] = useState("signature");
  const [selectedDays, setSelectedDays] = useState("most-days");
  const [selectedShip, setSelectedShip] = useState("autodelivery");

  // Pricing state
  const [pricePerDay, setPricePerDay] = useState(0);
  const [todaysPrice, setTodaysPrice] = useState(0);
  const [fullPrice, setFullPrice] = useState(0);
  const [shipmentAmount, setShipmentAmount] = useState(2);
  
  //shipping state
const [autoDeliveryPrice, setAutoDeliveryPrice] = useState(0);
const [prePaySave, setPrePaySave] = useState(0);
const [bogoPrice, setBogoPrice] = useState(0);
const [prePay2Save, setPrePay2Save] = useState(0);
const [pre3PayPrice, setPre3PayPrice] = useState(0);
const [prePay3Save, setPrePay3Save] = useState(0);
const [pre4PayPrice, setPre4PayPrice] = useState(0);
const [prePay4Save, setPrePay4Save] = useState(0);        
const [pre6PayPrice, setPre6PayPrice] = useState(0);
const [prePay6Save, setPrePay6Save] = useState(0);

  // Map UI state to pricing.json keys
  const gender = type === "women" ? "women" : type === "men" ? "men" : "partners";
  const plan = selectedMealPlan;
  const days = selectedDays === "most-days" ? "5 day" : "7 day";

  const program = pricingData.programs.find(
    (p) =>
      p.gender === gender &&
      p.plan === plan &&
      p.days === days
  );


useEffect(() => {
  if (!program) return;

  setPricePerDay(program["price-per-day"]);
  setTodaysPrice(program["todays price"]);
  setFullPrice(program["todays price"]);
  setShipmentAmount(1);

  setAutoDeliveryPrice(program["auto-delivery"] ?? 0);
  setPrePaySave(program["prepay save"] ?? 0);
  setBogoPrice(program["pay-2-shipments"] ?? 0);
  setPrePay2Save(program["2-shipment-discount"] ?? 0);
  setPre3PayPrice(program["pay-3-shipments"] ?? 0);
  setPrePay3Save(program["3-shipment-discount"] ?? 0);
  setPre4PayPrice(program["pay-4-shipments"] ?? 0);
  setPrePay4Save(program["4-shipment-discount"] ?? 0);
  setPre6PayPrice(program["pay-6-shipments"] ?? 0);
  setPrePay6Save(program["6-shipment-discount"] ?? 0);

  let newFullPrice = program["todays price"];
  let newPrePaySave = 0;
  let newTodaysPrice = program["todays price"];
  let newShipmentAmount = 1;

  switch (selectedShip) {
    case "bogo":
      newShipmentAmount = 2;
      newFullPrice = program["2-shipment full price"];
      newPrePaySave = program["2-shipment-discount"];
      newTodaysPrice = Number((newFullPrice - newPrePaySave).toFixed(2));
      break;
    case "pre3pay":
      newShipmentAmount = 3;
      newFullPrice = program["3-shipment full price"];
      newPrePaySave = program["3-shipment-discount"];
      newTodaysPrice = Number((newFullPrice - newPrePaySave).toFixed(2));
      break;
    case "pre4pay":
      newShipmentAmount = 4;
      newFullPrice = program["4-shipment full price"];
      newPrePaySave = program["4-shipment-discount"];
      newTodaysPrice = Number((newFullPrice - newPrePaySave).toFixed(2));
      break;
    case "pre6pay":
      newShipmentAmount = 6;
      newFullPrice = program["6-shipment full price"];
      newPrePaySave = program["6-shipment-discount"];
      newTodaysPrice = Number((newFullPrice - newPrePaySave).toFixed(2));
      break;
    default:
      newShipmentAmount = 1;
      newFullPrice = program["todays price"];
      newPrePaySave = 0;
      newTodaysPrice = program["todays price"];
  }

  setShipmentAmount(newShipmentAmount);
  setFullPrice(newFullPrice);
  setPrePaySave(newPrePaySave);
  setTodaysPrice(newTodaysPrice);
}, [program, selectedShip, selectedMealPlan, selectedDays, type]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 mb-3">
          <h2 className="tk-korolev">Customize your program</h2>
        </div>
      </div>
      <div className="row gap-3 gap-lg-0 align-items-start">
        <div className="col-12 col-lg-6">
          <MealPlanOption selectedPlan={selectedMealPlan} setSelectedPlan={setSelectedMealPlan} />
          <MyAgeOption />
          <DaysMealsWeekOption selectedDays={selectedDays} setSelectedDays={setSelectedDays} />
          <MenuOption />
          <ShipmentOption selectedShip={selectedShip}
  setSelectedShip={setSelectedShip}
  autoDeliveryPrice={autoDeliveryPrice}
  prePaySave={prePaySave}
  bogoPrice={bogoPrice}
  prePay2Save={prePay2Save}
  pre3PayPrice={pre3PayPrice}
  prePay3Save={prePay3Save}
  pre4PayPrice={pre4PayPrice}
  prePay4Save={prePay4Save}
  pre6PayPrice={pre6PayPrice}
  prePay6Save={prePay6Save} />
        </div>
        <div className="col-12 col-lg-6 price-col">
          <div className="pricing-summary d-flex flex-column gap-2">
            <div className="border-bottom tk-korolev pb-2 d-flex justify-content-between">
              <p>
                {type === "partners" ? "Price per day per person" : "Price per day"}
              </p>
              <p className="price-day">{`$${pricePerDay.toFixed(2)}`}</p>
            </div>
            {(selectedShip === "bogo" ||
              selectedShip === "pre3pay" ||
              selectedShip === "pre4pay" ||
              selectedShip === "pre6pay") && (
              <div id="shipmentDiscount" className="border-bottom">
                <div className="d-flex justify-content-between mb-2">
                  <p>Full price:</p>
                  <p className="price-today">{`$${fullPrice}`}</p>
                </div>
                <div className="delivery-savings d-flex justify-content-between pb-2">
                  <p>Pay For {shipmentAmount} Shipments Discount:</p>
                  <p>{`-$${prePaySave.toFixed(2)}`}</p>
                </div>
              </div>
            )}
            <div className="arial pb-3 d-flex justify-content-between fw-700">
              <p>Today's Price:</p>
              <p>{`$${todaysPrice}`}</p>
            </div>
          </div>
          <ShakesOffer />
          {type !== 'partners' && (
            <div className="partner-link d-flex mb-3">
               <p> Want to lose weight with a partner? <a type="button"  href="/diet-plans/partners-diet-plan" className="text-medium">Learn more</a></p>
            </div>
          )}
          <button type="submit" id="submitBtn" className="btn btn-default">Continue</button>
          {type !== 'partners' && (
            <div className="mbg  mt-4 d-flex justify-content-center align-items-center gap-2">
              <img alt="Money Back Guarantee" height="47" width="auto" src={mbgImg} />
              <p className="mbg-text tk-korolev fw-900">
                Try it and love it. Money back guaranteed. <a href="#MBG" data-bs-target="#MBG" data-bs-toggle="modal" className="more-info-link">Details</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
}

export default TabContent