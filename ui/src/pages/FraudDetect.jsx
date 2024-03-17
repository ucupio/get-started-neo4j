import { useEffect, useState } from "react";
import axios from "axios";

const FraudDetectionComponent = () => {
  const [fraudData, setFraudData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/fraud");
        console.log(response);
        setFraudData(response.data);
      } catch (error) {
        console.error("Error fetching fraud data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fraud Detection</h1>
      <p>{fraudData}</p>
    </div>
  );
};

export default FraudDetectionComponent;
