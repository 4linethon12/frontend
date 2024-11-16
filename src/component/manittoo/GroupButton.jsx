import PropTypes from 'prop-types';
import  { useState } from 'react'; 
import styled from 'styled-components';
 
import Santaman from '/images/santa.png'; 

const StyledButton = styled.button`
  position: relative;
  width: 327px;
  height: 52px;
  padding: 18px;
  color: ${(props) => (props.mission ? '#DCDCDC' : '#B2AEAE')};
  font-size: 16px;
  font-family: 'SUITE', sans-serif;
  font-weight: 700;
  background-color: ${(props) => (props.mission ? '#8F1426CC' : '#CFD3D5')};
  border: none;
  border-radius: 20px;
  outline: none;
  cursor: ${(props) => (props.mission ? 'pointer' : 'not-allowed')};
  transition: background-color 0.3s;
  margin-top: ${(props) => props.marginTop || '0px'};

  &:hover {
    background-color: ${(props) => (props.mission ? '#8F1426' : '#CFD3D5')};
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

const Button = ({ onClick, children, marginTop, icon, mission }) => {
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
        onClick={mission ? onClick : undefined} // 입력 없으면 클릭 비활성화
        marginTop={marginTop}
        mission={mission} // StyledButton에 전달
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
    icon: PropTypes.string,
    mission: PropTypes.bool, // mission 상태를 Prop으로 추가
  };
  
  Button.defaultProps = {
    marginTop: '0px',
    icon: Santaman,
    mission: false, // 기본값은 비활성화 상태
  };
  
  export default Button;  