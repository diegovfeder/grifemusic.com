import React from 'react';
import styled from 'styled-components';
import jsonp from 'jsonp';
import { useFormik } from 'formik';
import { CircularProgress, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SkyLightStateless } from 'react-skylight';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const CustomModalComponent = ({ props, windowWidth }) => {
  const [modal, toggleModal] = React.useState(props.modal);
  const [status, setStatus] = React.useState();

  function sendData(url) {
    setStatus('sending');
    jsonp(url, { param: 'c' }, (err, data) => {
      if (data.msg.includes('already subscribed')) {
        setStatus('duplicate');
      } else if (err) {
        setStatus('error');
      } else if (data.result !== 'success') {
        setStatus('error');
      } else {
        setStatus('success');
        setTimeout(() => {
          toggleModal(false);
        }, 800);
      }
    });
  }

  // Mailchimp endpoint
  const action =
    'https://facebook.us18.list-manage.com/subscribe/post?u=aa790382b14a1499621685a2e&amp;id=f5eaf15868';

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      const email = `EMAIL=${encodeURIComponent(values.email)}`;
      const path = `${action}&${email}`;
      const url = path.replace('/post?', '/post-json?');
      sendData(url);
    },
  });

  const useStyles = makeStyles((theme) => ({
    modal: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      // borderRadius: "24px",
    },
  }));

  const formStyle = {
    border: '1px solid #8c1b05',
    sizing: 'border-box',
    overflow: 'visible',
    padding: '1rem',
    marginTop: '1rem',
  };

  const skyLightStyleBig = {
    backgroundColor: '#7d0017',
    color: '#ffffff',
    width: windowWidth * 0.5,
    marginLeft: (-windowWidth * 0.5) / 2,
  };

  const skyLightStyleSmall = {
    backgroundColor: '#7d0017',
    color: '#ffffff',
    width: windowWidth * 0.8,
    marginLeft: (-windowWidth * 0.88) / 2,
  };

  const classes = useStyles();

  return (
    <SkyLightStateless
      isVisible={modal}
      onCloseClicked={() => {
        toggleModal(false);
      }}
      className={classes.modal}
      title="PROMO LIST"
      dialogStyles={
        props.windowWidth >= 650 ? skyLightStyleBig : skyLightStyleSmall
      }
    >
      <Grid container justify="space-evenly" alignItems="center">
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
        <div style={{ margin: '6px' }}>
          {status === 'sending' && <CircularProgress color="white" />}
          {status === 'success' && <p>{'Thank you for subscribing!'}</p>}
          {status === 'duplicate' && (
            <p>
              {'Thanks, but this email is already subscribed to our list...'}
            </p>
          )}
          {status === 'empty' && <p>{'You must write an e-mail'}</p>}
          {status === 'error' && (
            <p>{'An unexpected internal error has occurred.'}</p>
          )}
        </div>
      </Grid>
    </SkyLightStateless>
  );
};

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
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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

export default CustomModalComponent;
