import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  Snackbar,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../Firebase_Config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ShowAlert, setShowAlert] = useState(null);

  const handleSubmit = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setShowAlert(true);
        console.log("🚀 ~ user:", user);
        // ...
        setEmail("");
        setPassword("");
      })

      .catch((error) => {
        setShowAlert(false);
        // const errorCode = error.code;
        const errorMessage = error.message;

        console.log("🚀 ~ errorMessage:", errorMessage);
        // ..
      });
  };

  return (
    <div className="LoginPage">
      <div className="LoginCard">
        <div className="LoginContent">
          <div className="header">
            <h1>Welcome to Crypto App</h1>
            <p>Enter your credentials to access the account.</p>
          </div>
          <div className="LoginField">
            <TextField
              label="Email"
              sx={{
                width: "100%",
                "& .MuiInputBase-root": {
                  height: "60px",
                },
              }}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              type="password"
              label="Password"
              sx={{
                width: "100%",
                "& .MuiInputBase-root": {
                  height: "60px",
                },
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="checkBox">
              <FormControlLabel
                control={<Checkbox defaultChecked={false} />}
                label="Remember Me"
              />
              <Link to={"/ForgotPassword"}>
                <span>Forget Password?</span>
              </Link>
            </div>
            <div className="btns">
              <Button variant="contained" onClick={handleSubmit}>
                Log In
              </Button>
              <Link to={"/SignUp"}>
                {" "}
                <Button id="CreateNewAccountBtn" variant="contained">
                  Create New Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {ShowAlert ? (
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={ShowAlert}
          >
            <Alert severity="success">Successfully Signed In!!</Alert>
          </Snackbar>
        ) : (
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={ShowAlert}
          >
            <Alert severity="success">Successfully Signed In!!</Alert>
          </Snackbar>
        )}
      </div>
    </div>
  );
};

export default Login;
