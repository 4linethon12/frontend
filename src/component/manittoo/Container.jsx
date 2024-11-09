 import PropTypes from 'prop-types';
import styled from 'styled-components';

// 메인 컨테이너 스타일
const Container = styled.div`
  width: ${(props) => props.width || '320px'};
  height: ${(props) => props.height || '200px'};
  background-color: rgba(255, 253, 253, 0.8); /* 배경색과 투명도 설정 */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  margin: ${(props) => (typeof props.margin === 'number' ? `${props.margin}px` : props.margin || '0')}; /* 숫자일 경우 px 추가 */
`;

// 텍스트 스타일 (윗줄, 아랫줄 동일 스타일)
const Text = styled.p`
  font-family: 'SUITE', sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0.2rem 0;
`;

const StyledContainer = ({ width, height, text1, text2, margin, onClick  }) => {
  return (
    <Container width={width} height={height} margin={margin} onClick={onClick}>
      <Text>{text1}</Text>
      <Text>{text2}</Text>
    </Container>
  );
};

// PropTypes 정의
StyledContainer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};

// 기본값 설정
StyledContainer.defaultProps = {
  width: '320px',
  height: '200px',
  margin: '0',
};

export default StyledContainer;