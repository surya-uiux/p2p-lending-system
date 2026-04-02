import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import LoanTable from "../components/LoanTable";
import AlertBox from "../components/AlertBox";
import {
  getLoans,
  createLoan,
  repayLoan,
  fundLoan
} from "../services/api";

const Dashboard = ({ user, setUser }) => {
  const [loans, setLoans] = useState([]);
  const [amount, setAmount] = useState("");
  const [loanId, setLoanId] = useState("");
  const [message, setMessage] = useState("");
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    fetchLoans();
  }, []);

  const fetchLoans = async () => {
    try {
      const data = await getLoans();
      setLoans(data);
    } catch {
      setMessage("Error fetching loans");
    }
  };

  const handleCreate = async () => {
    try {
      await createLoan(user.id, amount);
      setMessage("Loan Requested");
      fetchLoans();
    } catch {
      setMessage("Failed to create loan");
    }
    if (!amount) {
  setMessage("Enter amount");
  return;
}
  };

  const handleRepay = async () => {
    try {
      await repayLoan(loanId);
      setMessage("Repaid");
      fetchLoans();
    } catch {
      setMessage("Failed to repay loan");
    }
    if (!loanId) {
  setMessage("Enter Loan ID");
  return;
}
  };

  const handleFund = async () => {
    try {
      await fundLoan(loanId, user.id);
      setMessage("Funded");
      fetchLoans();
    } catch {
      setMessage("Failed to fund loan");
    }
    if (!loanId) {
  setMessage("Enter Loan ID");
  return;
}
  };

  const filteredLoans =
    filter === "ALL"
      ? loans
      : loans.filter((l) => l.status === filter);

  return (
    <div className="container">
      <Sidebar user={user} setUser={setUser} />

      <div className="main">
        <h1>Dashboard</h1>

        <AlertBox message={message} />

        <div className="card">
          <div className="actions">
            {user.role === "BORROWER" && (
              <>
                <input
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <button onClick={handleCreate}>Create</button>

                <input
                  placeholder="Loan ID"
                  value={loanId}
                  onChange={(e) => setLoanId(e.target.value)}
                />
                <button onClick={handleRepay}>Repay</button>
              </>
            )}

            {user.role === "LENDER" && (
              <>
                <input
                  placeholder="Loan ID"
                  value={loanId}
                  onChange={(e) => setLoanId(e.target.value)}
                />
                <button onClick={handleFund}>Fund</button>
              </>
            )}
          </div>
        </div>

        <div className="filters">
          {["ALL", "REQUESTED", "FUNDED", "REPAID"].map((f) => (
            <button key={f} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>

        <div className="card">
          <LoanTable loans={filteredLoans} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;








