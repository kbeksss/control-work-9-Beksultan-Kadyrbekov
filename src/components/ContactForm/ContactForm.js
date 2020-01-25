import React, {Fragment, useEffect, useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
const INITIAL_USER = {
    name: '',
    phoneNum: '',
    email: '',
    photo: '',
};
const ContactForm = props => {
    const [user, setUser] = useState(INITIAL_USER);
    useEffect(() => {
        if(props.currentContact){
            setUser(props.currentContact);
        }
        // eslint-disable-next-line
    }, []);
    const inputChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };
    return (
        <Fragment>
            <Form onSubmit={(event) => props.submitContact(event, user)}>
                <FormGroup row>
                    <Label for="name" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Input value={user.name} onChange={inputChange} type="text" name="name" id="name" placeholder="His or her name" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="number" sm={2}>Phone</Label>
                    <Col sm={10}>
                        <Input value={user.phoneNum} onChange={inputChange} type="number" name="phoneNum" id="number" placeholder="His or her phone number" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="email" sm={2}>E-mail</Label>
                    <Col sm={10}>
                        <Input value={user.email} onChange={inputChange} type="email" name="email" id="email" placeholder="His or her email address" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="img" sm={2}>Photo url</Label>
                    <Col sm={10}>
                        <Input value={user.photo} onChange={inputChange} type="url" name="photo" id="img" placeholder="Image link" />
                    </Col>
                </FormGroup>
                <div className='row'>
                    <div className='col-2'>Photo preview</div>
                    <div className='col-10'><img width='100' height='auto' src={user.photo ||'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUYmdflB0WAqh4yP1led7zKxaX1xLmfkB53NDa_zV5Ijj-raf&s'}  alt=""/></div>
                </div>
                <Button type='submit'>Save</Button>
            </Form>
        </Fragment>
    );
};

export default ContactForm;
