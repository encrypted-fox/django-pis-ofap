import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {addEmployee} from '../../actions/employees'

class Form extends Component {
    state = {
        name: '',
        login: '',
        password: '',
        access_level: ''
    };

    static propTypes = {
        addEmployee: PropTypes.func.isRequired
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        const {name, login, password, access_level} = this.state;
        const request = {name, login, password, access_level};
        this.props.addEmployee(request);
        this.setState({
            manager_id: '',
            lawyer_id: '',
            request_id: '',
            status: ''
        })
    };

    render() {
        const {name, login, password, access_level} = this.state;
        return (
            <Fragment>
                <button type="button" className="btn btn-primary mt-3" data-toggle="modal" data-target="#exampleModal">
                Добавить
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="modal-title" id="exampleModalLabel">Добавить работника</h2>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className='card card-body mt-4 mb-4'>
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name">Имя</label>
                                            <input type="text"
                                                className='form-control'
                                                name='name'
                                                onChange={this.onChange}
                                                value={name}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="login">Логин</label>
                                            <input type="text"
                                                className='form-control'
                                                name='login'
                                                onChange={this.onChange}
                                                value={login}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Пароль</label>
                                            <input type="password"
                                                className='form-control'
                                                name='password'
                                                onChange={this.onChange}
                                                value={password}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="access_level">Уровень доступа</label>
                                            <input type="text"
                                                className='form-control'
                                                name='access_level'
                                                onChange={this.onChange}
                                                value={access_level}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary">Отправить</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>               
            </Fragment>
        );
    }
}

export default connect(null, {addEmployee})(Form);