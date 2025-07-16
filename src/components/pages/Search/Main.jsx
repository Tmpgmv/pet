import React from 'react';
import QuickSearch from '../../QuickSearch';

function Main(props) {
    return (
        <div id="search-input-wrap">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                <button
                    className="nav-link active"
                    id="simple-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#simple-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="simple-tab-pane"
                    aria-selected="true"
                >
                    Быстрый поиск
                </button>
                </li>
                <li className="nav-item" role="presentation">
                <button
                    className="nav-link"
                    id="advanced-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#advanced-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="advanced-tab-pane"
                    aria-selected="false"
                    tabIndex={-1}
                >
                    Расширенный поиск
                </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div
                className="tab-pane fade show active"
                id="simple-tab-pane"
                role="tabpanel"
                aria-labelledby="simple-tab"
                tabIndex={0}
                >
               
                <QuickSearch />

                </div>
                <div
                className="tab-pane fade"
                id="advanced-tab-pane"
                role="tabpanel"
                aria-labelledby="advanced-tab"
                tabIndex={0}
                >
                <form
                    id="advanced-search"
                    className="mt-4 col-md-6 mx-auto"
                    method="post"
                >
                    <div className="error text-danger">
                    Выберите район, вид или и то, и другое.
                    </div>
                    <label htmlFor="district">Район:</label>
                    <select className="form-select mb-2" id="district">
                    <option selected="" value="">
                        ---
                    </option>
                    <option>Адмиралтейский</option>
                    <option>Василеостровский</option>
                    <option>Выборгский</option>
                    <option>Калининский</option>
                    <option>Кировский</option>
                    <option>Колпинский</option>
                    <option>Красногвардейский</option>
                    <option>Красносельский</option>
                    <option>Кронштадтский</option>
                    <option>Курортный</option>
                    <option>Московский</option>
                    <option>Невский</option>
                    <option>Петроградский</option>
                    <option>Петродворцовый</option>
                    <option>Приморский</option>
                    <option>Пушкинский</option>
                    <option>Фрунзенский</option>
                    <option>Центральный</option>
                    </select>
                    <div className="mt-3">
                    <label htmlFor="kind" className="form-label">
                        Вид животного (кошка, собака и т.п.)
                    </label>
                    <input type="text" className="form-control" id="kind" />
                    </div>
                    <button className="btn btn-primary mt-3" type="submit">
                    Поиск
                    </button>
                </form>
                </div>
            </div>
        </div>
    );
}

export default Main;