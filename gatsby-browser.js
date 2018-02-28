/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// netflify calls available, info from:
// https://github.com/netlify/netlify-identity-widget
//
// netlifyIdentity.open(); // open the modal
// netlifyIdentity.open("login"); // open the modal to the login tab
// netlifyIdentity.open("signup"); // open the modal to the signup tab
// netlifyIdentity.close();  // close the modal
// netlifyIdentity.logout();  // logout the user
//
// Access the underlying gotrue instance.
// Note that doing things directly through gotrue brings a risk of getting out of
// sync between your state and the widgets state.
// netlifyIdentity.gotrue;

const netlifyIdentity = require("netlify-identity-widget");

netlifyIdentity.init();
netlifyIdentity.on("init", user => console.log('init', user));
netlifyIdentity.on("login", login => console.log('login', user));
netlifyIdentity.on("logout", () => console.log("Logged out"));
netlifyIdentity.on("error", err => console.error("Logged out"));
netlifyIdentity.on("open", () => console.log("Widget opened"));
netlifyIdentity.on("close", () => console.log("Widget closed"));

exports.onClientEntry = () => {
  console.log("We've started, trying to open the login");
  // TODO: put something here to detect if we are logged in already, and if not, open the login page
  let user = netlifyIdentity.gotrue.currentUser();
  console.log('user is ', user);
  if (!user) {
    netlifyIdentity.open();
  }
};

exports.onInitialClientRender = () => {
  console.log("ReactDOM.render has executed");
};

exports.onRouteUpdate = ({ location }) => {
  console.log('new pathname', location.pathname);
};

// TODO: how do we deny access to any of the information if the user is not logged in?
// TODO: do we just show the landing page first, and then allow access to the pages within if they are logged in?
// TODO: how do we protect the paths to keep the user from going straight to the other pages?
// TODO: is it possible to replace or wrap the root component so that nothing really works until you are logged in?

// TODO: add a button/menu for logout
// TODO: make sure the dialog comes up whenever you are not logged in

// NOTE: as it turns out, this line of reasoning is flawed.  Even if we use Netlify to force the user
// NOTE: to log in here before teh React app will work, the information behind it is still publicly visible
// NOTE: using the GraphQL interface, just go to this URL:
// NOTE: http://localhost:8000/___graphql
// NOTE: and enter something like the following query.
// {
//   markdownRemark(frontmatter: { path: { eq: "/another-one" } }) {
//     html
//   }
// }
//
// NOTE: so I'm going to commit this work to record this much progress, but back it out on the next commit.
// NOTE: we'll need to use a server side form of Authentication (like that offered on the Netlify Business plan
// NOTE: that uses htaccess controls and redirects to control access to a static website according to roles
// NOTE: attained with the Netlify Identity widget)
