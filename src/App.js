import './App.css';
import PlayersContainer from './components/Players/PlayersContainer';
import Teams from './components/Teams/Teams';



function App(props) {
    return (
        <div>
            <h1>
                NBA profile
            </h1>
            <Teams/>
            <PlayersContainer />
        </div>
    );
}

export default App;
