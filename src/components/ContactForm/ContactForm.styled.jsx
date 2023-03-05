import styled from "@emotion/styled"

export const Form = styled.form`
display: flex;
flex-direction: column;
width: 200px;
`

export const Input = styled.input`
margin-bottom: 15px;
box-shadow: inner 0 0 4px rgba(0, 0, 0, 0.2);
border-radius: 3px;  
&:focus {
    outline: none;
    border-color: blue;
    box-shadow: 0 0 10px #0000ff;
  }

`

export const Label = styled.label`
margin-right: 5px;

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