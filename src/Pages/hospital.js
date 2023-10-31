import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHospitalStats } from "../Slice/hospitalaSlices";

export default function Hospital() {
  const dispatch = useDispatch();
  const { allPatients } = useSelector((state) => state.patients);
  const { allWards } = useSelector((state) => state.wards);

  const state = useSelector((state) => state.hospitals);
  console.log(state);

  useEffect(() => {
    const noOfPatients = allPatients.length;
    const noOfWards = allWards.reduce((acc, ward) => acc + ward.capacity, 0);

    dispatch(
      updateHospitalStats({
        totalPatients: noOfPatients,
        currentOccupancyRate: noOfWards,
      })
    );
  }, [dispatch, allPatients, allWards]);

  return (
    <div className="hospital">
      <h2>Hospital View</h2>

      <div className="hospitalTable">
        <p>
          <strong>Total Patients: </strong>
          {state?.totalPatients}
        </p>
        <p>
          <strong>Total Occupancy Rate:</strong>
          {state?.currentOccupancyRate}
        </p>
      </div>
    </div>
  );
}
