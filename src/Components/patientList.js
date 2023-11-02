import { useNavigate } from "react-router-dom";

export default function PatientList({ data }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="patientList">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {data.map((patient) => (
              <tr
                key={patient._id}
                onClick={() => {
                  navigate(`/patient/${patient._id}`);
                }}
              >
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={() => {
          navigate("/patient/patientEdit");
        }}
      >
        Add Patient
      </button>
    </>
  );
}
