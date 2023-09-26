import "./App.css";
import Header from "./component/Header";
import Header2 from "./component/Header2";
import Nav from "./component/Nav";
import Foot from "./component/footer";

function App() {
  return (
    //this is a component
    <>
      <div>
        <Nav />
        <h1 className="heading">Welcome to our site</h1>
        <Header />
        <Header2 />

        <Foot />
      </div>
    </>
  );
}

export default App;
