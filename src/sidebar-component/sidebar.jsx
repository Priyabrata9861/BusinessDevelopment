import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiMenu, FiHome, FiUser, FiBarChart2, FiSettings } from 'react-icons/fi';
import { NavLink as RouterLink, Outlet } from 'react-router-dom';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #4FD1C5; /* Darker color for a more professional look */
  color: white;
  width: ${props => (props.isOpen ? '200px' : '60px')};
  transition: width 0.2s;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  margin-left: ${props => (props.isOpen ? '200px' : '60px')};
  padding: 16px;
  transition: margin-left 0.2s;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const NavLink = styled(RouterLink)`
  display: flex;
  align-items: center;
  color:  #0f0600;
  text-decoration: none;
  margin-bottom: 16px;

  &:hover {
    color: white;
  }

  &:active svg {
    animation: tremble 0.5s;
  }
`;

const Text = styled.span`
  margin-left: 8px;
`;

const tremble = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <ToggleButton onClick={toggleSidebar}>
          <FiMenu />
        </ToggleButton>
        <NavLink to="/dashboard">
          <FiBarChart2 />
          {isOpen && <Text>Dashboard</Text>}
        </NavLink>
        <NavLink to="/user">
          <FiUser />
          {isOpen && <Text>User Management</Text>}
        </NavLink>
        <NavLink to="/">
          <FiHome />
          {isOpen && <Text>Home</Text>}
        </NavLink>
        <NavLink to="#">
          <FiSettings />
          {isOpen && <Text>Settings</Text>}
        </NavLink>
      </SidebarContainer>
      <ContentContainer isOpen={isOpen}>
        <Outlet />
      </ContentContainer>
    </>
  );
};

export default Sidebar;
