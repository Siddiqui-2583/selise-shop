import React from 'react';

const productImageSection = ({url}) => {
    return (
        <div className="m-16">
            <img src={url} alt="" />
        </div>
    );
};

export default productImageSection;