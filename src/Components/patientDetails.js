import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deletePatients } from "../Slice/patientSlice";

export default function PatientDetails() {
  const dispatch = useDispatch();
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
        <Link
          className="wardBtn"
          to={`/patient/patientEdit/${patientId}`}
          state={patient}
        >
          Edit
        </Link>
        <button
          className="wardBtn"
          onClick={() => {
            dispatch(deletePatients(patient._id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
