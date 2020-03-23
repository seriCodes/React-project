// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const WrappedComponentArgument = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.someProp}</p>
  </div>
);

const withAdminWarning = (WrappedComponentParameter) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponentParameter {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
          <p>Please login to view the info</p>
        )}
    </div>
  );
};

const AdminInfo = withAdminWarning(WrappedComponentArgument);
// const AuthInfo = requireAuthentication(notExsistingComponent);

ReactDOM.render(<AdminInfo isAdmin={true} someProp="There are the details" />, document.getElementById('app'));
// ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'));
