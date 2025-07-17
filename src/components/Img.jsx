import React from 'react';

function Img({src, height, alt, aClassName=""}) {
    return (
        <img src={src} height={height} alt={alt} className= {aClassName ?? undefined}/>
    );
}

export default Img;