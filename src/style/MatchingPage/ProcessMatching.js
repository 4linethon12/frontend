import styled from 'styled-components';

export const MainContainer = styled.div`
 background-image: url('/images/background/processback.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;  
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

`;

export const TitleText = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: white;
  margin: ${(props) => props.margin || '0'};
  margin-bottom: 5%;
   
`;


export const TitleText2 = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: white;
  margin: ${(props) => props.margin || '0'};
  margin-top: 10%;
   
`;


export const EmptyContainer = styled.div`
  width: 90%;
  height: 650px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.3); /* 반투명한 테두리 */
  border-radius: 8px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;
