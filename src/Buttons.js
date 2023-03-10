import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { page, nbPages, handlePage, isLoading } = useGlobalContext();
  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handlePage("dec")}>
        {" "}
        prev{" "}
      </button>
      {page + 1} of {nbPages}
      <button disabled={isLoading} onClick={() => handlePage("inc")}>
        {" "}
        next{" "}
      </button>
    </div>
  );
};

export default Buttons;
