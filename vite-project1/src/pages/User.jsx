import { useParams } from "react-router";

function User  ()  {
const {id}=useParams();
return<h2>User profile ID{id}</h2>;
}

export default User;
