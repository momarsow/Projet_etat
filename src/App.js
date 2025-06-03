// src/App.js

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Ada Lovelace",
        bio: "Pionnière de la programmation informatique au 19ème siècle.",
        imgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/440px-Ada_Lovelace_portrait.jpg",
        profession: "Mathématicienne & Informaticienne",
      },
      show: false,
      timeElapsed: 0,
    };
    this.intervalId = null;
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { person, show, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Profil en Classe React</h1>
        <button onClick={this.toggleShow}>
          {show ? "Cacher le profil" : "Afficher le profil"}
        </button>

        {show && (
          <div className="profile-card">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>
              <strong>Profession :</strong> {person.profession}
            </p>
            <p>
              <em>{person.bio}</em>
            </p>
          </div>
        )}

        <p style={{ marginTop: "1rem" }}>
          Temps écoulé depuis le montage : {timeElapsed} secondes
        </p>
      </div>
    );
  }
}

export default App;
