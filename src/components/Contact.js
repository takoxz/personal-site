import React from 'react'
import "../styles/contact.scss";
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {github, email, linkedin} from "../config"

const theme = createTheme({
  palette: {
    secondary: {
      main: "#D8B274"
    }
  },
  typography:{
  button: {
    '@media (max-width:600px)': {
      fontSize: 7,
    }
  }
}
})


function Contact() {
   return (
    <div className='divContent'>
      <div className="divContent__center">
        <div id="contact" className='divContent__title'>Contact Me</div>
        <div className='divContent__caption'>Get In Touch</div>
        <ThemeProvider theme={theme}>
          <Button variant="outlined" color='secondary' className='btn__email' 
          onClick={(e)=>{
            window.location = `mailto:${email}`
          }}
          >Say Hello 👋</Button>
        </ThemeProvider>
        <div className='socmedia'>
            <GitHubIcon className="socmedia__item" 
             onClick={(e)=>{
            window.location = github
            }}/>

            <LinkedInIcon className="socmedia__item"
              onClick={(e)=>{
              window.location = linkedin
            }}
            />
        </div>
      </div>
    </div>
          
  )
}

export default Contact