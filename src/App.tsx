import Posts from "./Posts/Posts";
import Form from "./components/Form/Form";

function App() {


  return (
    <div style={{ display: "flex", justifyContent:"space-between"}}>
      <div>
        <h1 style={{ color: "red" }}>Test</h1>
        <Posts />
      </div>
      <Form/>
    </div>
  );
}

export default App;
