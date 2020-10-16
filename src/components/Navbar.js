import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="space-between">
      <Link to="/">Home</Link>
      <Link to="/task-list">All Tasks</Link>
    </div>
  );
}
