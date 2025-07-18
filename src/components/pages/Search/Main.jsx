import React from 'react';

import QuickSearch from '../../QuickSearch';
import TabButton from './TabButton';
import AdvancedSearchForm from './AdvancedSearchForm';
import TabPane from './TabPane';
import SearchResult from './SearchResult';
import SearchInput from './SearchInput';

function Main() {
    return (        
        <>
            <SearchInput />
            
            <SearchResult />
        </>
    );
}

export default Main;