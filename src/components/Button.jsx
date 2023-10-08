import React from "react";
import { useGlobleContext } from "../context/useContext";
import loader from '../assets/loader.svg'


const Button = () => {
  const { getJoke, loading } = useGlobleContext();

  return (
    <div>
      <button className="btn" onClick={getJoke}>
        {loading ? <img src={loader} alt="" />: "Tell me joke"}
      </button>
    </div>
  );
};

export default Button;
