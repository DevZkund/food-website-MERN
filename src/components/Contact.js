import React from "react";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [date, setDate] = useState("");
  const [mess, setMess] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      numPeople: num,
      date: date,
      message: mess,
    }
    try{
        const response = await fetch('https://dummy.restapiexample.com/api/v1/create',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }catch(error){
        console.log('Error',error);
    }
  };
 

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeNum = (e) => {
    setNum(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };
  const handleChangeMess = (e) => {
    setMess(e.target.value);
  };

  const clearMessage = (e) => {
    e.preventDefault();
    setMess("");
  };

  return (
    <div className="container contact">
      <h1>Contact</h1>
      <p>
        We offer full-service catering for any event, large or small. We
        understand your needs and we will cater the food to satisfy the biggerst
        criteria of them all, both look and taste. Do not hesitate to contact
        us.
      </p>
      <p className="catering_test">
        Catering Service, 42nd Living St, 43043 New York, NY
      </p>
      <form method="POST">
        <input
          onChange={handleChangeName}
          value={name}
          placeholder="name"
          type="text"
        />
        {name}
        <br />
        <input
          onChange={handleChangeNum}
          value={num}
          placeholder="How many people"
          type="number"
        />
        {num}
        <br />
        <input
          onChange={handleChangeDate}
          value={date}
          placeholder="Date"
          type="datetime-local"
        />
        {date}
        <br />
        {mess}
        <input
          onChange={handleChangeMess}
          value={mess}
          id="txtArea"
          placeholder="Message \ Special requirements"
          type="text"
        />
        <button onClick={handleClick} >SEND MESSAGE</button>
        <button onClick={clearMessage}>CLEAR MESSAGE</button>
      </form>
    </div>
  );
}

export default Contact;
