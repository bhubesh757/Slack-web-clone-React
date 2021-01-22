import React from 'react'
import { useHistory } from 'react-router-dom'
import { db } from '../firebase';

import './SidebarOption.css'

function SidebarOption({Icon , title ,addChannelOption , id }) {

    // onclick events
    // selectChannel

    const history = useHistory();
    // history it pushes to the next page
    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`)
        }else {
            history.push(title)
        }
    }

    // onclcik 
    // addChannel


    const addChannel = () => {
        const channelName = prompt('Please Enter the Channel Name ')

        if (channelName) {
            db.collection('rooms').add(
                {
                    name : channelName
                }
            )
        }
    }
    return (
        <div className = 'SidebarOption' 
         onClick = {addChannelOption ? addChannel : selectChannel}
         >
            {/* <h1> iam sidbaroption</h1> */}
            {Icon && <Icon className = 'sidebarOption__icon'></Icon>}
            {Icon ? (
                <h3> {title} </h3>
            ) : (
                <h3 className = 'sidebaroption__channel'> 
                <span className = 'sidebaroption__hash'> # </span>
                 {title} 
                 </h3>
            )}
        </div>
    )
} 

export default SidebarOption
