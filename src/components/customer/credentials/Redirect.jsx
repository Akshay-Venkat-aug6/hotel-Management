import React from 'react';
import { Link } from 'react-router-dom';

const Redirects = ({content, href}) => {
  return (
    <div className="register-link">
      <Link to={href}>{content}</Link>
    </div>
  )
};

export default Redirects