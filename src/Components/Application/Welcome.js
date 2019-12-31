import React from "react";

class Welcome extends React.Component {
  

  render() {
    return (
      <div className='welcome'>
        <h1>Witaj,</h1>
        <h2>wygląda na to, że jesteś tutaj pierwszy raz!</h2>
        <form onSubmit={this.props.takeName}>
          <input type='text' ref={this.input}  />
          <br />
          <button type='submit'>Gotowe!</button>
        </form>
        <p>
          Podaj nam swoje imię, a my zorganizujemy dla Ciebie naszą aplikację :)
        </p>
      </div>
    );
  }
  
};

export default Welcome;

// name="name" value={values.name} placeholder='tutaj wpisz jak masz na imię' onChange={takeName}