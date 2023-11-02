import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { deleteWards } from "../Slice/wardSlice";

export default function WardDetails() {
  const dispatch = useDispatch();
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
        <Link
          className="wardBtn"
          state={ward}
          to={`/ward/wardEdit/${ward._id}`}
        >
          Edit
        </Link>

        <button
          className="wardBtn"
          onClick={() => {
            dispatch(deleteWards(ward._id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
