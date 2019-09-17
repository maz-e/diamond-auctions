import React, {useState, useEffect} from 'react'
import { Link, withRouter } from 'react-router-dom'
import Logout from '../Logout'
import './index.sass'

function Menu({user, onLogout, history}) {
    const [active, setActive] = useState('Home')

    useEffect(() => {
        switch (history.location.pathname) {
            case '/':
                setActive('Home')
                break;
            case '/user':
                setActive('Profile')
                break;
            case '/user/mybids':
                setActive('My Bids')
                break;
            default:
                setActive(null)
                break;
        }
    }, [history.location.pathname]);

    return <>
    <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
            <li className="uk-navbar-item uk-hidden@s"><Logout onLogout={onLogout}/></li> 
            <li className={active === 'Home' ? 'uk-active' : ''}><Link to="/">Home</Link></li>
            <li className={active === 'My Bids' ? "uk-active" : ''}><Link to="/user/mybids">My Bids</Link></li>
            <li className={active === 'Profile' ? "uk-active" : ''}><Link to="/user">Profile</Link></li>
            <li className="uk-navbar-item avatar">
                <img className="avatar__img" src={user.avatar} alt="User avatar"/>
                <div className="uk-navbar-dropdown avatar__menu uk-visible@s">
                    <ul className="uk-nav uk-dropdown-nav uk-align-center">
                        <p className="uk-text-center">Hello {user.name}!</p>
                        <li><Logout onLogout={onLogout}/></li>
                    </ul>
                </div>
            </li>     
        </ul>
    </div>
    </>
}

export default withRouter(Menu)