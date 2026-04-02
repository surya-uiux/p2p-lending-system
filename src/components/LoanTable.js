import React from "react";

const LoanTable = ({ loans }) => {
  return (
    <table className="loan-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Borrower</th>
          <th>Lender</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {loans.map((loan) => (
          <tr key={loan.id}>
            <td>{loan.id}</td>
            <td>{loan.borrower?.name || "-"}</td>
            <td>{loan.lender?.name || "-"}</td>
            <td>{loan.amount}</td>
            <td>
              <span className={`status ${loan.status}`}>
                {loan.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LoanTable;


