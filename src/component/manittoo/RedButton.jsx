// CountdownBadge.js

import styled from 'styled-components';

const BadgeContainer = styled.div`
  width: 160px;
  height: 27px;
  background: rgba(143, 20, 38, 0.80);
  border-radius: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BadgeText = styled.div`
  color: white;
  font-size: 12px;
  font-family: 'SUITE';
  font-weight: 600;
  text-align: center;
`;

const CountdownBadge = () => {
  return (
    <BadgeContainer>
      <BadgeText>🎄 크리스마스까지 D-3 🎄</BadgeText>
    </BadgeContainer>
  );
};

export default CountdownBadge;