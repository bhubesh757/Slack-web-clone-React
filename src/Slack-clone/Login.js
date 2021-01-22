import { Button } from '@material-ui/core'
import React from 'react'

import './Login.css'

// icons
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

// 
function Login() {

    // onclick events 
    // signIn

    // const [user, setuser] = useState(initialState)
    const [{}, dispatch] = useStateValue();
    
    const signIn = () => {
        
        auth.signInWithPopup(provider)
            .then((result) => {
                
                    dispatch ({
                        type : actionTypes.SET_USER,
                        user : result.user   //push the user ino the data layer
                    })
            })
            .catch((error) => alert(error.message))
    }
    return (
        <div className = 'login'>
            {/* <h1> Iam Login</h1> */}
            <div className="login__container">
                <img src = 'https://www.b2bnn.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-17-at-2.29.34-PM.png'></img>
            <h1>Sign In to Slack</h1>
            <p>Bhubesh.slack.com</p>
            <Button onClick = {signIn}> Sign in With Google</Button>
            </div>
            <div className="login__dev">
                Developed by : Bhubesh <VerifiedUserIcon></VerifiedUserIcon>2021
            </div>
        </div>
    )
}

export default Login
