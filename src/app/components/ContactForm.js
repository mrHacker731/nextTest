"use client";

import React, { useState } from "react";
import styles from "../contact/cotact.module.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    display: "swap",
});


function ContactForm() {

    const [userMessage, setUserMessage] = useState({
        username: "",
        email: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState(null);

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUserMessage((prevUser) => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { "Content_Type": "application/json" },
                body: JSON.stringify({
                    username: userMessage.username,
                    email: userMessage.email,
                    phone: userMessage.phone,
                    message: userMessage.message
                })
            })

            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUserMessage({
                    username: "",
                    email: "",
                    phone: "",
                    message: "",
                })
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Enter your name
                    <input
                        type="text"
                        className={mulish.className}
                        id="username"
                        name="username"
                        placeholder="Enter UserName"
                        value={userMessage.username}
                        onChange={handleChange}
                    />
                </label>
            </div>
    
            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Enter your email
                    <input
                        type="text"
                        className={mulish.className}
                        id="email"
                        name="email"
                        placeholder="Enter Email"
                        value={userMessage.email}
                        onChange={handleChange}
                    />
                </label>
            </div>
    
            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Enter your phone number
                    <input
                        type="text"
                        className={mulish.className}
                        id="phone"
                        name="phone"
                        placeholder="Enter phone"
                        value={userMessage.phone}
                        onChange={handleChange}
                    />
                </label>
            </div>
    
            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                    <textarea
                        className={mulish.className}
                        rows={5}
                        id="message"
                        name="message"
                        placeholder="message"
                        value={userMessage.message}
                        onChange={handleChange}
                    />
                </label>
            </div>
    
            <div>
                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}
    
                <button className={mulish.className} type="submit">
                    Send Message
                </button>
            </div>
        </form>
    );
    
}



export default ContactForm;
