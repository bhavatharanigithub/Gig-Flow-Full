import React, { useEffect } from "react";
import socket from "../socket";
import toast from "react-hot-toast";

const FreelancerDashboard = ({ userId }) => {
  useEffect(() => {
    if (!userId) return;

    socket.emit("joinRoom", userId);

    socket.on("hired", (data) => {
        toast.success(data.message);
    });

    return () => {
      socket.off("hired");
    };
  }, [userId]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Freelancer Dashboard</h1>
      <p>Welcome! You will be notified when a client hires you.</p>
    </div>
  );
};

export default FreelancerDashboard;
