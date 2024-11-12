import PropTypes from 'prop-types';
import styled from 'styled-components';
import Vector from '/images/Group/Vector.png'; 
// 부모 컨테이너 스타일 설정
const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

// 입력 필드 스타일 설정
const StyledInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 10px; /* 오른쪽에 이미지 공간 확보 */
  font-size: 16px;
  font-family: 'SUITE', sans-serif;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-sizing: border-box;
  color: #333;
  background-color: #fff;
 height: 50px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

// 아이콘 스타일 설정
const Icon = styled.img`
  position: absolute;
  right: 15px; /* 오른쪽에 위치 */
  top: 50%;
  transform: translateY(-50%); /* 수직 가운데 정렬 */
  width: 20px; /* 아이콘 크기 */
  height: 20px;
  pointer-events: none; /* 클릭 이벤트 방지 */
`;

const Input = ({ placeholder, value, onChange, icon }) => {
  return (
    <InputContainer>
      <StyledInput 
        type="text" 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
      />
      <Icon src={icon || Vector} alt="Input Icon" />
    </InputContainer>
  );
};

// PropTypes 설정
Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string, // 동적으로 아이콘 이미지를 전달할 수 있도록 추가
};

Input.defaultProps = {
  placeholder: 'Enter text here...',
  value: '',
  icon: Vector, // 기본 아이콘 설정
};

export default Input;