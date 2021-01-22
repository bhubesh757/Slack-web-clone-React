import React, { useState , useEffect } from 'react'

import './Sidebar.css'

// Icons
import CreateIcon from '@material-ui/icons/Create';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SidebarOption from './SidebarOption';

// icons for sidbaroption

import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { db } from '/home/bhubesh/react-clone-four/src/firebase.js';
import { useStateValue } from '../StateProvider';


function Sidebar() {
    // useStatevalau
    const [{user}] = useStateValue();

    const [channels, setchannels] = useState([]);

    useEffect(() => {
    //    Run this code when the sidebar component loads

    db.collection('rooms').onSnapshot((snapshot) => 
        setchannels(
            snapshot.docs.map(doc => ({
                id : doc.id,
                name : doc.data().name,
            })))
    )
    
    }, [])
    return (
        <div className = 'sidebar'>
            {/* <h3> iam sidebar</h3> */}
            {/* header */}
            <div className="sidebar__header">
                <div className="sidebar__info">

                {/* need to change */}
                <h2>React Js India</h2>
                <h3>
                    <FiberManualRecordIcon></FiberManualRecordIcon>
                    {user?.displayName}
                </h3>
                </div>
                <CreateIcon></CreateIcon>

            </div>
            <SidebarOption Icon = {InsertCommentIcon}
                title = 'Threads'
                ></SidebarOption>

                <SidebarOption Icon = {InboxIcon} title = 'Mentions and Reactions'></SidebarOption>
                <SidebarOption Icon = {DraftsIcon} title = 'Saved'></SidebarOption>
                <SidebarOption Icon = {BookmarkIcon} title = 'Channel Browser'></SidebarOption>
                <SidebarOption Icon = {PeopleAltIcon} title = 'People and User Groups'></SidebarOption>
                <SidebarOption Icon = {AppsIcon} title = 'Apps'></SidebarOption>
                <SidebarOption Icon = {FileCopyIcon} title = 'File Browser'></SidebarOption>
                <SidebarOption Icon = {ExpandLessIcon} title = 'Show less'></SidebarOption>
                <hr></hr>
                <SidebarOption Icon = {ExpandMoreIcon} title = 'Direct Messages'></SidebarOption>
                <hr></hr>
                <SidebarOption Icon = {AddBoxIcon} title = 'Add Channel' addChannelOption></SidebarOption>

                {/* connect to the db and add the all the channels  */}

               {channels.map ((channel) => (
                   <SidebarOption title = {channel.name} id = {channel.id} ></SidebarOption>
               ))}
        </div>
    )
}

export default Sidebar
