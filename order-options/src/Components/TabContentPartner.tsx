import { useState } from "react";
import MealPlanOption from "./MealPlanOption";

function TabContentPartner() {

    return (
        <div className="bg-white p-3">
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-6 mb-3">
                        <h2>Customize your program</h2>
                    </div>
                </div>
                <div className="row flex-nowrap gap-3 align-items-center">
                    <div className="col-12 col-md-6">

                        {(() => {
                            const [selectedPlan, setSelectedPlan] = useState<string>("");
                            return (
                                <MealPlanOption
                                    selectedPlan={selectedPlan}
                                    setSelectedPlan={setSelectedPlan}
                                />
                            );
                        })()}
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="price-per-day d-flex justify-content-between">
                            <p>Price per day per person:</p>
                            <p className="price-day">$10.02</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabContentPartner