// Header.js
import "./Header.css"
import React from 'react';

const Header = () => {
  return (
    <div id="header-top" className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 header-top-left">
            <div className="header-top-links">
              <a className="icon-link fa-mobile-phone" href="tel:919820697944">
                <span className="call_us">Call Us:</span> +91-9820697944
              </a>
              <a className="icon-link fa-envelope-o" href="mailto:contact@vedicvaani.com">
                contact@vedicvaani.com
              </a>
            </div>
          </div>
          <div className="col-sm-12 header-top-right">
            <div className="header-top-right-inner f-right">
              <div className="switcher currency switcher-currency -style-02" id="switcher-currency6610983265817">
                <div className="actions dropdown options switcher-options">
                  <a href="#" className="action toggle switcher-trigger" id="switcher-currency-trigger6610983265817">
                    <span className="language-INR text"><span>INR - Indian Rupee</span></span>
                  </a>
                  <div
                    tabIndex="-1"
                    role="dialog"
                    className="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front mage-dropdown-dialog"
                    aria-describedby="ui-id-1"
                    style={{ display: 'none' }}
                  >
                    <ul
                      className="dropdown switcher-dropdown ui-dialog-content ui-widget-content"
                      id="ui-id-1"
                      style={{ display: 'block' }}
                    >
                      <li className="currency-AUD switcher-option">
                        <a href="#" data-post="{&quot;action&quot;:&quot;https:\/\/vedicvaani.com\/directory\/currency\/switch\/&quot;,&quot;data&quot;:{&quot;currency&quot;:&quot;AUD&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly92ZWRpY3ZhYW5pLmNvbS8~&quot;}}">
                          AUD - Australian Dollar
                        </a>
                      </li>
                      {/* Add other currency options as needed */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="store-info-top">
                <div className="social-wrap">
                  <a className="spin circle" href="https://www.facebook.com/VedicVaani/" aria-label="facebook" rel="nofollow">
                    <span className="fa fa-facebook"></span>
                  </a>
                  <a href="https://twitter.com/vedicvaani/" aria-label="twitter" rel="nofollow">
                    <span className="fa fa-twitter"></span>
                  </a>
                  {/* Add other social media links as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
