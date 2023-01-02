import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { selectUser } from "../../redux/userSlice";
import ProductCart from "../product/ProductCart";
import LoginPage from "./LoginPage";

const Protected = () => {
  const user = useSelector(selectUser);

  return (
    <div className=" flex  justify-center p-40">
      {user &&
      user.name == "Md Razu Ahammed Molla" &&
      user.password == "123" ? (
        <ProductCart />
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default Protected;
