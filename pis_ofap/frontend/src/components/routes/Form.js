import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {addRequest} from '../../actions/requests'

class Form extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    };

    static propTypes = {
        addRequest: PropTypes.func.isRequired
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        const {name, email, message} = this.state;
        const request = {name, email, message};
        this.props.addRequest(request);
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    };

    render() {
        const {name, email, message} = this.state;
        return (
            <div className='card card-body mt-4 mb-4'>
                <h2>Add Request</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
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
                        <label htmlFor="message">Message</label>
                        <textarea
                            className='form-control'
                            name='message'
                            onChange={this.onChange}
                            value={message}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, {addRequest})(Form);