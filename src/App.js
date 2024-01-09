export default function(){
  return (
    <Logo />
    <Form />
    <PackingList />
    <Stats />
  )
}

function Logo(){
  return <h1>🏖️ Far away 💼</h1>
}

function Form(){
  return (
    <div className="add-form">
      What do you need for your 😍 trip?
    </div>
  )
}

function PackingList(){
  return <div className="list">LIST</div>
}

function Stats(){
  return <footer>
    <em>👜You have X items on your list, and you already packed X (X%)</em>
  </footer>
}