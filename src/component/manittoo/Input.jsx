// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// 스타일 설정
const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-family: 'SUITE', sans-serif;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  color: #333;
  background-color: #fff;
  

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Input = ({ placeholder, value, onChange }) => {
  return (
    <StyledInput 
      type="text" 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
    />
  );
};

// PropTypes 설정
Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholder: 'Enter text here...',
  value: '',
};

export default Input;