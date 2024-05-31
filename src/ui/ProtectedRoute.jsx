import { useEffect } from "react";
import { useUser } from "../fetures/users/useUser";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isPending, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate("/login");
    },
    [isAuthenticated, isPending, navigate],
  );

  if (isPending) return <Loader />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
