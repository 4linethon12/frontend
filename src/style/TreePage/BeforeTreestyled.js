import styled from "styled-components";

export const MainContainer = styled.div`
 background-image: url('/images/background/treemainto.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;  
  display: flex;
  justify-content: center;
   
 
`;
export const EmptyContainer = styled.div`
  width: 320px;
  height: 650px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.3); /* 반투명한 테두리 */
  border-radius: 8px;
  margin: 20% 0;
  display: flex;
  flex-direction: column;
  
`;


export const TitleText3 = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: bold; /* Weight */
  font-size: 20px;
  color: #7B9F99;
  
`;

export const TitleText4 = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: bold; /* Weight */
  font-size: 20px;
  color: white;
  
`;
export const RowContainer1 = styled.div`
  display: flex;
  gap: 1rem; /* 텍스트 간격 */
  display: flex;
  
  
`;

export const RowContainer2 = styled.div`
  display: flex;
  gap: 1rem; /* 텍스트 간격 */
  margin-top: 5%;
  align-items: start;
`;
export const CenteredImage = styled.img`
  width: 300px; /* 필요한 크기로 조정 */
  height: 410px;
  
  margin: 0 auto; /* 가로 중앙 정렬 */
  padding: 20px 0; /* 필요한 여백으로 조정 */
`;
