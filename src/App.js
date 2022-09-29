import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Body_Build from './Components/Body-Build/Body_Build';
import Question from './Components/Question/Question';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Body_Build></Body_Build>
        <Question></Question>
    </div>
  );
}

export default App;
