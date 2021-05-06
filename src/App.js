import logo from './logo.svg';
import './App.css';
/*components klasörünü kendimiz açtık.
oluşturduğumuz componentleri burada tutacağız*/
//import User from "./components/User";
//import User2 from "./components/User2";
//import Card from "./components/Card";

import Card2 from "./components/Card2";

function App() {
  const motto="Always work hard";
  return (
    /*BURASI YORUM SATIRI*/
    /*<div className="App">
      <h2> {2+2}</h2>
      <h2> {"clarusway".toUpperCase()}</h2>
      <h2> {motto}</h2>
    </div>*/
    /*<div className="App">
      <h1>App Component</h1>
      <User />
      <User2 />
    </div>*/
    /*<div className="App">
      <Card name="John Doe" job="Full Stack Developer"/>
      <Card name="Jane Doe" job="Teacher"/>
      <Card name="Maria Doe" job="Student"/>
    </div>*/
    <div className="App">
      <Card2 name="John Doe" job="Full Stack Developer"/>
      <Card2 name="Jane Doe" job="Teacher"/>
      <Card2 name="Maria Doe" job="Student"/>
    </div>
  );
}

export default App;