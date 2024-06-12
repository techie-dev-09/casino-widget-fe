import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { Col, Row } from 'reactstrap';

function Casino({ isWidget }) {
  const [currentBalance, setCurrentBalance] = useState(30);

  return (
    <div className="p-3" style={{ width: '100%' }}>
      <div className="d-flex justify-content-between">
        <span className="text-left font-size-32 font-weight-bold text-black ">
          Charge your casino
        </span>
        <span className="text-black font-weight-bold mt-2 mr-3">${currentBalance}</span>
      </div>
      <Row>
        <Col lg={4}>
          <PaymentCards
            payment={'$10'}
            value={10}
            currentBalance={currentBalance}
            setCurrentBalance={setCurrentBalance}
            isWidget={isWidget}
          />
        </Col>
        <Col lg={4}>
          <PaymentCards
            payment={'$50'}
            value={50}
            currentBalance={currentBalance}
            setCurrentBalance={setCurrentBalance}
            isWidget={isWidget}
          />
        </Col>
        <Col lg={4}>
          <PaymentCards
            payment={'$80'}
            value={80}
            currentBalance={currentBalance}
            setCurrentBalance={setCurrentBalance}
            isWidget={isWidget}
          />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col lg={4}>
          <PaymentCards
            payment={'$100'}
            value={100}
            currentBalance={currentBalance}
            setCurrentBalance={setCurrentBalance}
            isWidget={isWidget}
          />
        </Col>
        <Col lg={4}>
          <PaymentCards
            payment={'$500'}
            value={500}
            currentBalance={currentBalance}
            isWidget={isWidget}
            setCurrentBalance={setCurrentBalance}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Casino;

const PaymentCards = ({
  payment,
  value,
  currentBalance,
  setCurrentBalance,
  isWidget
}) => {
  const history = useHistory();
  const location = useLocation();
  const handleClick = () => {
    history.push({
      pathname: `${isWidget ? '/buy-sell/buy-nft' : '/buy-nft'}`,
      state: { email: localStorage.getItem('email') },
      search: `${location.search}`
    });
    setTimeout(() => {
      setCurrentBalance(currentBalance + value);
    }, 10000);
  };

  return (
    <div
      style={{
        paddingBottom: '50px',
        paddingTop: '50px',
        background: '#cccccc',
        borderRadius: '24px',
        transition: 'box-shadow 0.3s ease-in-out',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
      onClick={handleClick}
      className="d-flex justify-content-center text-black mt-4 font-size-16 font-weight-bold"
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)')
      }>
      {payment}
    </div>
  );
};
