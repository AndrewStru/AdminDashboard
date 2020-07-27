import React from 'react';
import UIkit from 'uikit';

const ConfirmModal = ({modal, target, method}) => {
    return (
        <div id={target} uk-modal={modal.toString()}>
            <div className="uk-modal-dialog uk-modal-body">
                <h5 className="uk-modal-title">Сохранить страницу</h5>
                <p>Вы действитель хотите сохранить страницу</p>
                <p className="uk-text-right">
                    <button className="btn btn-danger uk-modal-close uk-margin-small-right" type="button">Отменить</button>
                    <button className="btn btn-success uk-modal-close" type="button" onClick={() => method(() => {
                            UIkit.notification({message: 'Успешно сохранено', status: 'success'})
                        },
                        () => {
                            UIkit.notification({message: 'Ошибка сохранения', status: 'danger'})
                        })}>Сохранить</button>
                </p>
            </div>
        </div>
    )
};

export default ConfirmModal;