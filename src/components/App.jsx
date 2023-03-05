import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContainerApp } from './App.styled';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
    /* {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}, */
  ],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    

    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
}

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
    
  }
  

  deleteContacts = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  } 


  onSubmitHandler = data => {
   
    for (let cont of this.state.contacts) {
      if (data.name === cont.name) {
        return alert (`${data.name} is already in contacts`)
      } 

    }
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }))
    
  }

    onFilterChange = e => (
    this.setState({
    filter: e.target.value
  })
)
  
  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(cont => cont.name.toLowerCase().includes(filter.toLowerCase()))
   }
  
  render() {
     
    return (
       
      <ContainerApp>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmitHandler} />
       
        
        <h2>Contacts</h2>
        <Filter onFilterChange={this.onFilterChange} />
        <ContactList contacts={this.filteredContacts()} onDeleteContact={this.deleteContacts}  />
      </ContainerApp>
  );

  }
  
};
