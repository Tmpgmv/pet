function TabButton({ quick }) {
  return (
    <li className="nav-item" role="presentation">
      <button
        className={quick ? "nav-link active" : "nav-link"}
        id={quick ? "quick-tab" : "advanced-tab"}
        data-bs-toggle="tab"
        data-bs-target={quick ? "#quick-tab-pane" : "#advanced-tab-pane"}
        type="button"
        role="tab"
        aria-controls={quick ? "quick-tab-pane" : "advanced-tab-pane"}
        aria-selected={quick ? "true" : "false"}
        tabIndex={quick ? undefined : -1}
      >
        {quick ? "Быстрый поиск" : "Расширенный поиск"}
      </button>
    </li>
  );
}

export default TabButton;
