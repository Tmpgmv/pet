import React from 'react';


function TabButton({quick}) {
    debugger;    
    return (
        <li className="nav-item" role="presentation">
            <button
                className={quick==="true" ? "nav-link active" : "nav-link"}
                id={quick==="true" ? "quick-tab" : "advanced-tab"}
                data-bs-toggle="tab"
                data-bs-target={ quick==="true" ? "#quick-tab-pane" : "#advanced-tab-pane"}
                type="button"
                role="tab"
                aria-controls={quick==="true" ? "quick-tab-pane" : "advanced-tab-pane"}
                aria-selected={quick==="true" ? "true" : "false"}
                tabIndex={quick==="true" ? undefined : -1}
            >
                {quick==="true" ? "Быстрый поиск" : "Расширенный поиск"}
            </button>
        </li>        
    );
}

export default TabButton;