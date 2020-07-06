import React from 'react';
import UIkit from "uikit";

const ChooseModal = ({modal, target, data, redirect}) => {

    const pageList = data.map(item => {
        return (
            <li key={item}>
                <a
                    className="uk-link-muted uk-modal-close"
                    href="#"
                    onClick={(e) => redirect(e, item)}>{item}</a>
            </li>
        )
    })

    return (
        <div id={target} uk-modal={modal.toString()}>
            <div className="uk-modal-dialog uk-modal-body">
                <h5 className="uk-modal-title">Открыть страницу</h5>
                <ul className="uk-list uk-list-divider">
                    {pageList}
                </ul>
                <p className="uk-text-right">
                    <button className="uk-button uk-button-default uk-modal-close" type="button">Отменить</button>
                </p>
            </div>
        </div>
    )
};

export default ChooseModal;