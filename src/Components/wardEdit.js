import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editWard, postWard } from "../Slice/wardSlice";

export default function WardEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const ward = state ? state : null;

  const [wardDetails, setWardDetails] = useState({
    wardNumber: ward ? ward.wardNumber : "",
    capacity: ward ? ward.capacity : "",
    specializations: ward ? ward.specializations : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setWardDetails((state) => ({ ...state, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(wardDetails);
    if (ward) {
      dispatch(editWard({ wardId: ward._id, wardData: wardDetails }));
    } else {
      dispatch(postWard(wardDetails));
    }
    setWardDetails({ wardNumber: "", capacity: "", specializations: "" });
    navigate("/ward");
  };

  return (
    <div className="editPage">
      <form className="editForm" onSubmit={handleSubmit}>
        <div className="formRow">
          <label htmlFor="specializations">Specializations:</label>
          <input
            type="text"
            id="specializations"
            name="specializations"
            value={wardDetails.specializations}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formRow">
          <label htmlFor="wardNumber">Ward Number:</label>
          <input
            type="number"
            id="wardNumber"
            name="wardNumber"
            value={wardDetails.wardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formRow">
          <label htmlFor="capacity">Capacity:</label>
          <input
            type="number"
            id="capacity"
            name="capacity"
            value={wardDetails.capacity}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{ward ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
}
