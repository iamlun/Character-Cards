import './App.css';
import IntroPage from 'pages/IntroPage';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import CreateStep1 from 'pages/CreateStep1';
import CreateStep2 from 'pages/CreateStep2';
import CreateStep3 from 'pages/CreateStep3';
import Chracters from 'pages/Characters';
function App() {
  return (
    <Router>
    <div className="LayoutPage">
    <Routes>
    <Route exact path="/" element={ <IntroPage /> }>
      </ Route>
    <Route path="/new/step1" element={ <CreateStep1 /> }>
     </ Route>
     <Route path="/new/step2" element={ <CreateStep2 /> }>
     </ Route>
     <Route path="/new/step3" element={ <CreateStep3 /> }>
     </ Route>
     <Route path="/characters" element={ <Chracters /> }>
     </ Route>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
