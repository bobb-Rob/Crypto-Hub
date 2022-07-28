import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import Icon from 'react-icons-kit';
import { circleLeft } from 'react-icons-kit/icomoon/circleLeft';
import { longArrowRight } from 'react-icons-kit/fa/longArrowRight';
import { twitter } from 'react-icons-kit/fa/twitter';
import { infoCircle } from 'react-icons-kit/fa/infoCircle';
import { getCryptos } from '../redux_files/cryptoReducers';

const CryptoDetails = () => (
  <div>CryptoDetails</div>
);

export default CryptoDetails;
