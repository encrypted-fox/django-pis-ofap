import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getAgreements, deleteAgreement} from "../../actions/agreements";

class Agreements extends Component {
    static propTypes = {
        agreements: PropTypes.array.isRequired,
        getAgreements: PropTypes.func.isRequired,
        deleteAgreement: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getAgreements();
    }

    render() {
        return (
            <Fragment>
                <h2>Agreements</h2>
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
                    {this.props.agreements.map(agreement => (
                        <tr key={agreement.id}>
                            <td>{agreement.id}</td>
                            <td>{agreement.name}</td>
                            <td>{agreement.email}</td>
                            <td>{agreement.message}</td>
                            <td><button onClick={this.props.deleteAgreement.bind(this, agreement.id)} className="btn btn-danger btn-sm"> {" "} Delete</button></td>
                        </tr>))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    agreements: state.agreements.agreements
});

export default connect(mapStateToProps, {getAgreements, deleteAgreement})(Agreements);