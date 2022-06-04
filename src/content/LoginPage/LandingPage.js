import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  receiveDataUsername,
  receiveDataEmail,
  receiveDataProfile,
  receiveDataName,
  receiveDataRole,
} from "../../actions/profileActions";
import { recieveAccessToken } from "../../actions/tokenActions";

import "./_landing-page.scss";

const usernameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 1 };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 1 };
  }
  return { value: "", isValid: true };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 1 };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 1 };
  }
  return { value: "", isValid: true };
};

const queryString = require("query-string");

const LoginPage = ({ receiveProfile, receiveToken }) => {
  const base_uri = process.env.REACT_APP_BASE_URI;
  const path_oauth = process.env.REACT_APP_URI_PATH_OAUTH;
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const client_secret = process.env.REACT_APP_CLIENT_SECRET;

  const [formIsValid, setFormIsValid] = useState(false);

  const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
    value: "",
    isValid: true,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: true,
  });

  //destructuring syntax;
  const { isValid: usernameIsValid } = usernameState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(usernameIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [usernameIsValid, passwordIsValid]);

  const usernameChangeHandler = (event) => {
    dispatchUsername({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateUsernameHandler = () => {
    dispatchUsername({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (formIsValid) {
      await axios
        .post(
          base_uri + path_oauth + "oauth/token",
          queryString.stringify({
            username: usernameState.value,
            password: passwordState.value,
            grant_type: "password",
          }),
          {
            timeout: 2 * 6 * 1000,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            auth: {
              username: client_id,
              password: client_secret,
            },
          }
        )
        .then((response) => {
          const dataProfile = jwtDecode(response.data.access_token);
          const username = dataProfile["user_name"];
          const name = dataProfile["nombre"] + dataProfile["apellido"];
          const email = dataProfile["email"];
          const profile = dataProfile["profile_1"];
          const role = dataProfile["authorities"][0];
          receiveProfile(username, name, email, profile, role);
          receiveToken(response.data.access_token);
          return <Navigate to="/home" replace />;
        })
        .catch((err) => {
          // console.log('error', { ...err });
          alert(err);
        });
    }
  };

  return (
    <>
      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Iniciar sesión</div>

            <div className="card-body">
              <form onSubmit={submitHandler}>
                <div className="form-group row">
                  <label
                    htmlFor="email"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Username
                  </label>

                  <div className="col-md-6">
                    <input
                      id="email"
                      type="text"
                      className="form-control"
                      name="email"
                      value={usernameState.value}
                      onChange={usernameChangeHandler}
                      onBlur={validateUsernameHandler}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="password"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Contraseña
                  </label>

                  <div className="col-md-6">
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      value={passwordState.value}
                      onChange={passwordChangeHandler}
                      onBlur={validatePasswordHandler}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-6 offset-md-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                        id="remember"
                      />

                      <label className="form-check-label" htmlFor="remember">
                        Recordar credenciales
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group row mb-0">
                  <div className="col-md-8 offset-md-4">
                    <button type="submit" className="btn btn-primary">
                      Iniciar sesión
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  receiveProfile: (username, name, email, profile, role) => {
    dispatch(receiveDataUsername(username));
    dispatch(receiveDataName(name));
    dispatch(receiveDataEmail(email));
    dispatch(receiveDataProfile(profile));
    dispatch(receiveDataRole(role));
  },
  receiveToken: (accessToken) => dispatch(recieveAccessToken(accessToken)),
});

export default connect(mapStateProps, mapDispatchToProps)(LoginPage);
