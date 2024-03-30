import "./styles.css";

export default function App() {
  return (
    <>
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item"> New Item </label>
        <input type="text" id="item" />
      </div>
      <button className="btn">Add</button></button>
    </form>
    <h1 className="header">Todo List</h1>
    <ul className="list">
      
    </ul>
    </>
  )
}
