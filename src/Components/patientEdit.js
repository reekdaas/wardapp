import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editPatients, postPatients } from "../Slice/patientSlice";

export default function PatientEdit() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const patient = state ? state : null;
  const dispatch = useDispatch();

  const [patientDetails, setPatientDetails] = useState({
    name: patient ? patient.name : "",
    age: patient ? patient.age : "",
    gender: patient ? patient.gender : "female",
    history: patient ? patient.history : "",
    contact: patient ? patient.contact : "",
    wardNumber: patient ? patient.wardNumber : "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patient) {
      dispatch(
        editPatients({ patientId: patient._id, patientData: patientDetails })
      );
    } else {
      dispatch(postPatients(patientDetails));
    }
    setPatientDetails({
      nam: "",
      age: "",
      gender: "female",
      history: "",
      contact: "",
      wardNumber: "",
    });
    // console.log(patientDetails);
    navigate("/patient");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientDetails((state) => ({ ...state, [name]: value }));
  };
  const options = [
    { label: "Female", value: "female" },
    { label: "Male", value: "male" },
  ];

  return (
    <div className="editPage">
      <form className="editForm" onSubmit={handleSubmit}>
        <div className="formRow">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={patientDetails.name}
            id="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="formRow">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={patientDetails.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formRow">
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            value={patientDetails.gender}
            onChange={handleChange}
          >
            {options.map((val) => (
              <option value={val.value} key={val.value}>
                {" "}
                {val.label}
              </option>
            ))}
          </select>
        </div>
        <div className="formRow">
          <label htmlFor="history">History:</label>
          <input
            type="text"
            name="history"
            id="history"
            value={patientDetails.history}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formRow">
          <label htmlFor="contact">Contact:</label>
          <input
            type="number"
            name="contact"
            id="contact"
            value={patientDetails.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formRow">
          <label htmlFor="wardNo">Ward Number</label>
          <input
            type="number"
            name="wardNumber"
            id="wardNo"
            value={patientDetails.wardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{patient ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
}
