import PropTypes from 'prop-types';
import styled from 'styled-components';

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



const Input = ({ type = 'text', placeholder, value, onChange }) => {
  

  return (
    <InputContainer>
      <StyledInput 
        type={type} 
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