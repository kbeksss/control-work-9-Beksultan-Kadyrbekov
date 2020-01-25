import React from 'react';

const Contact = props => {
    return (
        <div>
            <div className='row'>
                <div className='col-5'>
                    <img src={props.contact.photo} width='100%' height='auto' alt=""/>
                </div>
                <div className='col-7'>
                    <h4 className='mb-4'>{props.contact.name}</h4>
                    <p><i className="fas fa-phone-square-alt text-info mr-3"/> <u className='text-info'>{props.contact.phoneNum}</u></p>
                    <p><i className="fas fa-envelope text-info mr-3"/><u className='text-info'>{props.contact.email}</u></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
