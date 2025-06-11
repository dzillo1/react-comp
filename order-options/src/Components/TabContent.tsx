import DaysMealsWeekOption from "./DaysMealsWeekOption";
import MealPlanOption from "./MealPlanOption";
import MyAgeOption from "./MyAgeOption";

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
                <div className="row gap-3 align-items-start">
                    <div className="col-12 col-md-6">
    <MealPlanOption/>
    <MyAgeOption />
    <DaysMealsWeekOption />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="price-per-day d-flex justify-content-between">
                            <p>
                                {type === "partners" ? "Price per day per person" : "Price per day"}
                            </p>
                            <p className="price-day">$11.07</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabContent