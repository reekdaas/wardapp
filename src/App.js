import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Hospital from "./Pages/hospital";
import PatientPage from "./Pages/patient";
import WardPage from "./Pages/ward";
import WardDetails from "./Components/wardDetails";
import PatientDetails from "./Components/patientDetails";
import WardEdit from "./Components/wardEdit";
import PatientEdit from "./Components/patientEdit";

function App() {
  return (
    <div className="App">
      <h1>Ward Management App</h1>
      <ul className="navbar">
        <li>
          {" "}
          <Link to="/">Hospital</Link>
        </li>
        <li>
          {" "}
          <Link to="/ward">Ward</Link>
        </li>
        <li>
          {" "}
          <Link to="/patient">Patient</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Hospital />} />
        <Route path="/ward" element={<WardPage />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/ward/:wardId" element={<WardDetails />} />
        <Route path="/patient/:patientId" element={<PatientDetails />} />
        <Route path="/ward/wardEdit" element={<WardEdit />} />
        <Route path="/ward/wardEdit/:wardId" element={<WardEdit />} />
        <Route path="/patient/patientEdit" element={<PatientEdit />} />
        <Route
          path="/patient/patientEdit/:patientId"
          element={<PatientEdit />}
        />
      </Routes>
    </div>
  );
}

export default App;
