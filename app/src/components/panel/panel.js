import React from 'react';

const Panel = () => {
    return (
        <div className="panel">
            <button className="btn btn-warning mr-3" uk-toggle="target: #modal-open">Открыть другую страницу</button>
            <button className="btn btn-primary mr-3" uk-toggle="target: #modal-save">Опубликовать</button>
            <button className="btn btn-info mr-3" uk-toggle="target: #modal-meta">Редактировать META</button>
            <button className="btn btn-danger" uk-toggle="target: #modal-backup">Востановить</button>
        </div>
    )
};

export default Panel;