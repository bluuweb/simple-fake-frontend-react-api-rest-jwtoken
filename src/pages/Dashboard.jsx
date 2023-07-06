import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
export default Dashboard;
