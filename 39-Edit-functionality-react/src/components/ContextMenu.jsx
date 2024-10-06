import React from "react";

export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  expenses,
  setExpenses,
  setExpense,
  rowId,
  setEditingRowId,
}) {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={() => {
          const { title, category, amount } = expenses.find(
            (el) => el.id === rowId
          );
          setExpense({ title, category, amount });
          setEditingRowId(rowId);
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
