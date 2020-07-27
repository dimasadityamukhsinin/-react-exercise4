import React from 'react';

import './JobCard.css';

const JobCard = ({dataJob}) => {
    return(
        <div className="container-fluid mb-5 conJobCard">
            <div className="col">
                {dataJob}
            </div>
        </div>
    );
}

export default JobCard;