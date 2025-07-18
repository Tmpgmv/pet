import React from 'react';
import QuickSearch from '../../QuickSearch';
import TabButton from './TabButton';
import AdvancedSearchForm from './AdvancedSearchForm';
import TabPane from './TabPane';

function SearchInput(props) {
    return (
            <div id="search-input-wrap">
                <ul className="nav nav-tabs" id="myTab" role="tablist">                
                    <TabButton quick={true} />
                    <TabButton quick={false} />
                </ul>
                <div className="tab-content" id="myTabContent">
                    <TabPane searchComponent={<QuickSearch nameOfClass="mt-4" quick={true} />} quick={true} />
                    <TabPane searchComponent={<AdvancedSearchForm />} quick={false} />
                </div>
            </div>
    );
}

export default SearchInput;