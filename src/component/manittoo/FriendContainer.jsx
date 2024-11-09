import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100px;
  height: 45px;
  background-color: rgba(255, 253, 253, 0.8);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  box-sizing: border-box;
   
  margin: ${(props) => (typeof props.margin === 'number' ? `${props.margin}px` : props.margin || '0')}; /* 숫자일 경우 px 추가 */
`;

const ContainerImage = styled.img`
  width: 25px; /* 원하는 크기로 설정 */
  height: 25px;
  margin-right: 0.5rem; /* 텍스트와 이미지 간 간격 */
`;

const Text = styled.p`
  font-family: 'SUITE', sans-serif;
  font-size: 14px;
  color: #254434;
  margin: 0.2rem 0;
`;

const FriendContainer = ({ text1,  margin, onClick }) => {
  return (
    <Container margin={margin} onClick={onClick}>
         <ContainerImage src="public/images/마니또.png" alt="산타이미지" />
      <Text>{text1}</Text>
       
    </Container>
  );
};

FriendContainer.propTypes = {
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func,
  };
  

export default FriendContainer;
