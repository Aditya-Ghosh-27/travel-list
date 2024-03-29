// onChange function receieves the event (here the event is e) that was fired off
// value ={description} means we always force the element to always take the value of the state variable

import { useState } from "react";

export default function Form({ onAddItems }) {
    const [description, setDescription] = useState(""); // 1st step : Create our peice of state
    const [quantity, setQuantity] = useState(1);  // 1st step : Create our peice of state
  
  
    // e is the event object with all the information about the current event
    function handleSubmit(e){
      e.preventDefault();
  
      // Guard class () - When there's no description here, we shouldn't be able to submit the form
      if(!description) return;
      
      const newItem = {
        description, quantity, packed : false , id : Date.now()
      }
      console.log(newItem);
  
      onAddItems(newItem);
  
      // After a submission is done, we should go back to the original state
      setDescription("");
      setQuantity(1);
    }
    return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value = {quantity} onChange={(e) => {
        setQuantity(Number(e.target.value))
        // By the way, the value is coming directly from <option value ={num}>
      }}>
        {Array.from({length : 20}, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}
        {/* in array.from, 1st parameter is an object with length property set to 20 and that would create an empty array with 20 elements and basically a map function as the second arguement in which the 1st arguement would be to send the current value and the second parameter as index*/}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={(e) => {
          // console.log(e.target);
          // console.log(e.target.value);
          setDescription(e.target.value) 
        }}/>  
      {/*2. Now we use that state as a value of the input field */}
      {/* 3. On the same element, listen for the change event and that is basically update the state each time we put in a value in the select field */}
      {/* In the 3rd step or the final step, we somehow have to connect the value in the input field with the value of that we are going to put in the input field */}
      <button>Add</button>
    </form>);
  }