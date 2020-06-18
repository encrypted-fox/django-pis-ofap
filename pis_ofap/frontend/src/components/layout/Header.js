import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from "../../actions/auth";

class Header extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };

    render() {
        const {isAuthenticated, user} = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <span className="navbar-text mr-3">
                    <strong>
                        {user ? `Добро пожалловать, ${user}`: ''}
                    </strong>
                </span>
                
                <li className="nav-item">
                    <Link to="/requests" className="nav-link">Запросы</Link>
                </li>
                <li className="nav-item">
                    <Link to="/agreements" className="nav-link">Договоры</Link>
                </li>
                <li className="nav-item">
                    <Link to="/employees" className="nav-link">Работники</Link>
                </li>
                <li className="nav-item">
                    <Link to="/repositories" className="nav-link">Реестр</Link>
                </li>

                    <button
                        onClick={this.props.logout}
                        className="nav-link btn btn-info btn-sm text-light">
                        Выход
                    </button>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Регистрация</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Вход</Link>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                <div className="container">
                    <a className="navbar-brand" href="/">На главную</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout})(Header);