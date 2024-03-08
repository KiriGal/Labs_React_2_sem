import React, {useEffect} from 'react';
import './ContactTableStyle.css';

const ContactTable = ({contacts}) => {

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <table>
            <tr>
                <th>№</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Gender</th>
            </tr>
            {contacts.length > 0 ? (
                contacts.map((contact, index) => (
                        <tr>
                            <th>{index}</th>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.message}</td>
                            <td>{contact.gender}</td>
                        </tr>
                ))
            ) : null}

        </table>
    );
};

export default ContactTable;