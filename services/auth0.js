import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

class Auth0 {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'dev-jbd8z86v.auth0.com',
      clientID: 'L3bX4QP8L8nea503SpcAZERBjebm27PM',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });
    // bind the methods below to the constructor
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
          console.error('Unable to verify login', err);
        }
      });
    });
  }
  setSession(authResult) {
    //save tokens
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    // localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // set Cookie to store user info for login and custom pages
    Cookies.set('user', authResult.idTokenPayload);
    Cookies.set('jwt', authResult.idToken);
    Cookies.set('expiresAt', expiresAt);
  }
  login() {
    this.auth0.authorize();
  }

  logout() {
    Cookies.remove('user');
    Cookies.remove('jwt');
    Cookies.remove('expiresAt');

    // logging out
    this.auth0.logout({
      returnTo: '',
      clientID: 'L3bX4QP8L8nea503SpcAZERBjebm27PM'
    });
  }

  isAuthenticated() {
    const expiresAt = Cookies.getJSON('expiresAt');
    return new Date().getTime() < expiresAt;
  }

  clientAuth() {
    const token = Cookies.getJSON('jwt');
    const verifiedToken = this.verifyToken(token);
    return verifiedToken;
  }

  serverAuth(req) {
    if (req.headers.cookie) {
      const tokenCookie = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('jwt='));

      if (!tokenCookie) return undefined;

      const token = tokenCookie.split('=')[1];
      const verifiedToken = this.verifyToken(token);
      return verifiedToken;
    }
    return undefined;
  }

  verifyToken(token) {
    if (token) {
      const decodedToken = jwt.decode(token);
      const expiresAt = decodedToken.exp * 1000;
      return decodedToken && new Date().getTime() < expiresAt
        ? decodedToken
        : undefined;
    }
  }
}

const auth0Client = new Auth0();

export default auth0Client;
