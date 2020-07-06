import React from 'react';

const Spiner = ({active}) => {
    return (
        <div className={active ? 'spiner active' : 'spiner'}>
            <div uk-spinner="ratio: 3"></div>
        </div>
    )
};

export default Spiner;