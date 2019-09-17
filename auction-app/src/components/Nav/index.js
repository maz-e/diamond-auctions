import React from 'react'
import Menu from '../Menu'
import Login from '../Login'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-regular-svg-icons'
import './index.sass'
import logic from '../../logic'

function Nav({onLogin, onLogout, isLogged, user}) {
    return <>
        <div className="uk-width-1-1@m uk-margin">
            <nav className="uk-navbar uk-visible@s" data-uk-navbar>
                <Link to="/" className="uk-navbar-item uk-logo nav__logo">D <FontAwesomeIcon icon={faGem} className="footer__icon"/>A</Link>
                {!logic.isUserLoggedIn && <Login onLogin={onLogin}/>}
                {logic.isUserLoggedIn && user && <Menu user={user} onLogout={onLogout}/>}
            </nav>
            <nav className="uk-navbar uk-hidden@s" data-uk-navbar>
                <Link to="/" className="uk-navbar-item uk-logo nav__logo" >D <FontAwesomeIcon icon={faGem} className="footer__icon"/>A</Link>
                <div className="uk-navbar-right">
                    <button className="uk-navbar-toggle" data-uk-navbar-toggle-icon data-uk-toggle="target: #offcanvas-nav"></button>
                    <div id="offcanvas-nav" data-uk-offcanvas="overlay: true; mode: reveal">
                        <div className="uk-offcanvas-bar">
                            <button className="uk-offcanvas-close" type="button" data-uk-close></button>
                            {!logic.isUserLoggedIn && <Login onLogin={onLogin}/>}
                            {logic.isUserLoggedIn && user && <Menu user={user} onLogout={onLogout}/>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </>
}

export default withRouter(Nav)