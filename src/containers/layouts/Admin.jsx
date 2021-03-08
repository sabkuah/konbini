import React from 'react';
import AdminNav from '../../components/common/AdminNav';
import AdminFooter from '../../components/common/AdminFooter';

export default ({ children }) => {
  console.log('Admin view');

  return (
    <div>
      <AdminNav />
      {children}
      <AdminFooter />
    </div>
  );
};
