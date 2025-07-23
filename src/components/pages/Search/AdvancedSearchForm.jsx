import Button from "../../Button";
import DistrictInput from "../../DistrictInput";
import KindInput from "../../KindInput";

function AdvancedSearchForm() {
  return (
    <form id="advanced-search" className="mt-4 col-md-6 mx-auto" method="post">
      <div className="error text-danger d-none">
        Выберите район, вид или и то, и другое.
      </div>

      <DistrictInput required={false} selectClassName="form-select mb-2"/>

      <KindInput aClassName="mt-3" />

      <Button aClassName="mt-3" btnText="Поиск" />
    </form>
  );
}

export default AdvancedSearchForm;
