import "./styles.css";

export default function App() {
  let count = 5;
  const clickHandler = (e) => {
    console.log(e.target.name);
  };
  let p = new Array(count).fill(0);
  let y = p.map((item, i) => (
    <button key={i} onClick={clickHandler} name={`btn-${i + 1}`}>
      {i + 1}
    </button>
  ));
  //  console.log(y + "csd");
  return <div className="App">{y}</div>;
}
