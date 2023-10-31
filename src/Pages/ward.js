import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWards } from "../Slice/wardSlice";
import WardList from "../Components/wardList";

export default function WardPage() {
  const dispatch = useDispatch();
  const { allWards, status, error } = useSelector((state) => state.wards);
  // console.log(allWards);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchWards());
    }
  }, [dispatch, status]);
  return (
    <div>
      <h1>Inside Ward Page</h1>
      {status === "pending" && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <WardList data={allWards} />
    </div>
  );
}
