/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import netlifyIdentity from 'netlify-identity-widget'

exports.onClientEntry = () => {
  // netlify calls available, info from:
  // https://github.com/netlify/netlify-identity-widget
  netlifyIdentity.init();
  netlifyIdentity.on('login', login => console.log('Logged in', login));
  netlifyIdentity.on('logout', () => console.log('Logged out'));
  netlifyIdentity.on('error', err => console.error('Error', err));
  netlifyIdentity.on('open', () => console.log('Netlify Widget opened'));
  netlifyIdentity.on('close', () => console.log('Netlify Widget closed'));

  // detect if we are logged in already, and if not, open the login page
  let user = netlifyIdentity.gotrue.currentUser();
  console.log('user is ', user);
  if (!user) {
    netlifyIdentity.open();
  }
};

exports.onInitialClientRender = () => {
  // console.log('ReactDOM.render has executed');
};

exports.onRouteUpdate = ({ location }) => {
  // console.log('new pathname', location.pathname);
};
