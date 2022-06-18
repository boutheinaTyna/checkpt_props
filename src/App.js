import './App.css';
import Profile from './profile/Profile'; 
import Pic from "./profile/pic.jpg";


function App() {

  function handleName(fullName) {
    alert(`${fullName}`);

}
  
  return (
    <div className="App">
      <header className="App-header">
         
          <Profile 
          fullName="Maazaoui Boutheina" 
          Bio= "dotée de sens de responsabilité et de créativité" 
          Profession= "enseignante "
          handleName= {handleName}
          >
            {Pic}
          </Profile>


      </header>
    </div>
  );
}

export default App;
