import React from 'react';

function Search() {
    return (
    <div id="search-wrap">
      <form id="quick-search" method="post">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Кого ищем?"
            aria-describedby="button-addon2"
            required=""
          />
          <button
            className="btn btn-outline-primary"
            type="submit"
            id="quick-search-button"
          >
            Поиск
          </button>
        </div>
      </form>
    </div>
    );
}

export default Search;