import React from 'react';
import QuickSearch from '../../QuickSearch';
import TabButton from './TabButton';
import AdvancedSearchForm from './AdvancedSearchForm';

function Main(props) {
    return (
        <div id="search-input-wrap">
            <ul className="nav nav-tabs" id="myTab" role="tablist">                
                    <TabButton />                    
                    <TabButton quick="false"/>                
            </ul>
            <div className="tab-content" id="myTabContent">
                <div
                    className="tab-pane fade show active"
                    id="quick-tab-pane"
                    role="tabpanel"
                    aria-labelledby="quick-tab"
                    tabIndex={0}
                    >
                
                    <QuickSearch nameOfClass="mt-4" />

                </div>
                <div
                    className="tab-pane fade"
                    id="advanced-tab-pane"
                    role="tabpanel"
                    aria-labelledby="advanced-tab"
                    tabIndex={0}
                    >
                    <AdvancedSearchForm />
                    </div>
                </div>
        </div>
    );
}

export default Main;