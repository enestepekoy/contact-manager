import { Table } from "react-bootstrap";

const ContactTable = ({ contactList }) => {
    return (
        <div className='contactList'>
            <>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactList.map(contact => (
                            <tr key={contact.id}>
                                <td>{contact.id}</td>
                                <td>{contact.firstName}</td>
                                <td>{contact.lastName}</td>
                                <td>{contact.phoneNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </>
        </div>
    )
}

export default ContactTable;