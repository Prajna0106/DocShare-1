import React, { useState } from 'react';
import './Register.css'
import Navbar from '../Navbar/Navbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';













const Register = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
    })


    //input change functions
    const handleChange = (e) => {
        setInputs(prevState => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs)
    }
    return (
        <> 

            <div className='register-body'>
                <Navbar/>

                <br />
                <br />


                <Grid container spacing={2} justifyContent={'center'} flexDirection={'column'} alignContent={'center'}>


                    <Grid item xs={10}>
                    <Typography sx={{color:'white', textAlign:'center'}} className='register-title'  gutterBottom>
                        CREATE NEW ACCOUNT
                    </Typography>

                    <Typography sx={{color:'white' , textAlign:'center'}}  gutterBottom>
                    Already a Member.  LOG IN
                    </Typography>
                    
                    </Grid>

                    <Grid item  xs={12} sm={9} md={6} lg={6} xl={4} sx={{marginTop:'2rem'}} className='grid-input-register'  justifyItems={'center'} >

                    <div className='input-div-register'>
                    <FormControl fullWidth > 
                        <Input
                        disableUnderline={true}
                        fullWidth
                        type='text'
                        placeholder="Username"
                        required={true}
                        // value={email}
                        className='register-input'
                        // onChange={handleEmail}
                        startAdornment={
                        <InputAdornment position="start" sx={{marginLeft:'0.5rem'}}>
                            <PersonIcon/>
                        </InputAdornment>
                    }
                    />
                    </FormControl>
                    </div>


                    </Grid>









    

                    <Grid item  xs={12} sm={9} md={6} lg={6} xl={4} sx={{marginTop:'2rem'}} className='grid-input-register'  justifyItems={'center'} >

                        <div className='input-div-register'>
                        <FormControl fullWidth > 
                            <Input
                            disableUnderline={true}
                            fullWidth
                            type='email'
                            placeholder="Email"
                            required={true}
                            // value={email}
                            className='register-input'
                            // onChange={handleEmail}
                            startAdornment={
                            <InputAdornment position="start" sx={{marginLeft:'0.5rem'}}>
                                <EmailIcon/>
                            </InputAdornment>
                        }
                        />
                        </FormControl>
                        </div>
                        

                        </Grid>

                        <Grid item  xs={11} sm={9} md={6} lg={6} xl={4} sx={{marginTop:'2rem'}} justifyItems={'center'}>
                        

                        <div className='input-div-register'>
                        <FormControl fullWidth> 
                            <Input
                            disableUnderline={true}
                            fullWidth
                            type='password'
                            placeholder="Password"
                            required={true}
                            // value={email}
                            className='register-input'
                            // onChange={handleEmail}
                            startAdornment={
                                <InputAdornment position="start" sx={{marginLeft:'0.5rem'}}>
                                <HttpsIcon/>
                             </InputAdornment>
                        }
                        />
                        </FormControl>
                        </div>

                        </Grid>




                        <Grid item xs={12} sm={7} md={6} lg={6} xl={12} justifyContent={'center'}>

                            <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
                         <Button size="medium" type='submit' className='btn-login-card' fullWidth sx={{width:'50%'}}>REGISTER HERE</Button>
                            </div>



                        </Grid>


                </Grid>
            </div>
        
        
        
        
        </>
    )
}

export default Register