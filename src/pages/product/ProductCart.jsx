import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";

const ProductCart = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      Welcome To Shoppingmall{" "}
      <span className="text-xl text-blue-600">{user.name}</span>{" "}
    </div>
  );
};

export default ProductCart;
