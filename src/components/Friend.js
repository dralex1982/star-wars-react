import React from 'react';


const Friend = ({img, pos}) => {
    let style = "col-4 p-1";
    if (pos == 7)
        style += ' left';
    else if (pos == 9)
        style += ' right';
    return <img className="col-4 p-1" src={img} alt="friend"/>;
};

export default Friend;