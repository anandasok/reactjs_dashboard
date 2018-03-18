import React, {Component} from 'react';

import '../css/SideNavbar.css';

class SideMenu extends Component {

    handleMenuClick = (event) => {

        event.preventDefault();

        let ul = document.getElementById("menu-list");
        let items = ul.getElementsByTagName("li");
        let element;
        for (let i = 0; i < items.length; ++i) {
            element = items[i];
            // element.classList.remove("active");
            element.removeAttribute("class");
        }

        let currentElement = event.currentTarget;
        currentElement.className = currentElement.className + " active";

    };

    render() {
        return(
            <div id="side-menu">
                <nav className="navbar navbar-default side-navbar">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#side-navbar-menu">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div id="side-navbar-menu" className="navbar-collapse collapse">
                        <ul id="menu-list" className="nav navbar-nav">
                            <li onClick={this.handleMenuClick} className="active">
                                <a><span className="glyphicon glyphicon-dashboard"></span> Dashboard</a>
                            </li>
                            <li onClick={this.handleMenuClick}>
                                <a><span className="glyphicon glyphicon-stats"></span> Reports</a>
                            </li>
                            <li onClick={this.handleMenuClick}>
                                <a><span className="glyphicon glyphicon-eye-open"></span> Archive</a>
                            </li>
                            <li onClick={this.handleMenuClick}>
                                <a><span className="glyphicon glyphicon-tint"></span> Social</a>
                            </li>
                            <li onClick={this.handleMenuClick}>
                                <a><span className="glyphicon glyphicon-user"></span> Users</a>
                            </li>
                            <li onClick={this.handleMenuClick}>
                                <a><span className="glyphicon glyphicon-duplicate"></span> Documents</a>
                            </li>
                            <li onClick={this.handleMenuClick}>
                                <a><span className="glyphicon glyphicon-star"></span> Favorites</a>
                            </li>
                            <li onClick={this.handleMenuClick}>
                                <a><span className="glyphicon glyphicon-wrench"></span> Tools</a>
                            </li>
                            <li onClick={this.handleMenuClick}>
                                <a><span className="glyphicon glyphicon-cog"></span> Settings</a>
                            </li>
                        </ul>

                        <form className="navbar-form" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control" />
                            </div>
                        </form>

                    </div>
                </nav>
            </div>
        )
    }
}

export default SideMenu;