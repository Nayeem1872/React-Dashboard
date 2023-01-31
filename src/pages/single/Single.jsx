import React from 'react';
import './single.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar"


const Single = () => {
  return (
    <div className='single'>
        < Sidebar />
        <div className="singleContainer">
          <Navbar />
          <div className='top'>
              <div className='left'>
                <h1 className='title'>Information</h1>
                <div className="item"></div>
              </div>
              <div className='right'></div>

                <img src="https://images.pexels.com/photos/3839648/pexels-photo-3839648.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" />


          </div>
          <div className='bottom'></div>


        </div>

      
    </div>
  )
}

export default Single
