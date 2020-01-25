import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {fetchContacts} from "../../store/actions/contactsActions";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Contact from "../../components/Contact/Contact";
const INITIAL_CONTACT = {
    name: '',
    email: '',
    phoneNum: '',
    photo: '',
};
const Main = props => {
    const [modal, toggleModal] = useState(false);
    const [currentContact, setCurrentContact] = useState(INITIAL_CONTACT);
    const openContact = contact => {
        setCurrentContact(contact);
        toggleModal(true);
    };
    useEffect(() => {
        props.getContacts();
        // eslint-disable-next-line
    }, []);
    return (
        <div className='container pt-3'>
            {props.contacts && Object.keys(props.contacts).map(user => (
                <div key={user} onClick={() => openContact(props.contacts[user])} className='row border border-info align-items-center py-2 mx-4 my-4'>
                    <div className='col-3'>
                        <img width='auto' height='60' src={props.contacts[user].photo} alt=""/>
                    </div>
                    <div className='col-9'>
                        <h4>{props.contacts[user].name}</h4>
                    </div>
                </div>
            ))}
            <Modal isOpen={modal} toggle={() => toggleModal(false)} >
                <ModalHeader toggle={() => toggleModal(false)}>Contact</ModalHeader>
                <ModalBody>
                    <Contact contact={currentContact}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" >Do Something</Button>{' '}
                    <Button color="secondary" onClick={() => toggleModal(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};
const mapStateToProps = state => ({
    contacts: state.contacts,
});
const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(fetchContacts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
