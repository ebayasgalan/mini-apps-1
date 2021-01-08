import React from 'react';

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <form method="post" action="/">
          <label htmlFor="username">
            Name:
          <input id="username" type='text' name="name" required></input>
          </label>
          <label htmlFor="email">
            Email:
          <input id="email" type='email' name="email" required></input>
          </label>
          <label htmlFor="pass">
            Password:
          <input id="pass" type='password' name="password" required></input>
          </label>
          <input type='submit' value="Submit"></input>
        </form>
      </div>
    )
  }
}

export default Form1;