import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getEmployees, deleteEmployee} from "../../actions/employees";
import EmployeesForm from "../forms/EmployeesForm"
import EmployeesFormEdit from '../forms/EmployeesFormEdit';
import employees from '../../reducers/employees';

class Employees extends Component {
    static propTypes = {
        employees: PropTypes.array.isRequired,
        getEmployees: PropTypes.func.isRequired,
        deleteEmployee: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getEmployees();
    }

    render() {
        return (
            <Fragment>
                <h2>Работники</h2>
                <table className="table table-striped table-borderless">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Логин</th>
                        <th scope="col" collspan="3" className="text-left">Уровень доступа</th>
                        <th/>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.employees.map(employee => (
                        <tr key={employee.id}>
                            <td scope="row">{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.login}</td>
                            <td>{employee.access_level}</td>
                            <td className=""><EmployeesFormEdit data={employee}/></td>
                            <td className="text-right"><button onClick={this.props.deleteEmployee.bind(this, employee.id)} className="btn btn-danger btn-sm"> {" "} Удалить</button></td>
                        </tr>))}
                    </tbody>
                </table>

                <EmployeesForm/>

            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    employees: state.employees.employees
});

export default connect(mapStateToProps, {getEmployees, deleteEmployee})(Employees);