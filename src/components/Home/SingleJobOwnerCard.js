import { Card, Button } from 'react-bootstrap';
import { useHistory, useNavigate } from 'react-router-dom';
import './SingleJobOwnerCard.css';
import me from '../../imgs/me.jpeg';

const SingleJobOwnerCard = ({ job }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Card.Img variant="top" src={me} />
      <Card.Body>
        <Card.Title>{job.name}</Card.Title>
        <Card.Text>{job.jobTitle}</Card.Text>
        <Card.Text>{job.location}</Card.Text>
        <Card.Text>{`${job.dailyPrice} daily`}</Card.Text>
        <div className="job-owner-card-buttons">
          <Button
            style={{
              backgroundColor: '#a13333',
              borderColor: 'black',
              width: '100px',
            }}
          >
            Message
          </Button>
          <Button
            style={{
              backgroundColor: '#a13333',
              borderColor: 'black',
              width: '100px',
            }}
            onClick={() =>
              navigate('/owner-detail', { state: { jobOwner: job } })
            }
          >
            Detail
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleJobOwnerCard;
