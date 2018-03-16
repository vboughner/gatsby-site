import React from 'react'
import Link from 'gatsby-link'
import netlifyIdentity from "netlify-identity-widget";

class Header extends React.Component {

  handleLogInOut = (e) => {
    e.preventDefault();
    netlifyIdentity.open();
  };

  render() {
    return (
      <div
        style={{
          background: '#f5f5f5',
          marginBottom: '3rem',
          borderBottom: '2px solid #e6e6e6',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 980,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{margin: 0, textAlign: 'center', fontSize: '18px'}}>
            <Link to="/"
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                  }}
            >
              Cloudwan
            </Link>
          </h1>
          <a href="#" onClick={this.handleLogInOut}>Login/Logout</a>
        </div>
      </div>
    );
  }
}

export default Header
