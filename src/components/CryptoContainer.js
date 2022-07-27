import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CryptoCard from './CryptoCard';
import { getCryptos } from '../redux/cryptoReducers';

const CryptoContainer = () => {
  const myState = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    if (myState.length === 0) {
      dispatch(getCryptos());
    }
  }, []);

  const [search, setSearch] = useSearchParams();
  return (
    <div className="crypto-container">
      <input
        className="search-bar"
        type="text"
        value={search.get('filter') || ''}
        placeholder="Search by Crypto name ..."
        onChange={(e) => {
          const filter = e.target.value;
          if (filter) {
            setSearch({ filter });
          } else {
            setSearch({});
          }
        }}
      />
      <div className="card-container">
        {myState
          .filter((element) => {
            const filter = search.get('filter');
            if (!filter) return true;
            const name = element.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((element) => (
            <Link key={element.id} to={`/${element.id}`}>
              <CryptoCard
                key={element.id}
                name={element.name}
                symbol={element.symbol}
                icon={element.icon}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CryptoContainer;
