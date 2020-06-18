import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {editRepository} from '../../actions/repositories';

class RepositoriesForm extends Component {
    state = this.props.data;

    static propTypes = {
        editRepository: PropTypes.func.isRequired
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        const {
                agreement_id, 
                inventory_number, 
                name, 
                email, 
                volume, 
                os_type, 
                used_programs, 
                system_requirements, 
                program_description, 
                usage_description, 
                date
            } = this.state;
        const request = {
                            agreement_id, 
                            inventory_number, 
                            name, 
                            email, 
                            volume, 
                            os_type, 
                            used_programs, 
                            system_requirements, 
                            program_description, 
                            usage_description, 
                            date
                        };
        this.props.editRepository(this.props.data.id, request);
    };

    render() {
        const {
            agreement_id, 
            inventory_number, 
            name, 
            email, 
            volume, 
            os_type, 
            used_programs, 
            system_requirements, 
            program_description, 
            usage_description, 
            date
        } = this.state;
        return (
            <Fragment>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Редактировать
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="modal-title" id="exampleModalLabel">Редактировать запись</h2>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className='card card-body mt-4 mb-4'>
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="agreement_id">№ договора</label>
                                            <input type="text"
                                                className='form-control'
                                                name='agreement_id'
                                                onChange={this.onChange}
                                                value={agreement_id}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inventory_number">Инвентарный номер ФАП</label>
                                            <input type="text"
                                                className='form-control'
                                                name='inventory_number'
                                                onChange={this.onChange}
                                                value={inventory_number}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Имя создателя</label>
                                            <input type="text"
                                                className='form-control'
                                                name='name'
                                                onChange={this.onChange}
                                                value={name}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email"
                                                className='form-control'
                                                name='email'
                                                onChange={this.onChange}
                                                value={email}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="volume">Объем</label>
                                            <input type="text"
                                                className='form-control'
                                                name='volume'
                                                onChange={this.onChange}
                                                value={volume}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="os_type">Тип системы</label>
                                            <input type="text"
                                                className='form-control'
                                                name='os_type'
                                                onChange={this.onChange}
                                                value={os_type}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="used_programs">Использованные программы</label>
                                            <input type="text"
                                                className='form-control'
                                                name='used_programs'
                                                onChange={this.onChange}
                                                value={used_programs}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="system_requirements">Системные требования</label>
                                            <input type="text"
                                                className='form-control'
                                                name='system_requirements'
                                                onChange={this.onChange}
                                                value={system_requirements}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="program_description">Описание программы</label>
                                            <textarea 
                                                className='form-control'
                                                name='program_description'
                                                onChange={this.onChange}
                                                value={program_description}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="usage_description">Описание использования</label>
                                            <textarea
                                                className='form-control'
                                                name='usage_description'
                                                onChange={this.onChange}
                                                value={usage_description}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="date">Дата</label>
                                            <input type="date"
                                                className='form-control'
                                                name='date'
                                                onChange={this.onChange}
                                                value={date}
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

export default connect(null, {editRepository})(RepositoriesForm);