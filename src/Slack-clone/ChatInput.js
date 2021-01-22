import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { db } from '../firebase';
import { useStateValue } from '../StateProvider';
import firebase from '/home/bhubesh/react-clone-four/src/firebase.js'

import './ChatInput.css'
function ChatInput({channelName , channelId}) {

    // usestate
    const [input, setinput] = useState('')
    // onclcik events
    // sendMessage


    const [{user}] = useStateValue();

    const sendMessage =(e) => {
        e.preventDefault();
        if(channelId) {
            db.collection('rooms').doc(channelId).collection('messages')
        .add({
            message : input ,
             user : user.displayName,
            userImage : user.photoURL,
            timestamp : firebase.firestore.FieldValue
            .serverTimestamp(),
        })

        setinput('');
    }
     
        }
    return (
        <div className = 'chatinput'>
           <form>
               <input 
               placeholder = {`Message #${channelName?.toLowerCase()}`}
               value = {input}
               onChange = {e => setinput(e.target.value) }
               ></input>
               <Button type = 'submit' onClick = {sendMessage}>Send</Button>
           </form>
        </div>
    )
}

export default ChatInput
