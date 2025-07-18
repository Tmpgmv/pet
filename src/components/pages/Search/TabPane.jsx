import React from "react";

function TabPane({ searchComponent, quick }) {
  return (
    <div
      className={quick ? "tab-pane fade show active" : "tab-pane fade show"}
      id={quick ? "quick-tab-pane" : "advanced-tab-pane"}
      role="tabpanel"
      aria-labelledby={quick ? "quick-tab" : "advanced-tab"}
      tabIndex={quick ? undefined : -1}
    >
      {searchComponent}
    </div>
  );
}

export default TabPane;
