// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 327px;
  height: 52px;
  padding: 18px;
  color: white;
  font-size: 16px;
  font-family: 'SUITE', sans-serif;
  background-color: ${(props) => (props.clicked ? '#8F1426' : '#B2AEAE')};
  border: none;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: ${(props) => props.marginTop || '0px'}; // margin-top 추가

  &:hover {
    background-color: #8F1426; /* 마우스 올렸을 때 색상 변경 */
  }
`;

const Button = ({ onClick, children, marginTop }) => {
  const [clicked, setClicked] = useState(false);

  const handleMouseDown = () => {
    setClicked(true);
  };

  const handleMouseUp = () => {
    setClicked(false);
  };

  return (
    <StyledButton
      clicked={clicked}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
      marginTop={marginTop} // marginTop prop 전달
    >
      {children}
    </StyledButton>
  );
};

// PropTypes 설정
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  marginTop: PropTypes.string, // marginTop을 string으로 추가
};

Button.defaultProps = {
  marginTop: '0px', // 기본값 설정
};

export default Button;