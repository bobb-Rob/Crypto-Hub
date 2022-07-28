import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import Icon from 'react-icons-kit';
import { arrowCircleLeft } from 'react-icons-kit/fa/arrowCircleLeft';

const CryptoDetails = () => {
  const state = useSelector((state) => state.crypto);
  const params = useParams();
  const currentCrypto = state.find((item) => item.id === params.cryptoId);

  const {
    id,
    icon,
    name,
    symbol,
    rank,
    price,
    priceBtc,
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
      <Link to="/">
          <i className="go-back">
            <Icon icon={arrowCircleLeft} size={25} />
          </i>
        </Link>
    </div>
  );
};
export default CryptoDetails;
