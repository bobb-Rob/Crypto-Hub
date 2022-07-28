/* eslint-disable */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import Icon from 'react-icons-kit';
import { circleLeft } from 'react-icons-kit/icomoon/circleLeft';

const CurrencyFormatter = (amount) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format(amount);

const CryptoDetails = () => {
  const state = useSelector((state) => state.crypto);
  const params = useParams();
  const currentCrypto = state.find((item) => item.id === params.cryptoId);

  const {
    icon,
    name,
    symbol,
    rank,
    price,   
    volume,
    marketCap,
    availableSupply,
    totalSupply,
    priceChange1h,
    priceChange1d,
    priceChange1w,
    websiteUrl,
    twitterUrl,
  } = currentCrypto;

  return (
    <div className="crypto-details-page">
      <div className="crypto-info-head">
        <Link to="/">
          <i className="go-back">
            <Icon icon={circleLeft} size={25} />
          </i>
        </Link>
        <div>
          <div className="details-icon">
            <img src={icon} alt={name} />
          </div>
          <div className="name-price">
            <span>
              {name}
            /
              {symbol}
            </span>
            <br />
            <span>{CurrencyFormatter(price)}</span>
          </div>
        </div>
      </div>
      <div className="crypto-info">
        <div>
          <span>Rank</span>
          <span>{rank}</span>
        </div>
      </div>      
    </div>
  );
};
export default CryptoDetails;
