import React from "react";
export const AppContext = React.createContext();
class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleMicChange = () => {
    let m = window.localStorage.getItem("name");
    if (m.length > 0) {
      this.setState({
        email: m,
      });
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { handleChange, handleMicChange } = this;

    return (
      <AppContext.Provider
        value={{ email, password, handleChange, handleMicChange }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export default AppContextProvider;
