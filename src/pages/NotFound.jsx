import errorImg from '../img/404.png';
import React  from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const styleimg = {
    width: '55%',
    

  }
  const navigate = useNavigate();
  return (
    <div className="container text-center mt-4">
      <img style={styleimg} src={errorImg} alt="" />
      <div>
        <button onClick={() => navigate('/')} className="btn btn-success me-2">
          Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;