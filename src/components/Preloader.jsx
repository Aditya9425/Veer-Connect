import { useEffect, useState } from 'react';

function Preloader() {
    return (
        <div className="preloader">
            <div className="preloader-emblem">
                <div className="emblem-ring"></div>
                <div className="emblem-star">★</div>
            </div>
            <div className="preloader-text">Initializing Veer Connect...</div>
        </div>
    );
}

export default Preloader;
