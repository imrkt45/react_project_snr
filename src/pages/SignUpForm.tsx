import React, { useState } from 'react';
import { Button, createTheme, ThemeProvider, TextField } from '@mui/material';

import { useNavigate } from 'react-router-dom';

interface SignUpFormProps {
  onSubmit: (formData: { name: string; email: string; password: string }) => void;
}
//hostname:string, username:string,, pass:string, companyId:
//jwt token 
//elis property
//
// if(isdelete === "Delete"){
  //   setdelete("Undo")

  // } else{
  //   setdelete("Delete");
  // }
  

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
 // const dispatch  = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent):void => {
    e.preventDefault();
    
  onSubmit(formData);
   navigate('/Home');

  };
  const buttonTheme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            background: 'purple',
            color: 'white',
          },
        },
      },
    },
  });


  return (
    <ThemeProvider theme={buttonTheme}>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>

        <TextField
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          fullWidth
          margin="normal"
        
        />
        <Button type="submit" variant="contained" fullWidth>
          Sign Up
        </Button>
      </form>
    </ThemeProvider>
  );
};

export default SignUpForm;
