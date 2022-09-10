import React, {useState, useEffect}  from "react";

function Fetch(){
    const [Step, setStep] = useState("Hello how are you there, how can I help you?")
   
    useEffect(() => {
      fetch("http://localhost:9292")
        .then(res => res.json())
        .then(result => setStep(result))
    }, []);


    const handleSubmit = (e) =>  {
    setStep(e.target.value)
    } 
  return (
    <div className="App">
    <h2>FAQ application</h2>
     <form>
      <button className='btn' onClick={handleSubmit} value={Step}>start</button>
       <input className= "inpt" placeholder='Enter question...'/>
      <button className='btm'>send</button>
     </form>
    </div>
  );
}

export default Fetch;
