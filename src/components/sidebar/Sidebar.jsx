import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'><span className="logo">Nayeem Admin</span></div>
      <hr/>
      <div className='center'>
        <ul>
            <p className="title">MAIN</p>
            <li><DashboardIcon className='icon' /> <a href="/"><span>Dashboard</span></a></li>
            <p className="title">LISTS</p>
            <li><PersonIcon className='icon'/><a href="/users"><span>Users</span></a></li>
            <li><ProductionQuantityLimitsIcon className='icon'/><span>Products</span></li>
            <li><ShoppingCartCheckoutIcon className='icon'/><span>Orders</span></li>
            <li><RoomServiceIcon className='icon'/><span>Delivery</span></li>
            <p className="title">USEFUL</p>
            <li><QueryStatsIcon className='icon'/><span>Stats</span></li>
            <li><CircleNotificationsIcon className='icon'/><span>Notifications</span></li>
            <p className="title">SERVICE</p>
            <li><MonitorHeartIcon className='icon'/><span>System health</span></li>
            <li><BookIcon className='icon' /><span>Logs</span></li>
            <li><SettingsIcon className='icon'/><span>Settings</span></li>
            <p className="title">USER</p>
            <li><AccountCircleIcon className='icon'/><span>Profile</span></li>
            <li><LogoutIcon className='icon' /><span>Logout</span></li>   

        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOption"></div>
        <div className="colorOption"></div>


      </div>
    </div>
  )
}

export default Sidebar
