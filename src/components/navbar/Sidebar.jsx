import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [collapsed] = React.useState(true);
  return (
    <Sidebar collapsed={collapsed}>
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
            },
          },
        }}
      >
        <MenuItem component={<Link to="/documentation" />} icon={<Icon name="book-2" />}> Documentation</MenuItem>
        <MenuItem component={<Link to="/calendar" />} icon={<Icon name="book-2" />}> Calendar</MenuItem>
        <MenuItem component={<Link to="/e-commerce" />} icon={<Icon name="book-2" />}> E-commerce</MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default Sidebar