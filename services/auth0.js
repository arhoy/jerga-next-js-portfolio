import auth0 from 'auth0-js';

class Auth0 {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'dev-jbd8z86v.auth0.com',
      clientID: 'L3bX4QP8L8nea503SpcAZERBjebm27PM',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });
    this.login = this.login.bind(this);
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accesToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        console.error('Unable to verify login', err);
      }
    });
  }
  setSession() {
    //save tokens
  }
  login() {
    this.auth0.authorize();
  }
}

const auth0Client = new Auth0();

export default auth0Client;
