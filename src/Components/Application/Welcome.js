import React from "react";

const Welcome = () => {
  return (
    <div className='welcome'>
      <h1>Witaj,</h1>
      <h2>wygląda na to, że jesteś tutaj pierwszy raz!</h2>
      <form>
        <input type='text' placeholder='tutaj wpisz jak masz na imię' />
        <br />
        <button type='submit'>Gotowe!</button>
      </form>
      <p>
        Podaj nam swoje imię, a my zorganizujemy dla Ciebie naszą aplikację :)
      </p>
    </div>
  );
};

export default Welcome;