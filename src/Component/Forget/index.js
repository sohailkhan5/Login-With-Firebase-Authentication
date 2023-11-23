import { sendPasswordResetEmail } from "firebase/auth";
import { authentication } from "../Firebase_Config";
import "./index.css";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleResetPassword = () => {
    authentication();
    sendPasswordResetEmail(email)
      .then(() => {
        // Password reset email sent successfully
        console.log("Password reset email sent.");
      })
      .catch((error) => {
        // Handle errors (e.g., invalid email, user not found)
        console.error("Error sending password reset email:", error);
      });
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default ForgotPassword;
