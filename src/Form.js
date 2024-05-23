import { useState } from 'react';
import Apicalls from './Apicalls.js'
function Form(){
    const [inputs, setInputs] = useState({});
    //const [name, setName] = useState("");
    //const [tag, setTag] = useState("");
  
    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
    }
  
    // const handleNameChange = (e) => {
    //   setName(e.target.value);
    // }
  
    // const handleTagChange = (e) => {
    //   setTag(e.target.value);
    // }
  
    return(
      <>
        <form onSubmit = {handleSubmit}>
            <label>Gamename: </label>
            <input 
              type = "text"
              name = "name"
              value = {inputs.name || ""}
              onChange={handleChange}
            />
            <label>Tag:</label>
            <input
              type = "text"
              name = "tag"
              value = {inputs.tag || ""}
              onChange={handleChange}
            />
            <input type="submit"/>
        </form>
        
        <Apicalls inputs = {inputs} />
      </>
    )
  }

  export default Form;