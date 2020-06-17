import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getRepositories, deleteReposirory} from "../../actions/repositories";

class Repositories extends Component {
    static propTypes = {
        repositories: PropTypes.array.isRequired,
        getRepositories: PropTypes.func.isRequired,
        deleteReposirory: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getRepositories();
    }

    render() {
        return (
            <Fragment>
                <h2>Repositories</h2>
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
                    {this.props.repositories.map(repository => (
                        <tr key={repository.id}>
                            <td>{repository.id}</td>
                            <td>{repository.name}</td>
                            <td>{repository.email}</td>
                            <td>{repository.message}</td>
                            <td><button onClick={this.props.deleteReposirory.bind(this, repository.id)} className="btn btn-danger btn-sm"> {" "} Delete</button></td>
                        </tr>))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    repositories: state.repositories.repositories
});

export default connect(mapStateToProps, {getRepositories, deleteReposirory})(Repositories);