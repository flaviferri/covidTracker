import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import './sidenav.scss'
import { TfiLayoutGrid2,TfiPieChart,TfiViewList, TfiLayoutTab, TfiLayersAlt, TfiStatsUp, TfiWorld, TfiComment, TfiFlickrAlt } from "react-icons/tfi";

const Sidenav = () => {
  const [collapsed] = React.useState(true);

  return (
    <Sidebar collapsed={collapsed}>
      <Menu
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
            },
          },
        }}
      >
        <MenuItem component={<Link to="/home" />} className='navbar'></MenuItem>
        <MenuItem component={<Link to="/tracker1" />} className='navbar' > <TfiPieChart /></MenuItem>
        <MenuItem component={<Link to="/tracker2" />} className='navbar' > <TfiViewList /></MenuItem>
        <MenuItem component={<Link to="/tracker3" />} className='navbar' > <TfiLayoutGrid2 /></MenuItem>
        <MenuItem component={<Link to="/tracker3" />} className='navbar' ><TfiLayoutTab /></MenuItem>
        <MenuItem component={<Link to="/tracker3" />} className='navbar' ><TfiLayersAlt /></MenuItem>
        <MenuItem component={<Link to="/tracker3" />} className='navbar' ><TfiStatsUp /></MenuItem>
        <MenuItem component={<Link to="/tracker3" />} className='navbar' ><TfiWorld /></MenuItem>
        <MenuItem component={<Link to="/tracker3" />} className='navbar' ><TfiComment /></MenuItem>
        <MenuItem component={<Link to="/tracker3" />} className='navbar' ><TfiFlickrAlt /></MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default Sidenav