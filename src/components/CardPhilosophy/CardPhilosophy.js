import React from 'react';

import Button from '../Button/Button';

const CardPhilosophy = ({title, desc, position1, src, redhr, classCard, widthimg, buttonName}) => {
    return(
        <div className={"cardPhilosophy " + classCard}>
                <div className={"col p-5 " + position1} >
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <Button buttonName={buttonName}/>
                </div>
                {redhr}
                    <img src={src} alt="" width={widthimg}/>
        </div>
    );
}

export default CardPhilosophy;