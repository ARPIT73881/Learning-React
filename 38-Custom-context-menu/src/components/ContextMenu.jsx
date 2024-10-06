import React from "react";

export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpenses,
  rowId,
}) {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          console.log("editing");
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          console.log("deleting");
          setExpenses((prevState) => prevState.filter((el) => el.id !== rowId));
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
