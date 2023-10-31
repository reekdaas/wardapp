import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function PatientDetails() {
  const { patientId } = useParams();
  const { allPatients } = useSelector((state) => state.patients);

  const patient = allPatients.find((p) => p._id === patientId);
  // console.log(patient);

  return (
    <div className="patientDetails">
      <div className="patientView">
        <p>Name: {patient?.name}</p>
        <p>Age: {patient.age}</p>
        <p>Gender: {patient.gender}</p>
        <p>Medical History: {patient.history}</p>
        <p>Assigned Ward: {patient.wardNumber}</p>
      </div>
      <div className="buttons">
        <button className="wardBtn">Delete</button>
        <button className="wardBtn">Edit</button>
      </div>
    </div>
  );
}
