import './App.css';
import Banner from './Banner.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Banner />
    </BrowserRouter>
  );
}

export default App;
