import React from 'react';

export default function(Component) {
  return class withAuth extends React.Component {
    alertMessage() {
      alert('Some mesdsg');
    }
    render() {
      const mySecret = '12345';

      return <Component secret={mySecret} alertMessage={this.alertMessage} />;
    }
  };
}
