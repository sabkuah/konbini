import React from 'react';
import Header from '../../components/Header';
import PublicFooter from '../../components/common/PublicFooter';
import PublicNav from '../../components/common/PublicNav';

export default ({ children }) => {
  console.log('public view');

  return (
    <div>
      <PublicNav />
      <Header />
      {children}
      <PublicFooter />
    </div>
  );
};
