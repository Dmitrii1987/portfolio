import './App.css';
import Header from './header/Header';
import HireMe from './hire me/HireMe';
import Main from './main/Main';
import MyProjects from './my projects/MyProjects';
import Skills from './skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills/>
      <MyProjects />
      <HireMe/>
    </div>
  );
}

export default App;
