import MyNavbar from './MyNavbar';
import MyForm from './MyForm';
import JobOwnerGrid from './JobOwnerGrid';
import './index.css';

const Home = () => {
  return (
    <div>
      <MyForm />
      <JobOwnerGrid />
    </div>
  );
};

export default Home;
