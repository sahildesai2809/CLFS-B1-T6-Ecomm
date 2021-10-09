import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="w-100 text-center mt-2">
      Go to <Link to="/signup">Sign up</Link>
    </div>
  );
}

export default Dashboard;
