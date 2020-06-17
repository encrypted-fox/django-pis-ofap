import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getRequests, deleteRequest} from "../../actions/requests";

class Requests extends Component {
    static propTypes = {
        requests: PropTypes.array.isRequired,
        getRequests: PropTypes.func.isRequired,
        deleteRequest: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getRequests();
    }

    render() {
        return (
            <Fragment>
                <h2>Requests</h2>
                <table className="table table-stripped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.requests.map(request => (
                        <tr key={request.id}>
                            <td>{request.id}</td>
                            <td>{request.name}</td>
                            <td>{request.email}</td>
                            <td>{request.message}</td>
                            <td><button onClick={this.props.deleteRequest.bind(this, request.id)} className="btn btn-danger btn-sm"> {" "} Delete</button></td>
                        </tr>))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    requests: state.requests.requests
});

export default connect(mapStateToProps, {getRequests, deleteRequest})(Requests);