const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false }
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏖️ Far away 💼</h1>;
}

function Form() {
  // e is the event object with all the information about the current event
  function handleSubmit(e){
    e.preventDefault();
    console.log(e);
  }
  return (
  <form className="add-form" onSubmit={handleSubmit}>
    <h3>What do you need for your 😍 trip?</h3>
    <select>
      {Array.from({length : 20}, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}
      {/* in array.from, 1st parameter is an object with length property set to 20 and that would create an empty array with 20 elements and basically a map function as the second arguement in which the 1st arguement would be to send the current value and the second parameter as index*/}
    </select>
    <input type="text" placeholder="Item..." />
    <button>Add</button>
  </form>);
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map(item => (
          <Item item={item} key={item.id}/>
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li style={item.packed ? {textDecoration: "line-through"} : {}}>
      <span>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer>
      <em>👜You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
