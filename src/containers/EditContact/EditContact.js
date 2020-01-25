import React from 'react';
import {connect} from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import {postChanges} from "../../store/actions/contactsActions";

const EditContact = props => {
    const submitContactChanges = async (event, user) => {
        event.preventDefault();
        await props.postChanges(props.match.params.id, user);
        props.history.replace('/');
    };
    return (
        <div className='container pt-4'>
            <h4>Edit Contact</h4>
            <ContactForm submitContact={submitContactChanges} currentContact={props.contacts[props.match.params.id]}/>
        </div>
    );
};

const mapStateToProps = state => ({
    contacts: state.contacts,
});
const mapDispatchToProps = dispatch => ({
    postChanges: (contactId, contact) => dispatch(postChanges(contactId, contact)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
