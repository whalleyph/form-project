import React from "react";
import "./App.css";
import GenerateStory from "./GenerateStory";

function App() {
  const [formData, setFormData] = React.useState({
    heroName: "",
    age: "",
    superpower: "",
    antagonistName: "",
    antagonistSuperpower: "",
  });
  const [lastSubmission, setLastSubmission] = React.useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newLastSubmission = { ...formData };
    setLastSubmission(newLastSubmission);
  }

  return (
    <>
      <h1>Create a Story</h1>
      <form className="form--inputs" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Hero Name"
          className="form--input"
          name="heroName"
          value={formData.heroName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Hero Age"
          className="form--input"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Hero Superpower"
          className="form--input"
          name="superpower"
          value={formData.superpower}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Antagonist Name"
          className="form--input"
          name="antagonistName"
          value={formData.antagonistName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Antagonist Superpower"
          className="form--input"
          name="antagonistSuperpower"
          value={formData.antagonistSuperpower}
          onChange={handleChange}
        />
        <br />
        <button>Generate Story</button>
      </form>
      {lastSubmission && (
        <GenerateStory
          heroName={lastSubmission.heroName}
          age={lastSubmission.age}
          superpower={lastSubmission.superpower}
          antagonistName={lastSubmission.antagonistName}
          antagonistSuperpower={lastSubmission.antagonistSuperpower}
        />
      )}
    </>
  );
}

export default App;
