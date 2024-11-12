import PropTypes from 'prop-types';
import  { useState } from 'react'; 
import styled from 'styled-components';
 
import Santaman from '/images/santa.png'; 

const StyledButton = styled.button`
  position: relative; /* 이미지 겹치기를 위한 상대 위치 설정 */
  width: 327px;
  height: 52px;
  padding: 18px;
  color: #CFD3D5;
  font-size: 16px;
  font-family: 'SUITE', sans-serif;
  font-weight: 700px;
  background-color: ${(props) => (props.clicked ? '#8F1426' : '#B2AEAE')};
  border: none;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: ${(props) => props.marginTop || '0px'};

  &:hover {
    background-color: #8F1426;
  }
`;

const Icon = styled.img`
  position: absolute;
  right: 0px; /* 버튼 왼쪽에 이미지 위치 */
  top: -20%;
  transform: translateY(-50%); /* 이미지 수직 가운데 정렬 */
  width: 65px; /* 이미지 크기 */
  height: 65px;
  pointer-events: none; /* 클릭 이벤트 방지 */
`;

const Button = ({ onClick, children, marginTop, icon }) => {
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
      marginTop={marginTop}
    >
      {icon && <Icon src={icon || Santaman} alt="Button Icon" />}
      {children}
    </StyledButton>
  );
};

// PropTypes 설정
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  marginTop: PropTypes.string,
  icon: PropTypes.string, // 아이콘 경로를 prop으로 추가
};

Button.defaultProps = {
  marginTop: '0px',
  icon: Santaman, // 기본 아이콘 설정
};

export default Button;