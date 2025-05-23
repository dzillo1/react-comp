import QuantityStepper from "./QuantityStepper"
import FoodImage from "./assets/Hamburger_M.jpg"
import Frozen from "./assets/frozen.svg"
import Glp1 from "./assets/glp1.svg"
import HightProtein from "./assets/high-protein.svg"

function ProductCard(){
    return(
            <div className="card product-card">
                <div className="card-header p-0">
                    <img src={FoodImage} alt="Classic Hamburger" className="food-img img-fluid"/>
                </div>
                <div className="card-body p-0">
                    <p className="food-title tk-korolev mb-3">Classic Hamburger</p>
                    <div className="prod-cat d-flex gap-2">
                        <img src={Frozen} alt="frozen"/>
                        <img src={Glp1} alt="glp1"/>
                        <img src={HightProtein} alt="high protein"/>
                    </div> 
                </div>
                <div className="card-footer p-0">
                    <QuantityStepper />
                </div>
            </div>
    )
}

export default ProductCard