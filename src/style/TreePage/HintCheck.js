import styled from 'styled-components';

export const MainContainer = styled.div`
 width: 100%;
  min-height: 100vh; 
  overflow: hidden;
  background: linear-gradient(
    0deg,
    #0c1929 0%,
    #184e40 100%
    
  );
  display: flex;
  
  flex-direction: column;
  align-items: center;
`;
export const HintText = styled.p`
font-family: "SUITE", sans-serif;
font-size: 16px;
font-weight: 500;
color: #333;
line-height: 1.5;
margin: 0;
`;

export const RightImage = styled.img`
  width:  30px; /* 필요한 크기로 조정 */
  height: 30px;
   margin-left: auto;
  
`;

export const highContainer = styled.div`
  width: 375px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.0); /* 반투명한 테두리 */
  border-radius: 8px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
`;

export const StyledDiv = styled.div`
  font-size: 24px;
`;
 
export const TitleText = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: white;
  margin-top: ${(props) => props.marginTop || '0'};
`;


export const Container = styled.div`
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
  margin-top: 10%; /* 숫자일 경우 px 추가 */
`;

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`;


export const ContainerImage = styled.img`
  width: 72px; /* 원하는 이미지 크기 */
  height: 72px;
  margin-bottom: -55px;
  z-index: 1;
`;