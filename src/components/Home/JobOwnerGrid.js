import { Col, Row } from 'react-bootstrap';
import './JobOwnerGrid.css';
import SingleJobOwnerCard from './SingleJobOwnerCard';

const categories = [
  { name: 'category 0', id: 0 },
  { name: 'category 1', id: 1 },
  { name: 'category 2', id: 2 },
  { name: 'category 3', id: 3 },
  { name: 'category 4', id: 4 },
  { name: 'category 5', id: 5 },
  { name: 'category 6', id: 6 },
  { name: 'category 7', id: 7 },
  { name: 'category 8', id: 8 },
  { name: 'category 9', id: 9 },
];

const jobOwners = [
  {
    id: 0,
    categoryId: 0,
    name: 'dyary raoof',
    email: 'dyary2020@gmail.com',
    phone: '07701365768',
    location: 'Sulaimany',
    jobTitle: 'Full Stack Developer',
    dailyPrice: '50,000IQD',
  },
  {
    id: 1,
    categoryId: 0,
    name: 'dyary raoof',
    email: 'dyary2020@gmail.com',
    phone: '07701365768',
    location: 'Sulaimany',
    jobTitle: 'Full Stack Developer',
    dailyPrice: '50,000IQD',
  },
  {
    id: 2,
    categoryId: 0,
    name: 'dyary raoof',
    email: 'dyary2020@gmail.com',
    phone: '07701365768',
    location: 'Sulaimany',
    jobTitle: 'Full Stack Developer',
    dailyPrice: '50,000IQD',
  },
  {
    id: 3,
    categoryId: 0,
    name: 'dyary raoof',
    email: 'dyary2020@gmail.com',
    phone: '07701365768',
    location: 'Sulaimany',
    jobTitle: 'Full Stack Developer',
    dailyPrice: '50,000IQD',
  },
  {
    id: 4,
    categoryId: 0,
    name: 'dyary raoof',
    email: 'dyary2020@gmail.com',
    phone: '07701365768',
    location: 'Sulaimany',
    jobTitle: 'Full Stack Developer',
    dailyPrice: '50,000IQD',
  },
  {
    id: 5,
    categoryId: 0,
    name: 'dyary raoof',
    email: 'dyary2020@gmail.com',
    phone: '07701365768',
    location: 'Sulaimany',
    jobTitle: 'Full Stack Developer',
    dailyPrice: '50,000IQD',
  },
  {
    id: 6,
    categoryId: 1,
    name: 'dyary raoof',
    email: 'dyary2020@gmail.com',
    phone: '07701365768',
    location: 'Sulaimany',
    jobTitle: 'Full Stack Developer',
    dailyPrice: '50,000IQD',
  },
  {
    id: 7,
    categoryId: 1,
    name: 'dyary raoof',
    email: 'dyary2020@gmail.com',
    phone: '07701365768',
    location: 'Sulaimany',
    jobTitle: 'Full Stack Developer',
    dailyPrice: '50,000IQD',
  },
  {
    id: 8,
    categoryId: 1,
    name: 'dyary raoof',
    email: 'dyary2020@gmail.com',
    phone: '07701365768',
    location: 'Sulaimany',
    jobTitle: 'Full Stack Developer',
    dailyPrice: '50,000IQD',
  },
  {
    id: 9,
    categoryId: 2,
    name: 'dyary raoof',
    email: 'dyary2020@gmail.com',
    phone: '07701365768',
    location: 'Sulaimany',
    jobTitle: 'Full Stack Developer',
    dailyPrice: '50,000IQD',
  },
  {
    id: 10,
    categoryId: 2,
    name: 'dyary raoof',
    email: 'dyary2020@gmail.com',
    phone: '07701365768',
    location: 'Sulaimany',
    jobTitle: 'Full Stack Developer',
    dailyPrice: '50,000IQD',
  },
  {
    id: 11,
    categoryId: 3,
    name: 'dyary raoof',
    email: 'dyary2020@gmail.com',
    phone: '07701365768',
    location: 'Sulaimany',
    jobTitle: 'Full Stack Developer',
    dailyPrice: '50,000IQD',
  },
  {
    id: 12,
    categoryId: 4,
    name: 'dyary raoof',
    email: 'dyary2020@gmail.com',
    phone: '07701365768',
    location: 'Sulaimany',
    jobTitle: 'Full Stack Developer',
    dailyPrice: '50,000IQD',
  },
  {
    id: 13,
    categoryId: 4,
    name: 'dyary raoof',
    email: 'dyary2020@gmail.com',
    phone: '07701365768',
    location: 'Sulaimany',
    jobTitle: 'Full Stack Developer',
    dailyPrice: '50,000IQD',
  },
  {
    id: 14,
    categoryId: 5,
    name: 'dyary raoof',
    email: 'dyary2020@gmail.com',
    phone: '07701365768',
    location: 'Sulaimany',
    jobTitle: 'Full Stack Developer',
    dailyPrice: '50,000IQD',
  },
  {
    id: 15,
    categoryId: 5,
    name: 'dyary raoof',
    email: 'dyary2020@gmail.com',
    phone: '07701365768',
    location: 'Sulaimany',
    jobTitle: 'Full Stack Developer',
    dailyPrice: '50,000IQD',
  },
];

const JobOwnerGrid = () => {
  return categories.map((c) => {
    return (
      <div key={c.id}>
        <h2>{c.name}</h2>
        <div id="job-ownerGrid">
          <Row className="sinlge-job-owner-row">
            {jobOwners
              .filter((j) => j.categoryId === c.id)
              .map((j) => {
                return (
                  <Col key={j.id} md="3" style={{ marginBottom: '30px' }}>
                    <SingleJobOwnerCard job={j} />
                  </Col>
                );
              })}
          </Row>
        </div>
      </div>
    );
  });
};

export default JobOwnerGrid;
