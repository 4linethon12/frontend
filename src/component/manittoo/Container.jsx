import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: ${(props) => props.width || '320px'};
  height: ${(props) => props.height || '200px'};
  background-color: rgba(255, 253, 253, 0.8); 
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  margin: ${(props) => (typeof props.margin === 'number' ? `${props.margin}px` : props.margin || '0')};
  position: relative;
`;

const Text = styled.p`
  font-family: 'SUITE', sans-serif;
  font-size: 16px;
  color: #254434;
  margin: 0.5rem 0;
  white-space: pre-line;
  z-index: 1; /* 텍스트가 이미지 위로 오도록 설정 */
`;

const Text2 = styled.p`
  font-family: 'SUITE', sans-serif;
  font-size: 14px;
  color: #254434;
  white-space: pre-line;
  z-index: 1; /* 텍스트가 이미지 위로 오도록 설정 */
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: -30px; /* 이미지 위치를 조정하여 텍스트와 겹치지 않도록 설정 */
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Image = styled.img`
  width: 50px; /* 이미지 크기 조절 */
  height: 50px;
`;



const StyledContainer = ({ width, height, text1, text2, margin, onClick, imageSrc }) => {
  return (
    <Container width={width} height={height} margin={margin} onClick={onClick}>
      {imageSrc && (
        <ImageWrapper>
          <Image src={imageSrc} alt="Santa Image" />
        </ImageWrapper>
      )}
      <Text>{text1}</Text>
      {Array.isArray(text2)
        ? text2.map((line, index) => <Text2 key={index}>{line}</Text2>)
        : <Text2>{text2}</Text2>}
    </Container>
  );
};

StyledContainer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  imageSrc: PropTypes.string,
};

StyledContainer.defaultProps = {
  width: '320px',
  height: '200px',
  margin: '0',
};

export default StyledContainer;