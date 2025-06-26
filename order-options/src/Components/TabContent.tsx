
import React, { useState, useEffect } from "react";
import DaysMealsWeekOption from "./DaysMealsWeekOption";
import MealPlanOption from "./MealPlanOption";
import MyAgeOption from "./MyAgeOption";
import MenuOption from "./MenuOption";
import ShipmentOption from "./ShipmentOption";
import ShakesOffer from "./ShakesOffer";
import mbgImg from "../assets/2020-MBG-GoldSeal.svg"

type TabContentProps = {
  type: string;
};

function TabContent({type}: TabContentProps) {
  const [selectedShip, setSelectedShip] = useState("autodelivery");
  const [pricePerDay, setpricePerDay] = useState(11.07);
  const [todaysPrice, settodaysPrice] = useState(309.99);
  const [fullPrice, setfullPrice] = useState(619.98);
  const [shipmentAmount, setshipmentAmount] = useState(2);
  const [prePay2Save, setprePay2Save] = useState(62);

      useEffect(() => {
    switch (selectedShip) {
      case "bogo":
        setshipmentAmount(2);
        setprePay2Save(62);
        break;
      case "pre3pay":
        setshipmentAmount(3);
        setprePay2Save(140);
        break;
      case "pre4pay":
        setshipmentAmount(4);
        setprePay2Save(211);
        break;
      case "pre6pay":
        setshipmentAmount(6);
        setprePay2Save(409);
        break;
      default:
        setshipmentAmount(2);
        setprePay2Save(62);
    }
  }, [selectedShip]);




    return (
       
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 mb-3">
                        <h2 className="tk-korolev">Customize your program</h2>
                    </div>
                </div>
                <div className="row gap-3 gap-lg-0 align-items-start">
                    <div className="col-12 col-lg-6">
                        <MealPlanOption />
                        <MyAgeOption />
                        <DaysMealsWeekOption />
                        <MenuOption />
                        <ShipmentOption selectedShip={selectedShip} setSelectedShip={setSelectedShip} />
                    </div>
                    <div className="col-12 col-lg-6 price-col">
                        <div className="pricing-summary d-flex flex-column gap-2">
                            <div className="border-bottom tk-korolev pb-2 d-flex justify-content-between">
                                <p>
                                    {type === "partners" ? "Price per day per person" : "Price per day"}
                                </p>
                                <p className="price-day">{`$${pricePerDay}`}</p>
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
                                        <p>{`-$${prePay2Save}.00`}</p>
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
                        <p className="partner-link d-flex mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 49.57 36.363" role="img" aria-labelledby="partner-icon" focusable="false"><title id="partner-icon">partner icon</title> <g id="Partner-icon" transform="translate(1.578 -9.826)"><g id="Group_1490" data-name="Group 1490" transform="translate(-1.578 10.326)"><path id="Subtraction_2" data-name="Subtraction 2" d="M26.451,31.359H5.466v-3H25.174V25.52c0-3.311-2.288-6-5.1-6H7.323a4.545,4.545,0,0,0-2.743.941A5.809,5.809,0,0,0,2.732,22.9H0A9.222,9.222,0,0,1,2.725,18.32a6.871,6.871,0,0,1,4.6-1.807h1.4a9.007,9.007,0,1,1,9.961,0h1.4c4.219,0,7.651,4.04,7.651,9.007v4.338A1.4,1.4,0,0,1,26.451,31.359ZM13.7,3a6,6,0,1,0,6.005,6A6.011,6.011,0,0,0,13.7,3Z" transform="translate(21.345)" fill="#006b00" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"></path> <path id="Path_2056" data-name="Path 2056" d="M731.491,390.76a9.007,9.007,0,1,1,9.007-9.007A9.009,9.009,0,0,1,731.491,390.76Zm0-15.012a6,6,0,1,0,6,6A6,6,0,0,0,731.491,375.748Z" transform="translate(-717.464 -368.243)" fill="#006b00"></path> <path id="Path_2057" data-name="Path 2057" d="M745.919,398.593h-25.5a1.4,1.4,0,0,1-1.276-1.5v-4.338c0-4.975,3.426-9.007,7.651-9.007h12.751c4.226,0,7.652,4.032,7.652,9.007v4.338A1.4,1.4,0,0,1,745.919,398.593Zm-24.229-3h22.953v-2.837c0-3.316-2.283-6-5.1-6H726.791c-2.818,0-5.1,2.689-5.1,6Z" transform="translate(-719.14 -362.73)" fill="#006b00"></path></g></g></svg> Want to lose weight with a partner? <a className="ms-auto more-info-link" type="button" href="/diet-plans/partners-diet-plan">Learn more</a></p>
                    )}

                    <button type="submit" id="submitBtn" className="btn btn-default">Continue</button>

                    {type !== 'partners' && (
                        <div className="mbg  mt-4 d-flex justify-content-center align-items-center gap-2">
                            <img alt="Money Back Guarantee" height="47" width="auto" src={mbgImg} />
                            <p className="mbg-text tk-korolev fw-900">Try it and love it. Money back guaranteed. <a href="#MBG" data-bs-target="#MBG" data-bs-toggle="modal" className="more-info-link">Details</a></p>
                        </div>
                    )}

                    </div>
                </div>
            </div>
       
    );
}

export default TabContent