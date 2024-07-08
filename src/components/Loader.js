import React, { useEffect, useState } from "react";
import "./Loader.css";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Ajusta el tiempo de carga según sea necesario

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
