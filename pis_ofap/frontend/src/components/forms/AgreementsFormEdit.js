import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {editAgreement} from '../../actions/agreements'

class Form extends Component {
    state = this.props.data;

    static propTypes = {
        editAgreement: PropTypes.func.isRequired
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        const {manager_id, lawyer_id, request_id, status} = this.state;
        const request = {manager_id, lawyer_id, request_id, status};
        this.props.editAgreement(this.props.data.id, request);
    };

    render() {
        const {manager_id, lawyer_id, request_id, status} = this.state;
        return (
            <Fragment>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Редактировать
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="modal-title" id="exampleModalLabel">Редактировать договор</h2>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className='card card-body mt-4 mb-4'>
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="manager_id">№ Менеджера</label>
                                            <input type="text"
                                                className='form-control'
                                                name='manager_id'
                                                onChange={this.onChange}
                                                value={manager_id}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lawyer_id">№ Юриста</label>
                                            <input type="text"
                                                className='form-control'
                                                name='lawyer_id'
                                                onChange={this.onChange}
                                                value={lawyer_id}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="request_id">№ Обращения</label>
                                            <input type="text"
                                                className='form-control'
                                                name='request_id'
                                                onChange={this.onChange}
                                                value={request_id}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="status">Статус</label>
                                            <input type="text"
                                                className='form-control'
                                                name='status'
                                                onChange={this.onChange}
                                                value={status}
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

export default connect(null, {editAgreement})(Form);