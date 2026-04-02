import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import "./styles.css";

function App() {
  const [user, setUser] = useState({
    name: "Alice",
    role: "BORROWER"
  });

  if (!user) return <h2>Select a user</h2>;

  return <Dashboard user={user} setUser={setUser} />;
}

export default App;


























