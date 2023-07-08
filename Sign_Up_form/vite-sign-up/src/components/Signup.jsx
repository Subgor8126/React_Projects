/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function Signup(){

    const [signUp, setSignUp] = React.useState({
        email: "",
        password: "",
        confirm_password:"",
        newsletter: true
    })

    console.log(signUp);

    function submitter(){
        // The line below is essenstial for data abstraction and security. Don't forget to put it in any signup
        // forms you create in the future.
        event.preventDefault()

        if (signUp.email){
            if(signUp.password === signUp.confirm_password && signUp.newsletter === true){
                console.log(signUp);
                console.log("Sign Up Successful");
                console.log("Thanks for signing up to the newsletter!")
            }
            else if(signUp.password === signUp.confirm_password){
                console.log(signUp);
                console.log("Sign Up Successful");
            }
            else{
                console.log("Passwords do not match, please try again!")
            }
        }
        else{
            console.log("Enter an Email Address")
        }
    }

    function inputChange(event){
        const {name, type, value,checked} = event.target
        setSignUp((prevSignUp) => {
            return {
                ...prevSignUp,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    return(
        <form onSubmit={submitter}>
            <input 
            type="text"
            name="email"
            id="email"
            value={signUp.email}
            onChange = {inputChange}
            />
            <label htmlFor="email">Enter Email Address</label>

            <input 
            type="password"
            name="password"
            id="password"
            value={signUp.password}
            onChange = {inputChange}
            />
            <label htmlFor="password">Enter Password</label>

            <input 
            type="password"
            name="confirm_password"
            id="confirm_password"
            value={signUp.confirm_password}
            onChange = {inputChange}
            />
            <label htmlFor="confirm_password">Confirm Password</label>

            <input 
            type="checkbox"
            name="newsletter"
            id="newsletter"
            checked={signUp.newsletter}
            onChange = {inputChange}
            />
            <label htmlFor="newsletter">Would you like to join our newsletter?</label>

            <button>Submit</button>
        </form>
    )
}