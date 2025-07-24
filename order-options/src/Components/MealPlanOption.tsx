type MealPlanOptionProps = {
  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;
};

function MealPlanOption({ selectedPlan, setSelectedPlan }: MealPlanOptionProps) {
  return (
    <div className="meal-plan-options option-cat d-flex flex-column mb-3 flex-md-row justify-content-md-between">
        <p className="option-title d-flex align-items-center justify-content-between flex-md-column align-items-md-start"><span className="tk-korolev fw-700">Program Type</span><a href="#" data-target="#program-type-modal" data-toggle="modal" className="more-info-link d-block">More info</a></p>

      <div className="d-flex justify-content-between gap-3 align-items-end">
      <button
        className={selectedPlan === "signature" ? "active" : ""}
        onClick={() => setSelectedPlan("signature")}
      >
        Signature
      </button>
      <button
        className={selectedPlan === "high-protein" ? "active" : ""}
        onClick={() => setSelectedPlan("high-protein")}
      >
        High-Protein
      </button>
        </div>

    </div>
  );
}

export default MealPlanOption;