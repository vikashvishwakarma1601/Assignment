import React,{useRef,useContext,useState,useEffect} from 'react';
import UserContext from '../../UserContext/UserContext';

const UserForm = ({history} ) => {

    const email = useRef(null)
    const pwd = useRef(null)
    let {dispatch} = useContext(UserContext)
    const [errorMsg,setErrorMsg] = useState()
   

    const formControl = (event)=> {
        event.preventDefault()
        let emailField = email.current.value
        let pwdField = pwd.current.value
        let regExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if(emailField==='' || regExp.test(emailField)){
            setErrorMsg("Invalid Email ...!")
        }
        if(pwdField==='' || pwdField !=='admin123'){
            setErrorMsg("Invalid Password...!")
        }
        if(emailField==="admin@gmail.com" && pwdField==="admin123"){
        const userDet = {
            UserEmail:emailField,
            Password:pwdField,
            isLoggedIn:true
        }
        dispatch({type:"LOGIN",userDet})
        history.push("/Main")
        }
    }

    useEffect(()=>{

    },[errorMsg])

    const renderError=()=>{
        if(errorMsg){
            return <div className="errorMsg">{errorMsg}</div>
        }
    }
   

    return (<>
        <div className="authSection">
            <h2>Get Started For Free</h2>
            {renderError()}
            <form className="userForm" onSubmit={formControl}>
                <label htmlFor="email">Email</label><br />
                <input id="email" type="email" ref={email}/><br /><br />
                <label htmlFor="pwd">Password</label><br />
                <input id="pwd" type="password" ref={pwd}/><br />
                <input type="submit" value="Start coding now" />
            </form>
            <p>By signing up for Codecademy, you agree to Codecademy's <a>Terms of Service</a> & <a>Privacy Policy</a>.</p>
            <div className="thirdPartyAuth">
                <h3>Or, use another account:</h3>
                <div className="thirdParties">
                    <div><img src="./images/social/linkedIn.png" alt="linkedIn"/></div>
                    <div><img src="./images/social/google.svg" alt="google"/></div>
                    <div><img src="./images/social/facebook.svg" alt="facebook"/></div>
                    <div><img src="./images/social/github.svg" alt="github"/></div>
                </div>
            </div>
        </div>
    </>
    )
}

export default UserForm;