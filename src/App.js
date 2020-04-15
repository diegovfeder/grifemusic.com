import React from "react";
import logo from "./images/logo-lettering.png";
import "./App.css";

// Material UI
import { Grid } from "@material-ui/core/";
import { CircularProgress } from "@material-ui/core";

import desktopImage from "./images/bgs/grain-desktop-1.png";
import mobileImage from "./images/bgs/grain-mobile.png";

import { Icon } from "@iconify/react";
import instagramIcon from "@iconify/icons-simple-icons/instagram";
import facebookIcon from "@iconify/icons-simple-icons/facebook";
import beatportIcon from "@iconify/icons-simple-icons/beatport";
import soundcloudIcon from "@iconify/icons-simple-icons/soundcloud";
import spotifyIcon from "@iconify/icons-simple-icons/spotify";

import { useFormik } from "formik";
import { SkyLightStateless } from "react-skylight";
import YouTube from "react-youtube";
import styled from "styled-components";
import jsonp from "jsonp";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

export default function App() {
  const [status, setStatus] = React.useState();
  const [modal, toggleModal] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const backgroundImageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

  function sendData(url) {
    setStatus("sending");
    jsonp(url, { param: "c" }, (err, data) => {
      console.log(status);
      if (data.msg.includes("already subscribed")) {
        setStatus("duplicate");
      } else if (err) {
        setStatus("error");
      } else if (data.result !== "success") {
        setStatus("error");
      } else {
        setStatus("success");
        setTimeout(() => {
          toggleModal(false);
        }, 800);
      }
    });
  }
  const action =
    "https://facebook.us18.list-manage.com/subscribe/post?u=aa790382b14a1499621685a2e&amp;id=f5eaf15868";
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validate,
    onSubmit: values => {
      const email = `EMAIL=${encodeURIComponent(values.email)}`;
      const path = `${action}&${email}`;
      const url = path.replace("/post?", "/post-json?");
      sendData(url);
    }
  });

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    setTimeout(() => {
      toggleModal(true);
    }, 2200);

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleInstagramClick = e => {
    e.preventDefault();
    window.open("https://www.instagram.com/grifemusic/");
  };
  const handleFacebookClick = e => {
    e.preventDefault();
    window.open("https://www.facebook.com/grifemusic/");
  };
  const handleBeatportClick = e => {
    e.preventDefault();
    window.open("https://www.beatport.com/artist/grife/465785");
  };
  const handleSoundcloudClick = e => {
    e.preventDefault();
    window.open("https://soundcloud.com/grifemusic");
  };
  const handleSpotifyClick = e => {
    e.preventDefault();
    window.open("https://open.spotify.com/artist/0peVkBhumiuUyxMqc9EGUR");
  };

  // TODO:
  const handleDownloadButtonClick = e => {
    e.preventDefault();
    window.open("https://www.beatport.com/release/all-will-be-lost/2849367");
  };

  const opts =
    windowWidth >= 650
      ? {
          height: "360",
          width: "640"
        }
      : {
          height: "180",
          width: "320"
        };

  const _onReady = event => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const StyledIcon = styled.div`
    :hover {
      cursor: pointer;
    }
  `;
  // TODO: Hover Shadow Action
  const StyledButton = styled.button`
    -moz-box-flex: 0;
    background-color: #7d0017;
    border: 1px solid #8c1b05;
    border-image: none 100% 1 0 stretch;
    border-radius: 0 2px 2px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    flex: 0 1 auto;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2;
    margin: 0.5rem 1rem 0.5rem 1rem;
    padding: 1rem 2rem 0.8rem;
    position: relative;
    text-align: center;
    text-decoration: none currentcolor solid;
    text-decoration-thickness: auto;
    text-transform: uppercase;
    touch-action: manipulation;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    :hover {
      background-color: #600011;
      border-color: #5b1203;
      z-index: 2;
    }
  `;
  const StyledSubmitButton = styled.button`
    -moz-appearance: button;
    background-color: #fff;
    border: 1px solid #8c1b05;
    border-image: none 100% 1 0 stretch;
    border-radius: 2px;
    box-sizing: border-box;
    color: #8c1b05;
    cursor: pointer;
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.5;
    margin: 1rem;
    overflow: visible;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    text-align: center;
    text-transform: uppercase;
    touch-action: manipulation;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    :hover {
      background-color: #f0e1e4;
      border-color: #5b1203;
      color: #7c1400;
      text-decoration: none currentcolor solid;
      text-decoration-thickness: auto;
    }
  `;

  const formStyle = {
    border: "1px solid #8c1b05",
    sizing: "border-box",
    overflow: "visible",
    padding: "1rem",
    marginTop: "1rem"
  };

  const skyLightStyleBig = {
    backgroundColor: "#7d0017",
    color: "#ffffff",
    width: windowWidth * 0.5,
    marginLeft: (-windowWidth * 0.5) / 2
  };

  const skyLightStyleSmall = {
    backgroundColor: "#7d0017",
    color: "#ffffff",
    width: windowWidth * 0.8,
    marginLeft: (-windowWidth * 0.88) / 2
  };

  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${backgroundImageUrl})`, height: "100%" }}
    >
      <div className="App-content">
        <header className="App-header">
          {/* Responsive Image */}
          <img
            src={logo}
            style={{
              marginTop: 50,
              width: windowWidth >= 650 ? "25%" : "50%",
              height: windowWidth >= 650 ? "25%" : "50%"
            }}
            alt="logo"
          />
          <Grid direction="row">
            <h1>LAST RELEASE: ALL WILL BE LOST</h1>
          </Grid>

          <YouTube videoId="SLV0sCkcKOg" opts={opts} onReady={_onReady} />

          <StyledButton onClick={handleDownloadButtonClick}>
            DOWNLOAD NOW!
          </StyledButton>

          <SkyLightStateless
            isVisible={modal}
            onCloseClicked={() => {
              toggleModal(false);
            }}
            title="PROMO LIST"
            dialogStyles={
              windowWidth >= 650 ? skyLightStyleBig : skyLightStyleSmall
            }
          >
            <Grid
              container
              direction="column"
              justify="space-evenly"
              alignItems="center"
            >
              Leave us your e-mail :)
              <form onSubmit={formik.handleSubmit}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  style={formStyle}
                />
                <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
              </form>
              <div style={{ margin: "6px" }}>
                {status === "sending" && <CircularProgress color="white" />}
                {status === "success" && <p>{"Thank you for subscribing!"}</p>}
                {status === "duplicate" && (
                  <p>
                    {
                      "Thanks, but this email is already subscribed to our list..."
                    }
                  </p>
                )}
                {status === "empty" && <p>{"You must write an e-mail"}</p>}
                {status === "error" && (
                  <p>{"An unexpected internal error has occurred."}</p>
                )}
              </div>
            </Grid>
          </SkyLightStateless>

          {/* TODO: Return this as a full component */}
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            style={{ margin: 32, bottom: "20%" }}
          >
            <Grid item>
              <StyledIcon>
                <Icon
                  onClick={handleInstagramClick}
                  height={24}
                  icon={instagramIcon}
                />
              </StyledIcon>
            </Grid>
            <Grid item>
              <StyledIcon>
                <Icon
                  onClick={handleFacebookClick}
                  height={24}
                  icon={facebookIcon}
                />
              </StyledIcon>
            </Grid>
            <Grid item>
              <StyledIcon>
                <Icon
                  onClick={handleBeatportClick}
                  height={28}
                  icon={beatportIcon}
                />
              </StyledIcon>
            </Grid>
            <Grid item>
              <StyledIcon>
                <Icon
                  onClick={handleSoundcloudClick}
                  height={38}
                  icon={soundcloudIcon}
                />
              </StyledIcon>
            </Grid>
            <Grid item>
              <StyledIcon>
                <Icon
                  onClick={handleSpotifyClick}
                  height={24}
                  icon={spotifyIcon}
                />
              </StyledIcon>
            </Grid>
          </Grid>
        </header>
      </div>
    </div>
  );
}
