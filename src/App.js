import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <User
        name='Sharjeel Yunus'
        batch='2019'
        major='Computer Science'
        favLang='JavaScript / TypeScript'
        github='sharjeelyunus'
        city='Bahawalpur'
        oraginzation='CareerNetwork'
      />
    </div>
  );
}

export default App;
