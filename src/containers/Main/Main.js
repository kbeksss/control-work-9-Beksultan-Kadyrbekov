import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {fetchContacts, removeContact} from "../../store/actions/contactsActions";
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
    const [currentId, setCurrentId] = useState(null);
    const openContact = contactId => {
        setCurrentContact(props.contacts[contactId]);
        setCurrentId(contactId);
        toggleModal(true);
    };
    const removeOneContact = async () => {
        await props.deleteContact(currentId);
        toggleModal(false);
        setCurrentContact(INITIAL_CONTACT);
        props.getContacts();
    };
    const goToEdit = () => {
        props.history.replace('/edit/' + currentId);
    };
    useEffect(() => {
        props.getContacts();
        // eslint-disable-next-line
    }, []);
    return (
        <div className='container pt-3'>
            {props.contacts && Object.keys(props.contacts).map(user => (
                <div key={user} onClick={() => openContact(user)} className='row border border-info align-items-center py-2 mx-4 my-4'>
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
                    <Button color="primary" onClick={goToEdit} >Edit</Button>{' '}
                    <Button color="danger" onClick={removeOneContact}><i className="fas fa-trash-alt"/></Button>
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
    deleteContact: contactId => dispatch(removeContact(contactId))
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
