import React from "react";
import envelopeSrc from "../../images/envelope.svg";
import twitterLogoSrc from "../../images/twitter.svg";
import instagramLogoSrc from "../../images/instagram.svg";

let twitterHref = "https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fwww.braylor.com%2Fweb%2Ffollow-button&ref_src=twsrc%5Etfw&region=follow_link&screen_name=braylor_wedding&tw_p=followbutton";
let instagramHref = "https://instagram.com/braylor_wedding";

let styles = {
  h: {
    fontFamily: `"Dancing Script", sans serif`
  },
  emailButton: {
    backgroundImage: `url(${envelopeSrc})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto 14px",
    backgroundPositionX: 10,
    backgroundPositionY: 9,
    paddingLeft: 38,
    width: 219
  },
  twitterButton: {
    backgroundImage: `url(${twitterLogoSrc})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 20,
    backgroundPositionX: 10,
    backgroundPositionY: 8,
    paddingLeft: 38
  },
  instagramButton: {
    backgroundImage: `url(${instagramLogoSrc})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 20,
    backgroundPositionX: 10,
    backgroundPositionY: 6,
    paddingLeft: 38
  }
};

class StayUpdated extends React.Component {
  static displayName = "StayUpdated";

  render() {
    return (
      <div className="row stay-updated">
        <div className="col-xs-12">
          <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-block", textAlign: "left" }}>
            <ol>
              <li className="stay-updated-email">
                <h1 style={styles.h}>Email</h1>
                <form action="//motingo.us10.list-manage.com/subscribe/post?u=39481cfe45f0f339e076349d8&amp;id=1ac216e465" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="">
                  <div id="mc_embed_signup_scroll">
                    <div class="mc-field-group">
                      <input type="email" name="EMAIL" placeholder="email address"/>
                      <input type="submit" value="Subscribe to Mailing List" id="mc-embedded-subscribe" className="btn btn-primary" style={styles.emailButton}/>
                    </div>
                    <div id="mce-responses" class="clear">
                      <div class="response" id="mce-error-response" style={{ display: "none" }}></div>
                      <div class="response" id="mce-success-response" style={{ display: "none" }}></div>
                    </div>
                    <div style={{ position: "absolute", left: -5000 }}><input type="text" name="b_39481cfe45f0f339e076349d8_1ac216e465" tabindex="-1" value=""/></div>
                  </div>
                </form>
              </li>
              <li>
                <h1 style={styles.h}>Twitter</h1>
                <a href={twitterHref} target="_blank" className="btn btn-primary" style={styles.twitterButton}>
                  Follow @braylor_wedding
                </a>
              </li>
              <li>
                <h1 style={styles.h}>Instagram</h1>
                <a href={instagramHref} target="_blank" className="btn btn-primary" style={styles.instagramButton}>
                  Follow @braylor_wedding
                </a>
              </li>
            </ol>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StayUpdated;
