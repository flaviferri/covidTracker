import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import './sidenav.scss'
import { TfiLayoutGrid2,TfiPieChart,TfiViewList, TfiLayoutTab, TfiLayersAlt, TfiStatsUp, TfiWorld, TfiComment, TfiFlickrAlt } from "react-icons/tfi";

const Sidenav = () => {
  const [collapsed] = React.useState(true);

  return (
    <Sidebar collapsed={collapsed}>
      <Menu>
        <MenuItem component={<NavLink to="/" activeclassname="active" />} className='navbar'><img src='/images/coronavirus.png' /></MenuItem>
        <MenuItem component={<NavLink to="tracker1" activeclassname="active" />} className='navbar' > <TfiPieChart /></MenuItem>
        <MenuItem component={<NavLink to="tracker2" activeclassname="active" />} className='navbar' > <TfiViewList /></MenuItem>
        <MenuItem component={<NavLink to="tracker3" activeclassname="active" />} className='navbar' > <TfiLayoutGrid2 /></MenuItem>
        <MenuItem component={<NavLink to="tracker4" activeclassname="active" />} className='navbar' ><TfiLayoutTab /></MenuItem>
        <MenuItem component={<NavLink to="/" activeclassname="active" />} className='navbar' ><TfiLayersAlt /></MenuItem>
        <MenuItem component={<NavLink to="tracker5" activeclassname="active" />} className='navbar' ><TfiStatsUp /></MenuItem>
        <MenuItem component={<NavLink to="/" activeclassname="active" />} className='navbar' ><TfiWorld /></MenuItem>
        <MenuItem component={<NavLink to="/" activeclassname="active" />} className='navbar' ><TfiComment /></MenuItem>
        <MenuItem component={<NavLink to="/" activeclassname="active" />}className='navbar'><TfiFlickrAlt /></MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default Sidenav