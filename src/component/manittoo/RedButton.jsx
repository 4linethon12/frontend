// CountdownBadge.js

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BadgeContainer = styled.div`
  width: 140px;
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
  // const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const calculateDaysLeft = () => {
      // const today = new Date();
      // const targetDate = new Date('2024-11-16'); // 목표 날짜 설정
      // const diffTime = targetDate - today; // 밀리초 차이 계산
      // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 남은 일수 계산
      // setDaysLeft(diffDays);
    };

    calculateDaysLeft(); // 컴포넌트 마운트 시 실행
  }, []);

  return (
    <BadgeContainer>
      <BadgeText>
      🎄 크리스마스 D-DAY 🎄
      </BadgeText>
    </BadgeContainer>
  );
};

export default CountdownBadge;