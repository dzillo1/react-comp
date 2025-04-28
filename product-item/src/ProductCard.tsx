import QuantityStepper from "./QuantityStepper"
import FoodImage from "./assets/Italian-Sausage-And-Turkey-Pepperoni-Pizza_M.jpg"
import Frozen from "./assets/frozen.svg"
import Glp1 from "./assets/glp1.svg"
import HightProtein from "./assets/high-protein.svg"

function productCard(){
    return(
        
            <div className="card product-card">
                <div className="card-header p-0">
                    <img src={FoodImage} alt="Italian Sausage and Turkey Pepperoni Pizza" className="food-img img-fluid"/>
                </div>
                <div className="card-body p-0">
                    <p className="food-title tk-korolev mb-3">Italian Sausage and Turkey Pepperoni Pizza</p>
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

export default productCard