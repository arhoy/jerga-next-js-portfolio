import React from 'react';
import BasicPage from '../layout/BasicPage';

export default function(Component) {
  return class withAuth extends React.Component {
    static async getInitialProps(args) {
      const pageProps =
        (await Component.getInitialProps) && Component.getInitialProps(args);

      return { ...pageProps };
    }
    renderProtectedPage() {
      const { isAuthenticated } = this.props.auth;
      if (isAuthenticated) {
        return <Component {...this.props} />;
      } else {
        return (
          <BasicPage {...this.props.auth}>
            <h1>You are not authenticated, please Login to access this page</h1>
          </BasicPage>
        );
      }
    }
    render() {
      return this.renderProtectedPage();
    }
  };
}
