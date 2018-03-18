import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './Dashboard';
import Reports from './Reports';
import Archive from './Archive';
import Social from './Social';
import Users from './Users';
import Documents from './Documents';
import Favorites from './Favorites';
import Tools from './Tools';
import Settings from './Settings';
import '../css/SideNavbar.css';

class SideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuItems: [
                {name: 'Dashboard', icon: 'dashboard'},
                {name: 'Reports', icon: 'stats'},
                {name: 'Archive', icon: 'eye-open'},
                {name: 'Social', icon: 'tint'},
                {name: 'Users', icon: 'user'},
                {name: 'Documents', icon: 'duplicate'},
                {name: 'Favorites', icon: 'star'},
                {name: 'Tools', icon: 'wrench'},
                {name: 'Settings', icon: 'cog'}
            ]
        }
    }

    listItem = (item, index) => {
        let name = item.name;
        let cls = name.toLowerCase() === 'dashboard' ? ' active' : '';
        let liElement = <li key={index} onClick={this.handleMenuClick} className={cls} data-id={item.name}>
            <a><span className={`glyphicon glyphicon-${item.icon}`}> </span>{item.name}</a>
        </li>;

        return liElement;
    };

    handleMenuClick = (event) => {

        event.preventDefault();

        let ul = document.getElementById('menu-list');
        let items = ul.getElementsByTagName('li');
        let element;
        for (let i = 0; i < items.length; ++i) {
            element = items[i];
            // element.classList.remove('active');
            element.removeAttribute('class');
        }

        let currentElement = event.currentTarget;
        currentElement.className = currentElement.className + ' active';

        let currentComponentId = currentElement.dataset.id.toLowerCase();
        let currentComponent = null;
        switch (currentComponentId) {
            case 'dashboard':
                currentComponent = <Dashboard/>;
                break;
            case 'reports':
                currentComponent = <Reports/>;
                break;
            case 'archive':
                currentComponent = <Archive/>;
                break;
            case 'social':
                currentComponent = <Social/>;
                break;
            case 'users':
                currentComponent = <Users/>;
                break;
            case 'documents':
                currentComponent = <Documents/>;
                break;
            case 'favorites':
                currentComponent = <Favorites/>;
                break;
            case 'tools':
                currentComponent = <Tools/>;
                break;
            case 'settings':
                currentComponent = <Settings/>;
                break;
            default:
                break;

        }

        ReactDOM.render(currentComponent, document.getElementById('content-area'));

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
                            {
                                this.state.menuItems.map(this.listItem)
                            }
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