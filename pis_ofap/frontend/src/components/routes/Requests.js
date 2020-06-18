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
                <h2>Запросы</h2>
                <table className="table table-striped table-borderless table-responsive">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Инвентарный номер ФАП</th>
                        <th scope="col">№ менеджера</th>
                        <th scope="col">Имя создателя</th>
                        <th scope="col">Email создателя</th>
                        <th scope="col">Объем программы</th>
                        <th scope="col">Тип системы</th>
                        <th scope="col">Использовано</th>
                        <th scope="col">Требования</th>
                        <th scope="col">Описание</th>
                        <th scope="col">Применение</th>
                        <th scope="col">Статус</th>
                        <th scope="col" collspan="2" className="text-left">Дата</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.requests.map(request => (
                        <tr key={request.id}>
                            <td scope="row">{request.id}</td> 
                            <td>{request.inventory_number}</td>
                            <td>{request.manager_id}</td>
                            <td>{request.name}</td>
                            <td>{request.email}</td>
                            <td>{request.volume}</td>
                            <td>{request.os_type}</td>
                            <td>{request.used_programs}</td>
                            <td>{request.system_requirements}</td>
                            <td>{request.program_description}</td>
                            <td>{request.usage_description}</td>
                            <td>{request.status}</td>
                            <td>{request.date}</td>
                            <td className="text-right"><button onClick={this.props.deleteRequest.bind(this, request.id)} className="btn btn-danger btn-sm"> {" "} Удалить</button></td>
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