import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import './index.css'
import '../styles/layout-override.css'

// import netlifyIdentity from "netlify-identity-widget";

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);

    // re-render whenever the user logs in or out to control content
    /*
    netlifyIdentity.on("login", () => {
      this.forceUpdate();
    });
    netlifyIdentity.on("logout", () => {
      this.forceUpdate();
    });
    */
  }

  render() {
    // let user = netlifyIdentity.gotrue.currentUser();
    // if (!user) {
    let hideContent = false;

    /*
    console.log('checking for hideContent');
    if (netlifyIdentity && netlifyIdentity.gotrue) {
      console.log('setting hideContent');
      hideContent = !netlifyIdentity.gotrue.currentUser()
      console.log('hideContent set to ' + hideContent);
    }
    console.log('resulting hideContent ' + hideContent);
    */

    if (hideContent) {
      return (
        <div>
          <Helmet
            title="Cloudwan API Documentation"
            meta={[
              {name: "description", content: "Descriptions of API for documentation of CLOUDWAN"},
              {name: "keywords", content: "documentation, api"}
            ]}>
          </Helmet>
          <Header/>
          <div
            style={{
              margin: "0 auto",
              maxWidth: 980,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "100%"
            }}
          >
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          <Helmet
            title="Cloudwan API Documentation"
            meta={[
              {name: "description", content: "Descriptions of API for documentation of CLOUDWAN"},
              {name: "keywords", content: "documentation, api"}
            ]}>
          </Helmet>
          <Header/>
          <div
            style={{
              margin: "0 auto",
              maxWidth: 980,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "100%"
            }}
          >
            <Media query={{maxWidth: 848}}>
              {matches =>
                matches ? (
                  <div
                    style={{
                      margin: "0 auto",
                      maxWidth: 980,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      height: "100%",
                      padding: "25px"
                    }}
                  >
                    <div style={{flex: 1}}>{this.props.children()}</div>
                  </div>
                ) : (
                  <div
                    style={{
                      margin: "0 auto",
                      maxWidth: 980,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      height: "100%",
                      padding: "25px"
                    }}
                  >
                    <div style={{flex: 2.5, paddingRight: "30px"}}>
                      {this.props.children()}
                    </div>

                    <div style={{flex: 1}}>
                      <Sidebar
                        title="Cloudwan"
                        description="Party at the Edge."
                      />
                      <Sidebar
                        title="About Cloudwan"
                        description="Plenty of features, ready for anything."
                      />
                    </div>
                  </div>
                )
              }
            </Media>
          </div>
        </div>
      )
    }
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
