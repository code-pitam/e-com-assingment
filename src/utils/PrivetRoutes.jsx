import { useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const PrivateRoutes = () => {
//   let auth = { token: false };
  const authData = useSelector((data) => data.auth);

    const navigate= useNavigate();

useEffect(() => {
if (authData.data.token) {
  navigate("/");
}
console.log(authData.data.token);
}, [authData])




  return authData.data?.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
