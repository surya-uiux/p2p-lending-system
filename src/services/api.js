const BASE_URL = process.env.REACT_APP_API_URL;

// ✅ GET ALL LOANS (FIXED)
export const getLoans = async () => {
  const res = await fetch(`${BASE_URL}/loans/all`);
  if (!res.ok) throw new Error("Failed to fetch loans");
  return res.json();
};

// ✅ CREATE LOAN (STRING BASED)
export const createLoan = async (borrowerId, amount) => {
  const res = await fetch(
    `http://localhost:8080/loans/create?borrowerId=${borrowerId}&amount=${amount}`
  );

  if (!res.ok) throw new Error("Failed to create loan");
};

// ✅ REPAY LOAN
export const repayLoan = async (loanId) => {
  const res = await fetch(
    `http://localhost:8080/loans/repay?loanId=${loanId}`
  );

  if (!res.ok) throw new Error("Failed to repay loan");
};

// ✅ FUND LOAN
export const fundLoan = async (loanId, lenderId) => {
  const res = await fetch(
    `http://localhost:8080/loans/fund?loanId=${loanId}&lenderId=${lenderId}`
  );

  if (!res.ok) throw new Error("Failed to fund loan");
};

