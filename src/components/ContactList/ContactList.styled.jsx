import styled from '@emotion/styled'

export const ContactsList = styled.ul`
width: 350px;
padding-left: 5px;
`
export const ContactsListItem = styled.li`
display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
`
export const ContactListText = styled.p`
     margin-top: 0;
    margin-bottom: 5px;
    margin-right: 10px;
`
export const Button = styled.button`
    margin-left: auto;
border-radius: 5px;
border-color: grey;
cursor: pointer;
&:hover {
      background-color: blue;
  }
`
