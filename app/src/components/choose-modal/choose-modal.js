import React from 'react';
import UIkit from "uikit";

const ChooseModal = ({modal, target, data, redirect}) => {

    const List = data.map(item => {
		if (item.time) {
			return (
            <li key={item.file}>
                <a
                    className="uk-link-muted uk-modal-close"
                    href="#"
                    onClick={(e) => redirect(e, item.file)}>Резервная копия от {item.time}</a>
            </li>
        )
		} else {
			return (
            <li key={item}>
                <a
                    className="uk-link-muted uk-modal-close"
                    href="#"
                    onClick={(e) => redirect(e, item)}>{item}</a>
            </li>
        )
		}
        
    });

    let msg;
    if (data.length < 1) {
        msg = <div>Резервные копии не найдены!</div>
    }

    return (
        <div id={target} uk-modal={modal.toString()}>
            <div className="uk-modal-dialog uk-modal-body">
                <h5 className="uk-modal-title">Открыть страницу</h5>
                {msg}
                <ul className="uk-list uk-list-divider">
                    {List}
                </ul>
                <p className="uk-text-right">
                    <button className="uk-button uk-button-default uk-modal-close" type="button">Отменить</button>
                </p>
            </div>
        </div>
    )
};

export default ChooseModal;