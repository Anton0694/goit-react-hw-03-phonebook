import React, { Component } from "react"

import {Form, Input, Label, Button } from "./ContactForm.styled"


export class ContactForm extends Component {
  state = {
       
         name: '',
         number: '',
    }
   handleSubmit = event => {
       event.preventDefault();
       this.props.onSubmit(this.state)
       this.reset();
  }  
  
  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({[name]: value})
    };    
    
    reset = () => {
        this.setState({ name: '', number: '' });
  }  
  
     render() {
       return (
         
           <Form onSubmit={this.handleSubmit}>
             <Label htmlFor={this.nameInputId}>Name
               <Input
                 onChange={this.handleInputChange}
                 type="text"
                 value={this.state.name}
                 name="name"
                 id={this.nameInputId}
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
               />
             </Label>
             <Label htmlFor={this.telInputId}>Phone number
               <Input
                 onChange={this.handleInputChange}
                 type="tel"
                 value={this.state.number}
                 name="number"
                 id={this.telInputId}
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required
               />
            
             </Label>
       
             <Button type="submit" >Add contact</Button>
           </Form>
           
         
         
       )
    }
}



