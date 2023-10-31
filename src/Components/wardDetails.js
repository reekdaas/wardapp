import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function WardDetails() {
  const { allWards } = useSelector((state) => state.wards);
  const { wardId } = useParams();

  const ward = allWards.find((w) => w._id === wardId);

  // console.log(ward);
  return (
    <div className="wardView">
      <div className="wardInfo">
        {" "}
        <p>Name: {ward.specializations} department</p>
        <p>Ward Number: {ward?.wardNumber}</p>
        <p>Specializations: {ward?.specializations}</p>
      </div>
      <div className="buttons">
        <button className="wardBtn">Delete</button>
        <button className="wardBtn">Edit</button>
      </div>
    </div>
  );
}
