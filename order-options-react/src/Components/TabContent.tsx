import MealPlanOption from "./MealPlanOption";

function TabContent() {
    return (
        <div className="bg-white p-3">
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-6 g-0">
                        <h2>Customize your program</h2>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 g-0">
    <MealPlanOption/>
                    </div>
                    <div className="col-12 col-md-6 g-0">
                        <div className="price-per-day d-flex justify-content-between">
                            <p>Price per day</p>
                            <p className="price-day">$11.07</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabContent