import React from 'react';

function TabPane({searchComponent, quick}) {
    return (
        <div
            className={quick==="true" ? "tab-pane fade show active" : "tab-pane fade show"}
            id={quick==="true" ? "quick-tab-pane" : "advanced-tab-pane"}
            role="tabpanel"
            aria-labelledby={quick==="true" ? "quick-tab" : "advanced-tab"}
            tabIndex={quick==="true" ?  undefined : -1}
            >
        
            {searchComponent}

        </div>
    );
}

export default TabPane;