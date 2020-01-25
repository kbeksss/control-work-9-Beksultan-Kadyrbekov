import React from 'react';
import ContactForm from "../../components/ContactForm/ContactForm";
import {postContact} from "../../store/actions/contactsActions";
import {connect} from "react-redux";

const NewContact = props => {
    const submitContact = async (event, contact) => {
        event.preventDefault();
        if(contact.name && contact.phoneNum && contact.email){
            if(!contact.photo){
                contact.photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUYmdflB0WAqh4yP1led7zKxaX1xLmfkB53NDa_zV5Ijj-raf&s'
            }
            console.log(contact);
            await props.postContact(contact);

        } else {
            alert('Please fill in the blanks')
        }
    };
    return (
        <div className='container pt-4'>
            <h2 >Add new contact</h2>
            <ContactForm submitContact={submitContact}/>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    postContact: contact => dispatch(postContact(contact)),
});
export default connect(null, mapDispatchToProps)(NewContact);
