import Home from './components/Home';
import { Container } from 'react-bootstrap';
import MyNavbar from './components/Home/MyNavbar';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import JobOwnerDetail from './components/JobOwnerDetail';

function App() {
  return (
    <>
      <MyNavbar isLoggedIn={true} />
      <Container>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/owner-detail" element={<JobOwnerDetail />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
