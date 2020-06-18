import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getAgreements, deleteAgreement} from "../../actions/agreements";
import AgreementsForm from "../forms/AgreementsForm";
import AgreementsFormEdit from '../forms/AgreementsFormEdit';

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

                <h2>Договоры</h2>
                <table className="table table-striped table-borderless">
                    <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                        <th scope="col">№ менеджера</th>
                        <th scope="col">№ юриста</th>
                        <th scope="col">№ запроса</th>
                        <th scope="col" collspan="3" className="text-left">Статус</th>
                        <th/>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.agreements.map(agreement => (
                        <tr key={agreement.id}>
                            <td scope="row">{agreement.id}</td> 
                            <td>{agreement.manager_id}</td>
                            <td>{agreement.lawyer_id}</td>
                            <td>{agreement.request_id}</td>
                            <td>{agreement.status}</td>
                            <td className=""><AgreementsFormEdit data={agreement}/></td>
                            <td className="text-right"><button onClick={this.props.deleteAgreement.bind(this, agreement.id)} className="btn btn-danger btn-sm"> {" "} Удалить</button></td>
                        </tr>))}
                    </tbody>
                </table>

               
                <AgreementsForm/>

            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    agreements: state.agreements.agreements
});

export default connect(mapStateToProps, {getAgreements, deleteAgreement})(Agreements);