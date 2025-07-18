import QuickSearch from "../../QuickSearch";
import AdvancedSearchForm from "./AdvancedSearchForm";
import TabButton from "./TabButton";
import TabPane from "./TabPane";

function SearchInput(props) {
  return (
    <div id="search-input-wrap">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <TabButton quick={true} />
        <TabButton quick={false} />
      </ul>
      <div className="tab-content" id="myTabContent">
        <TabPane
          searchComponent={<QuickSearch nameOfClass="mt-4" quick={true} />}
          quick={true}
        />
        <TabPane searchComponent={<AdvancedSearchForm />} quick={false} />
      </div>
    </div>
  );
}

export default SearchInput;
