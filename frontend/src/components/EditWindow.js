import React, { useState } from "react";
import DatePicker from "react-datepicker";
import CustomButton from "./CustomButton";
import "./MovieInfo.css";

const EditWindow = () => {
  const currentDate = new Date();
  const [myYear, setMyYear] = useState(currentDate);
  return (
    <div className="form">
      <div className="form-body">
        <div className="MovieName">
          <label className="form-label" for="MovieName">
            Movie Name{" "}
          </label>
          <input
            className="form-input"
            type="text"
            id="MovieName"
            placeholder="Movie Name"
          />
        </div>
        <div className="YearOfRelease">
          <label className="form-label" for="YearOfRelease">
            Year of Release{" "}
          </label>
          <DatePicker
            selected={myYear}
            onChange={(date) => setMyYear(date)}
            className="form-input"
            showYearPicker
            dateFormat="yyyy"
          />
        </div>
        <div className="producer">
          <label className="form-label" for="producer">
            Producer{" "}
          </label>
          <input
            type="text"
            id="producer"
            className="form-input"
            placeholder="Producer"
          />
        </div>
        <div className="actors">
          <label className="form-label" for="actors">
            Actors{" "}
          </label>
          <input
            type="text"
            id="actors"
            className="form-input"
            placeholder="Actors"
          />
        </div>
      </div>
      <div class="footer">
        <CustomButton buttonText="Save" onClickTask={() => console.log('HII')}/>
      </div>
    </div>
  );
};

export default EditWindow;
