import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Warmup = () => {
  const [status, setStatus] = useState("Waking up backend...");
  const navigate = useNavigate();

  useEffect(() => {
    const backendUrl = "https://revai-backend-1.onrender.com";

    const wakeBackend = async () => {
      try {
        const res = await fetch(`${backendUrl}/test`);
        if (res.ok) {
          setStatus("Backend is awake! Redirecting...");
          setTimeout(() => {
            navigate("/");
          }, 1500);
        } else {
          setStatus("Backend error. Please refresh.");
        }
      } catch (err) {
        setStatus("Still waking up... please wait a few seconds.");
        setTimeout(wakeBackend, 3000);
      }
    };

    wakeBackend();
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-bold">{status}</h1>
      <p className="text-gray-600 mt-2">This may take up to 30 seconds on Render free tier.</p>
    </div>
  );
};

export default Warmup;
