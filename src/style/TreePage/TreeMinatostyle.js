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
  flex-direction: column;
  align-items: center;

`;


export const EmptyContainer = styled.div`
  width: 320px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.0); /* 반투명한 테두리 */
  border-radius: 8px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  
`;

export const CenteredImage2 = styled.img`
  width: 170px; /* 필요한 크기로 조정 */
  height: 40px;
  
 
`;

export const RowContainer1 = styled.div`
  display: flex;
  gap: 1rem; /* 텍스트 간격 */
 
`;

export const RowContainer2 = styled.div`
  display: flex;
  gap: 1rem; /* 텍스트 간격 */
  margin-top: 5%;
  align-items: start;
`;




export const TitleText = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: white;
  margin-top: 5%;
  margin-left: 10%;
`;
export const TitleText2 = styled.h1`
  font-family: "CAFE24";
  font-weight: 200; /* Weight */
  font-size: 1.2rem;
  color: white;
  
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


export const BadgeContainer = styled.div`
  width: 200px;
  height: 27px;
  background: rgba(143, 20, 38, 0.80);
  border-radius: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

export const BadgeText = styled.div`
  color: white;
  font-size: 12px;
  font-family: 'SUITE';
  font-weight: 600;
  text-align: center;
`;
export const CenteredImage = styled.img`
  width: 300px; /* 필요한 크기로 조정 */
  height: 410px;
  
   
   
`;