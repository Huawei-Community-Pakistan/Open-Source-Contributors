import './App.css';
import FetchUser from './components/FetchUsers';

function App() {
  return (
    <div className="App">
      <div className="users">
        <FetchUser />
      </div>
      <footer className="footer">
        Made with ❤ by&nbsp;
        <a href="https://github.com/sharjeelyunus" target="_blank" rel="noreferrer">Sharjeel Yunus</a>
      </footer>
    </div>
  );
}

export default App;
