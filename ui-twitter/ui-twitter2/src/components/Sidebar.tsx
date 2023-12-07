import { 
  TwitterLogo, 
  House, 
  Hash, 
  Bell, 
  Envelope, 
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle
} from "@phosphor-icons/react";

import './Sidebar.css'

import { NavLink } from 'react-router-dom'



export function Sidebar() {
  return (
    
    <aside className="sidebar">
      <TwitterLogo className="active" size={32} weight="fill"/>
    
      <nav className="main-navigation">
        <NavLink  to="/">
         <House weight="fill"/>
         Home
        </NavLink>
    
        <a href="">
          <Hash />
          Explorer
        </a>
    
        <a href="">
          <Bell />
          Notifications
        </a>
    
        <a href="">
          <Envelope />
          Messages
        </a>
    
        <a href="">
          <BookmarkSimple />
          Bookmarks
        </a>
    
        <a href="">
          <FileText />
          lists
        </a>
    
        <a href="">
          <User />
          Profile
        </a>
    
        <a href="">
          <DotsThreeCircle />
          More
        </a>
    
      </nav>
    
      <button className="new-tweet" type="button">Tweet</button>
    </aside>
  )
}