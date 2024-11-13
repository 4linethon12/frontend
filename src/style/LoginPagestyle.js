import styled from 'styled-components';

export const LoginBackground = styled.div`
 background-image: url('/images/background/LoginBack.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;  
  display: flex;
 
  flex-direction: column;
  align-items: center;
`;

export const CenteredImage = styled.img`
  width: 250px; /* 필요한 크기로 조정 */
  height: 50px;
  margin-top: 30%;
 
`;
export const SantaImage = styled.img`
  width: 200px; /* 필요한 크기로 조정 */
  height: 180px;
  margin-top: 10%;
 
`;
export const TitleText = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: white;
  margin-bottom: 5%;
  margin-top: 5%;
  align-self: flex-start;
`;

export const EmptyContainer = styled.div`
  width: 80%;
  height: 800px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.0); /* 반투명한 테두리 */
  border-radius: 8px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const StyledButton = styled.button`
  
  width: 320px;
  height: 52px;
  color: #DCDCDC;
  font-size: 16px;
  font-family: 'SUITE', sans-serif;
  font-weight: 700px;
  background-color: #8F1426 ;
  border-radius: 20px;
  margin-top:  20%;
  border-color: #8F1426;
`;