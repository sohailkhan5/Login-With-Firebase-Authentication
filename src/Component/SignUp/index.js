import React, { useState } from "react";
import "./index.css";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../Firebase_Config";

const SignUp = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Repeat_Password, setRepeat_Password] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const email = Email;
    const password = Password;

    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log("🚀 ~ user:", user);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log("🚀 ~ errorMessage:", errorMessage);
        // ..
      });
  };

  return (
    <div className="SignUpPage">
      <div className="SignUpCard">
        <div className="SignUpContent">
          <div className="header">
            <h1>Welcome to Crypto App</h1>
            <p>Create a free account by filling data below.</p>
          </div>

          <div className="Fields">
            <div className="NameSureName">
              <TextField
                label="Name"
                sx={{
                  width: "100%",
                  "& .MuiInputBase-root": {
                    height: "60px",
                  },
                }}
                type="name"
                required
              />
              <TextField
                label="SureName"
                sx={{
                  width: "100%",
                  "& .MuiInputBase-root": {
                    height: "60px",
                  },
                }}
                type="name"
                required
              />
            </div>
            <div className="FullField">
              <TextField
                label="Email"
                sx={{
                  width: "100%",
                  "& .MuiInputBase-root": {
                    height: "60px",
                  },
                }}
                type="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                label="Password"
                sx={{
                  width: "100%",
                  "& .MuiInputBase-root": {
                    height: "60px",
                  },
                }}
                type="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <TextField
                label="Repeat Password"
                type="password"
                sx={{
                  width: "100%",
                  "& .MuiInputBase-root": {
                    height: "60px",
                  },
                }}
                value={Repeat_Password}
                onChange={(e) => setRepeat_Password(e.target.value)}
                required
              />
              {Repeat_Password && Password !== Repeat_Password && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  Password didn't matched
                </p>
              )}
              <FormControlLabel
                control={<Checkbox defaultChecked={false} />}
                label="I agree with Terms & Conditions."
                required
              />
              <Button
                type="submit"
                disabled={
                  Repeat_Password && Password !== Repeat_Password ? true : false
                }
                onClick={handleSubmit}
              >
                Create Account
              </Button>
              <p>
                Already have an account?<Link to={"/"}>Log In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
