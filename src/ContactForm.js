const ContactForm = ({ addContact, setNewContact, newContact }) => {
    return (
        <div className='addContact'>
            <input type='text' placeholder='First Name' value={newContact.firstName} onChange={(e) => setNewContact({ ...newContact, firstName: e.target.value })} />
            <input type='text' placeholder='Last Name' value={newContact.lastName} onChange={(e) => setNewContact({ ...newContact, lastName: e.target.value })} />
            <input type='number' placeholder='Phone Number' value={newContact.phoneNumber} onChange={(e) => setNewContact({ ...newContact, phoneNumber: e.target.value })} />
            <button onClick={addContact}>Add Contact</button>
        </div>
    )
}

export default ContactForm;