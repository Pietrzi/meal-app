import React from "react";

class Welcome extends React.Component {
  
  render() {
    const { values, passName, addName } = this.props
    return (
      <div className='welcome'>
        <h1>Witaj,</h1>
        <h2>wygląda na to, że jesteś tutaj pierwszy raz!</h2>
        <form onSubmit={addName}>
          <input type='text' name="tempName" value={values.tempName} onChange={passName}/>
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
