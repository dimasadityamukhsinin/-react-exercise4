import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Header = ({home ,search, detailBlog}) => {
    return(
        <Router>
            <nav className="navbar navbar-expand-lg d-flex justify-content-between shadow-sm mb-5 bg-white fixed-top">
                <Link to={'/'}><img src="https://impactbyte.com/static/brand/impactbyte_horizontal_color-trans.svg" className="navbar-brand" style={{height: "3.5rem"}} alt="Impact Byte"/></Link>
                <Link to={'/search-jobs'} className="font-weight-bold text-dark text-decoration-none h6"><i className="fas fa-search mr-2"></i>Search Jobs</Link>
            </nav>
            <Switch>
                <Route exact path='/' component={home} />
                <Route path='/search-jobs' component={search} />
                <Route path='/blog/:titleBlog' component={detailBlog} />
            </Switch>
        </Router>
    );
}

export default Header;