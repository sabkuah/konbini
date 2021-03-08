import React from 'react';
import AdminNav from '../../components/common/AdminNav';
import AdminFooter from '../../components/common/AdminFooter';

export default ({ children }) => {
  console.log('Admin view');
  //const { toggleTheme, theme } = props;

  return (
    <div>
      <AdminNav />
      {children}
      <AdminFooter />
    </div>
  );
};
