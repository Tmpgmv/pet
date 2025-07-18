import Button from "./Button";

function QuickSearch({ nameOfClass = null }) {
  return (
    <div id="search-wrap">
      <form
        id="quick-search"
        className={nameOfClass ?? undefined}
        method="post"
      >
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Кого ищем?"
            aria-describedby="button-addon2"
            required=""
          />

          <Button btnText="Поиск" />
        </div>
      </form>
    </div>
  );
}

export default QuickSearch;
