import React, { useEffect, useState } from 'react'
import './Chat.css'

// useparams

import {useParams} from 'react-router-dom'

// icons
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { db } from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';
function Chat() {

    // it pulls the name from the url
    const {roomId}  =  useParams();
    const [roomDetails, setroomDetails] = useState('')
    const [roommessages, setroommessages] = useState([])
    // db
    
    useEffect(() => {
       if(roomId) {
           db.collection('rooms').doc(roomId)
           .onSnapshot((snapshot) => 
            setroomDetails(snapshot.data())
           )
       }
       
    //    messages
    db.collection('rooms')
    .doc(roomId)
    .collection('messages')
    .orderBy('timestamp' , 'asc')
    .onSnapshot((snapshot) => 
    setroommessages(snapshot.docs.map((doc) => doc.data()))
    )
    }, [roomId])

    // log
   console.log("Messages==" , roommessages);

    return (
        <div className = 'chat'>
            {/* <h2> i am in the { roomId } room </h2> */}
            {/* header */}
            <div className="chat__header">
                {/* left */}
                <div className="chat__headerleft">
                    {/* channelname */}
                    <div className="chat__channelName">
                        <strong> # {roomDetails?.name} </strong>
                        <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
                    </div>
                </div>
                {/* right */}
                <div className="chat__headerRight">
                    
                    <p>
                        <SupervisorAccountOutlinedIcon></SupervisorAccountOutlinedIcon>
                        <PersonAddOutlinedIcon></PersonAddOutlinedIcon>
                        <InfoOutlinedIcon></InfoOutlinedIcon>
                        Details
                    </p>

                </div>
            </div>
            <div className="chat__messages">
                {/* Messages */}
                {roommessages.map(({message , timestamp , user , userImage}) => (
                    <Message 
                    message = {message}
                    timestamp  = {timestamp}
                    user = {user}
                    userImage = {userImage}
                    >

                    </Message>
                ))}

                
            </div>
            
            <ChatInput channelName = {roomDetails?.name} channelId = {roomId} ></ChatInput>

        </div>
    )
}

export default Chat
