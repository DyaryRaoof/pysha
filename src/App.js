import Home from './components/Home';
import { Container } from 'react-bootstrap';
import MyNavbar from './components/Home/MyNavbar';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <MyNavbar isLoggedIn={true} />
      <Container>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
