import DaysMealsWeekOption from "./DaysMealsWeekOption";
import MealPlanOption from "./MealPlanOption";
import MyAgeOption from "./MyAgeOption";
import ShakesOffer from "./ShakesOffer";

type TabContentProps = {
  type: string;
};

function TabContent({type}: TabContentProps) {
    return (
        <div className="bg-white">
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-6 mb-3">
                        <h2 className="tk-korolev">Customize your program</h2>
                        
                    </div>
                </div>
                <div className="row gap-3 gap-md-0 align-items-start">
                    <div className="col-12 col-md-6">
    <MealPlanOption/>
    <MyAgeOption />
    <DaysMealsWeekOption />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="pricing-summary d-flex flex-column gap-3">
                            <div className="border-bottom tk-korolev pb-2 d-flex justify-content-between">
                                <p>
                                    {type === "partners" ? "Price per day per person" : "Price per day"}
                                </p>
                                <p className="price-day">$11.07</p>
                            </div>
                            <div className=" tk-korolev pb-2 d-flex justify-content-between">
                                <p>Today's Price:</p>
                                <p>$309.99</p>
                            </div>
                        </div>
                        <ShakesOffer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabContent