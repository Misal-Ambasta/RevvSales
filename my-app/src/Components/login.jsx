import React from "react";
import { Component } from "react";
import axios from "axios";
import DocumentTemp from "../Components/DocumentTemp";
import { AppContext } from "../Context/AuthContext";
import Dictaphone from "../Components/speech";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: "",
      TempData: [],
      org_domain: "ft890220",
    };
  }

  handleAllDocs = () => {
    const { data } = this.state;
    let token = data[0].data.User.access_token;
    console.log(token);
    axios(
      "https://cors-anywhere.herokuapp.com/https://api.revvsales.com/api/docstemplate/?page_num=1&status=ACTIVE",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          AccessToken: token,
        },
      }
    )
      .then((res) => {
        this.setState({
          TempData: [res],
        });
      })
      .catch((error) => {
        this.setState({
          error: "Invalid Email or Password",
        });
      });
  };
  handleLogin = (e) => {
    console.log(this.context.email, this.context.password);
    axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
        GrantType: "password",
      },

      url:
        "https://cors-anywhere.herokuapp.com/https://api.revvsales.com/api/v2/auth/initiate-auth",
      data: {
        user_email: this.context.email,
        password: this.context.password,
        org_domain: this.state.org_domain,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.User.access_token.length > 0) {
          this.setState({
            data: [res],
          });
        }
      })

      .catch((error) => {
        this.setState({
          error: "Invalid Email or Password",
        });
      });
    //console.log(this.state.data,this.state.data.length)
  };
  handleRecord = () => {};
  handleTemp = () => {
    window.open("https://ft890220.revvsales.com/templates/library");
  };
  render() {
    const { data, TempData } = this.state;
    const { email, password, handleChange, handleMicChange } = this.context;

    return (
      <>
        {this.state.data.length === 0 ? (
          <div className="backgroundImage">
            <div>
              <h1 className="logo">
                <img
                  className="logo-icon"
                  src="Revvsales_logo.png"
                  style={{ width: "20%", height: "35px" }}
                />
              </h1>
            </div>
            <div>
              <form>
                <div className="emailBox">
                  <label className="emailInput">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="form-control"
                    id="inputEmail3"
                    placeholder="Enter the email"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2"></span>
                    <div className="mic">
                      {/* <img
                        src="https://www.flaticon.com/svg/static/icons/svg/2983/2983820.svg"
                        style={{
                          marginLeft: "0px",
                          width: "20px",
                          height: "20px",
                        }} */}
                      <Dictaphone />
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <label class="col-sm-2 col-form-label col-form-label-sm">
                    Password:
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Enter the password"
                  />
                </div>

                <button
                  type="button"
                  onClick={this.handleLogin}
                  className="login"
                >
                  Login
                </button>
              </form>
              <div style={{ marginTop: "20px", color: "red" }}>
                {this.state.error}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div style={{ padding: "20px" }}>
              <div style={{ display: "flex", marginLeft: "15%" }}>
                {/* Avatar image */}
                <div>
                  <img
                    src={data[0].data.User.image_url}
                    className="avatarImg "
                    alt={data[0].data.User.first_name}
                  />
                </div>
                <div>
                  <h4>{data[0].data.User.first_name.toUpperCase()}</h4>
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                <p>
                  <button className="createBtn" onClick={this.handleAllDocs}>
                    {" "}
                    Create Document
                  </button>
                  <button className="createBtn" onClick={this.handleTemp}>
                    Create Template
                  </button>
                </p>
                <div>
                  <div>
                    <DocumentTemp
                      TempData={TempData}
                      data={this.state.data}
                      org_domain={this.state.org_domain}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
Login.contextType = AppContext;
