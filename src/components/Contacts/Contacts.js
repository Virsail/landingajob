import React, { useContext, useEffect, useState } from 'react';
import { IconButton, SnackbarContent, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import { Formik } from 'formik';
import Snackbar from '../Snackbar';
import { useRef } from "react";
import { useForm } from "react-hook-form";
import isEmail from 'validator/lib/isEmail';
import { Send } from "@material-ui/icons";
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';
import {
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaYoutube,
    FaBloggerB,
    FaRedditAlien,
    FaStackOverflow,
    FaCodepen,
    FaInstagram,
    FaGitlab,
    FaMediumM,
} from 'react-icons/fa';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { ThemeContext } from '../../contexts/ThemeContext';

import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';



function Contacts() {
    const [open, setOpen] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const { theme } = useContext(ThemeContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const useStyles = makeStyles((t) => ({
        input: {
            border: `4px solid ${theme.primary80}`,
            backgroundColor: `${theme.secondary}`,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': {
                border: `4px solid ${theme.primary600}`,
            },
        },
        message: {
            border: `4px solid ${theme.primary80}`,
            backgroundColor: `${theme.secondary}`,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': {
                border: `4px solid ${theme.primary600}`,
            },
        },
        label: {
            backgroundColor: `${theme.secondary}`,
            color: `${theme.primary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 600,
            fontSize: '0.9rem',
            padding: '0 5px',
            transform: 'translate(25px,50%)',
            display: 'inline-flex',
        },
        socialIcon: {
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '21px',
            backgroundColor: theme.primary,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
        detailsIcon: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '23px',
            transition: '250ms ease-in-out',
            flexShrink: 0,
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
        submitBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.08)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
    }));



    const classes = useStyles();


    const SnackbarType = {
    success: "success",
    fail: "fail",
  };


   const snackbarRef = useRef(null);



   function Reset() {
    const {reset} = useForm<FormData>({
        defaultValues:{
            name:'',
            email:'',
            message:''
        }
    });
}


   

   
  

    const handleContactForm = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_66kzour','template_oxbwpid',e.target, '_idouojzDLgSPWuXj').then(res=> {
            console.log(res)
        }).catch(err=> console.log(err));
        
    };

    return (
        <div
            className='contacts'
            id='contacts'
            style={{ backgroundColor: theme.secondary }}
        >
            <div className='contacts--container'>
                <h1 style={{ color: theme.primary }}>Contact me</h1>
                <div className='contacts-body'>
                    <div className='container--border' style={{marginTop: '50px',width: '55%', backgroundPosition:'center', backgroundSize:'cover' ,backgroundImage:`url('')`}}>
                    
                    <form onSubmit={handleContactForm}>
                <label>Name</label>
                <input type="text" name="name" placeholder='Your Name'/>

                <label>Email</label>
                <input type="email" name="user_email" placeholder='Your Email'/>

                <label>Message</label>
                <textarea name="message" rows={4} placeholder='write me'/>

                <div className='buttontu'>
            

                <button className='showSnackbarBttn' onClick={() => {snackbarRef.current.show();}}  type="submit"  value={Send}> Send </button>

                <Snackbar
        ref={snackbarRef}
        message="Thank you for contacting Virsail your Mail message has been delivered to his inbox!"
        type={SnackbarType.success}
      />
                </div>

            </form>
                   
                    </div>

                    <div className='contacts-details'>
              
                   
                   

                        <div className='socialmedia-icons'>
                            {socialsData.twitter && (
                                <a
                                    href={socialsData.twitter}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaTwitter aria-label='Twitter' />
                                </a>
                            )}
                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaGithub aria-label='GitHub' />
                                </a>
                            )}
                         
                            {socialsData.instagram && (
                                <a
                                    href={socialsData.instagram}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaInstagram aria-label='Instagram' />
                                </a>
                            )}
                            
                            
                          
                         
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={theme.contactsimg}
                alt='contacts'
                className='contacts--img'
            />
        </div>
    );
}


export default Contacts;