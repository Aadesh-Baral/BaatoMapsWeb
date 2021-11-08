import React from 'react';
import NavLinks from './NavLinks';
import logo from '../baato.png'

const sidebar = (props)=> {
    let sidebarClass ='sidebar active';
    if(!props.sidebarStatus){
        sidebarClass = sidebarClass.replace('active', '')
    } else {
        sidebarClass='sidebar active';
    }
    return (
        <div className={sidebarClass}>
            <div className='logo_content'>
                <div className='logo'>
                    <img src={logo} alt='www.baato.io'/>
                    <div className='logo_name'>Baato</div>
                </div>
                <i className='bx bx-menu' id='btn' onClick={props.changeSidebarStatus}></i>
            </div>
        <ul className='nav_list'>
          {/* <li>
            <i className='bx bx-search'></i>
            <input placeholder='Search'/>
          </li> */}
          <NavLinks name='Navigate' url='#' logo='bx bx-navigation'></NavLinks>
          <NavLinks name='Bookmarks' url='#' logo='bx bx-bookmarks'></NavLinks>
          <NavLinks name='Map Style' url='#' logo='bx bx-layer'></NavLinks>
          <NavLinks name='Search Radius' url='#' logo='bx bx-search-alt'></NavLinks>
          <NavLinks name='Settings' url='#' logo='bx bx-cog'></NavLinks>
        </ul>
        <div className='profile_content'>
          <div className='profile'>
            <div className='profile_details'>
              {/* <img src={logo} alt='www.baato.io'/> */}
              <div className='name_job'>
                <div className='job'>Language</div>
                <div className='job'>About Us</div>
              </div>
            </div>
            {/* <i className='bx bx-log-out' id='log_out'></i> */}
          </div>
        </div>
      </div>
    )
}

export default sidebar;