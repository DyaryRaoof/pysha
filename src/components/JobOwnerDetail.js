import me from '../imgs/me.jpeg';
import './JobOwnerDetail.css';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const JobOwnerDetail = () => {
  const { state } = useLocation();
  const jobOwner = state.jobOwner;

  const renderPair = (key, value, isLink) => {
    return (
      <div className="job-owner-detail-value-pair">
        <p className="brown-color">{key}</p>
        {'  :  '}
        {isLink ? (
          <a href={value} target="_blank">
            {value}
          </a>
        ) : (
          <p>{value}</p>
        )}
      </div>
    );
  };

  return (
    <section>
      <div id="job-owner-detail-top-info">
        <img id="job-owner-detail-profile-img" src={me} alt="profile picture" />
        <h3 class="brown-color">{jobOwner.name}</h3>
        <h3 class="brown-color">
          <a href={`tel:${jobOwner.phone}`} target="_blank">
            {jobOwner.phone}
          </a>
        </h3>
        <h3 class="brown-color">
          <a href={`mailto:${jobOwner.email}`} target="_blank">
            {jobOwner.email}
          </a>
        </h3>
        <h3 class="brown-color">{jobOwner.jobTitle}</h3>
      </div>
      <section>
        {renderPair('Location', jobOwner.location)}
        {renderPair('Facebook', jobOwner.facebook, true)}
        {renderPair('Instagram', jobOwner.instagram, true)}
        {renderPair('Twitter', jobOwner.twitter, true)}
        {renderPair('Website', jobOwner.website, true)}
        {renderPair('Youtube', jobOwner.youtube, true)}
        {renderPair('Diaily Price', jobOwner.dailyPrice)}
        {renderPair('More Info', jobOwner.info)}
      </section>
      <div className="d-flex justify-content-center">
        <Button
          style={{
            backgroundColor: '#A13333',
            width: '150px',
            marginRight: '10px',
          }}
          variant="primary"
        >
          Edit
        </Button>
        <Button style={{ backgroundColor: '#B3541E', width: '150px' }}>
          Message
        </Button>
      </div>
    </section>
  );
};

export default JobOwnerDetail;
