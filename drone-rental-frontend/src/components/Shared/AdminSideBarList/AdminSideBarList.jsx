import { Divider, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AdminSideBarList({ navPages, onItemClick }) {
  return (
    <>
      <Toolbar />
      <Divider />
      <List>
        {navPages.map(page => (
          <ListItem
            button
            component={Link}
            to={page.url}
            key={page.name}
            onClick={() => onItemClick()}
          >
            <ListItemText
              primary={page.name}
              primaryTypographyProps={{
                color: 'primary.dark',
                fontWeight: 'medium',
              }}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

AdminSideBarList.propTypes = {
  navPages: PropTypes.instanceOf(Array).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default AdminSideBarList;
