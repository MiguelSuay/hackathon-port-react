import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import React, { useCallback } from "react";
import {
  Notification,
  PasswordInput,
  required,
  TextInput,
  useLogin,
  useRedirect,
} from "react-admin";
import { useDispatch } from "react-redux";
import { useStyles } from "./styles";
import { useLocation } from "react-router-dom";
import authProvider from "../../config/authProvider";

import { Form } from "react-final-form";

const LoginPage = (props) => {
  const classes = useStyles();
  const login = useLogin();
  const location = useLocation();
  console.log("dani props", props);

  const handleFormSubmit = () => {
    console.log("dani handleFormSubmit");
    login({}, location.state ? location.state.nextPathname : "/").catch(() => {
      console.log("Error");
    });
    //   authProvider.login().then(()=>{
    //     console.log("dani ok")
    //   })
  };
  console.log(login);

  return (
    <div className={classes.mainContainer}>
      {/* <img className={classNames(classes.logo, { [classes.displayNone]: isLoading })} src="/img/logos/LaLiga-negro.svg" alt="logo" /> */}
      <Card className={classes.card}>
        <CardHeader title="Log In" />
        <CardContent>
          <Form onSubmit={handleFormSubmit}>
            {({ handleSubmit, form, values }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <TextInput
                    source="username"
                    label="User"
                    validate={[required()]}
                    variant="standard"
                    fullWidth
                  />
                  <PasswordInput
                    source="password"
                    label="Password"
                    validate={required()}
                    fullWidth
                    variant="standard"
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    fullWidth
                  >
                    Login
                  </Button>
                </form>
              );
            }}
          </Form>
        </CardContent>
      </Card>
      <Notification />
    </div>
  );
};

export default LoginPage;
