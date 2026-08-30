import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Loader from "./ReusableComponent/Loader";

function Authentication({ children, authentication = true }) {
  const [loader, setLoader] = useState(true);
  const status = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const slug = useParams();

  useEffect(() => {
    if (authentication && authentication !== status) {
      navigate("/login");
    } else if (!authentication && authentication !== status) {
      navigate("/");
    }
    setLoader(false)
  }, [navigate, authentication]);


  return loader? <Loader/>:<div>{children}</div>;
}

export default Authentication;
