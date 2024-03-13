import React from "react";
import { TextField, Button } from "@mui/material";
import "../Account/Account.css";
import vector from "../../assets/Vectorqt.png";
import backbtn from "../../assets/Backbtn.png";
import logo from "../../assets/LOGO.png";
import or from "../../assets/orline.png";
import icon from "../../assets/Googleicon.png";
const Account = () => {
  return (
    <>
      <div className="qt-account">
        <img src={vector} />
        <div className="qt-btn">
          <img src={backbtn} />
        </div>

        <img src={logo} className="logo" />

        <div className="para">
          <p>
            If you already have an account register You can{" "}
            <span>Login here !</span>
          </p>
        </div>
        <div className="create-act">
          <p>Create an account</p>
        </div>
        <div className="qt-form">
          <TextField
            label="Email address"
            style={{
              width: "449px",
              height: "56px",
              top: "249px",
              left: "889px",
              position: "fixed",
              border: "1px",

              backgroundColor: "rgba(255, 255, 255, 1)",
              marginTop: "20px",
            }}
          />

          <Button
            variant="contained"
            style={{
              backgroundColor: "rgba(30, 10, 60, 1)",
              width: "449px",
              height: "56px",
              border: "8px",
              position: "fixed",
              textTransform: "capitalize",
              top: "329px",
              left: "889px",
              marginTop: "24px",
            }}
          >
            <p
              style={{
                fontFamily: "Open Sans",
                fontSize: " 20px",
                fontWeight: "600",
                lineHeight: "27px",
                letteSpacing: " 0em",
                textAlign: "center",
              }}
            >
              Continue
            </p>
          </Button>
          <div className="qt-line">
            <img src={or} className="orline" />
          </div>
          <div className="signin">
            <Button>
              <img src={icon} />
              <div className="signin-txt">
                <p>Sign in with Google</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
