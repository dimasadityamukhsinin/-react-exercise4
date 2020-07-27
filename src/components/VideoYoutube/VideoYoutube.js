import React from 'react';

const VideoYoutube = ({video}) => {
    return(
        <div className="container mt-5 mb-5 pr-3 pl-3 pb-1">
            <h3 className="text-center">Latest From Netflix</h3>
            <div className="row mt-3 d-flex justify-content-center">
                {video}
            </div>
        </div>
    );
}

export default VideoYoutube;