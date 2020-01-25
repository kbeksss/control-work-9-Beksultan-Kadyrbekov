import {
    FETCH_CONTACTS_ERROR,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
    POST_CONTACT_ERROR,
    POST_CONTACT_REQUEST,
    POST_CONTACT_SUCCESS
} from "./actionTypes";
import axiosContacts from "../../axios-contacts";

const postContactRequest = () => ({type: POST_CONTACT_REQUEST});
const postContactSuccess = () => ({type: POST_CONTACT_SUCCESS});
const postContactError = () => ({type: POST_CONTACT_ERROR});

export const postContact = contact => {
    return async dispatch => {
        dispatch(postContactRequest());
        try {
            await axiosContacts.post('contacts.json', contact);
            dispatch(postContactSuccess());
        } catch (e) {
            console.error('Error while sending the contact');
            dispatch(postContactError());
        }
    }
};

const fetchContactsRequest = () => ({type: FETCH_CONTACTS_REQUEST});
const fetchContactsSuccess = contacts => ({type: FETCH_CONTACTS_SUCCESS, contacts});
const fetchContactsError = () => ({type: FETCH_CONTACTS_ERROR});

export const fetchContacts = () => {
    return async dispatch => {
        dispatch(fetchContactsRequest());
        try {
            const response = await axiosContacts.get('contacts.json');
            dispatch(fetchContactsSuccess(response.data));
        } catch (e) {
            console.error('Error while getting contacts', e);
            dispatch(fetchContactsError());
        }
    }
};

