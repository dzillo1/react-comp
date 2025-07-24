type DaysMealsWeekOptionProps = {
  selectedDays: string;
  setSelectedDays: (days: string) => void;
};

function DaysMealsWeekOption({ selectedDays, setSelectedDays }: DaysMealsWeekOptionProps) {
  return (
    <div className="days-meals-options option-cat d-flex flex-column mb-3 flex-md-row justify-content-md-between">
                <p className="option-title d-flex align-items-center justify-content-between flex-md-column align-items-md-start"><span className="tk-korolev fw-700">Days of Meals per week</span><a href="#" data-target="#my-meals-difference" data-toggle="modal" className="more-info-link d-block">More info</a></p>
      <div className="d-flex justify-content-between gap-3 align-items-end">

      <button
        className={selectedDays === "most-days" ? "active" : ""}
        onClick={() => setSelectedDays("most-days")}
      >
        5 Days
      </button>
      <button
        className={selectedDays === "every-day" ? "active" : ""}
        onClick={() => setSelectedDays("every-day")}
      >
        7 Days
      </button>
      </div>
    </div>
  );
}

export default DaysMealsWeekOption;