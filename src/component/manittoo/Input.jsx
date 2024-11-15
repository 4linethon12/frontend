import PropTypes from 'prop-types';
import styled from 'styled-components';
import ErrorIcon from '/images/Group/Check.svg'; // 조건에 맞지 않을 때의 아이콘
import SuccessIcon from '/images/Group/Error.svg'; // 조건을 만족할 때의 아이콘

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

const Input = ({ placeholder, value, onChange }) => {
  // 조건에 따른 아이콘 설정
  let icon;
  if (value.length >= 10) {
    icon = SuccessIcon; // 조건을 만족하면 성공 아이콘
  } else if (value.length > 0) {
    icon = ErrorIcon; // 조건에 맞지 않으면 에러 아이콘
  } else {
    icon = ''; // 아무것도 입력하지 않으면 아이콘 없음
  }

  return (
    <InputContainer>
      <StyledInput 
        type="text" 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
      />
      {icon && <Icon src={icon} alt="Input Icon" />}
    </InputContainer>
  );
};

// PropTypes 설정
Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholder: 'Enter text here...',
};

export default Input;