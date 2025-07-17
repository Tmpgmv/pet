import React from 'react';

function AdvancedSearchForm(props) {
    return (
            <form
                id="advanced-search"
                className="mt-4 col-md-6 mx-auto"
                method="post"
            >
                <div className="error text-danger">
                Выберите район, вид или и то, и другое.
                </div>
                <label htmlFor="district">Район:</label>
                <select className="form-select mb-2" id="district" defaultValue="">
                <option value="">---</option>
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
    );
}

export default AdvancedSearchForm;