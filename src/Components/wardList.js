import { useNavigate } from "react-router-dom";

export default function WardList({ data }) {
  const navigate = useNavigate();

  return (
    <div className="wardList">
      <table>
        <thead>
          <tr>
            <th>Ward Number</th>
            <th>Specializations</th>
            <th>Capacity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ward) => (
            <tr
              key={ward._id}
              onClick={() => {
                navigate(`/ward/${ward._id}`);
              }}
            >
              <td>{ward.wardNumber}</td>
              <td>{ward.specializations}</td>
              <td>{ward.capacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
