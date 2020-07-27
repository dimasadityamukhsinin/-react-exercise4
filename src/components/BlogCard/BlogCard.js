import React from 'react';

import './BlogCard.css';

const BlogCard = ({isiCard}) => {
    return (
        <div className="container mb-5 pr-3 pl-3">
            <div className="row-md-2 d-flex justify-content-center">
                {isiCard}
            </div>
        </div>
    );
}

export default BlogCard;