import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients } from "../Slice/patientSlice";
import PatientList from "../Components/patientList";

export default function PatientPage() {
  const dispatch = useDispatch();
  const { allPatients, error, status } = useSelector((state) => state.patients);

  // console.log(state);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPatients());
    }
  }, [dispatch, status]);

  return (
    <div>
      <h2>Inside Patient Page</h2>
      {status === "pending" && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <PatientList data={allPatients} />
    </div>
  );
}
