import React from 'react';
import SideBar from './SideBar';
import { ParentDiv } from './Styled';

const AdminLayout = ({ children }) => {
  return (
    <ParentDiv>
      <SideBar />
      {children}
    </ParentDiv>
  );
};

export default AdminLayout;
