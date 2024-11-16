import styled from "styled-components";

export const MainContainer = styled.div`
 background-image: url('/images/background/finalback.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;  
  display: flex;
 
  flex-direction: column;
  align-items: center;

`;


export const EmptyContainer = styled.div`
  width: 320px;
  height: 530px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.0); /* 반투명한 테두리 */
  border-radius: 8px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  
`;


export const WhiteContainer = styled.div`
  width: 280px;
  height: 390px;
  background-color: white; /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.3); /* 반투명한 테두리 */
  border-radius: 15px;
  opacity: 0.9;
  margin: auto; /* 가로와 세로 중앙 정렬 */
   
`;
export const RowContainer = styled.div`
  display: flex;
  gap: 1rem; /* 텍스트 간격 */
  margin-left: auto;
  margin-top: 5%;
  margin-right: 5%;
`;

export const RowContainer2 = styled.div`
  display: flex;
  gap: 1rem; /* 텍스트 간격 */
   justify-content: center;
   align-items: center;
   margin-top: 5%;
`;
export const TitleText = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  color: white;
  margin: ${(props) => props.margin || '0'};
`;

export const TitleText2 = styled.h1`
  font-family: "CAFE24";
  font-weight: 200; /* Weight */
  font-size: 1.2rem;
  color: white;
  
`;



export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px auto;
  width: 90%;
  opacity: 0.3;
  display: flex;
  justify-content: center;

`;


export const Container = styled.div`
  width: 100px;
  height: 45px;
  background-color: rgba(133, 147, 232, 0.1);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  box-sizing: border-box;
 
  margin-top: 5%;
`;

export const ContainerImage = styled.img`
  width: 25px; /* 원하는 크기로 설정 */
  height: 25px;
  margin-right: 0.5rem; /* 텍스트와 이미지 간 간격 */
`;


export const MiniImage = styled.img`
 width: 15px; /* 원하는 크기로 설정 */
 height: 15px;
  background-color: rgba(133, 147, 232, 0.5);
 
`;
export const Text = styled.p`
  font-family: 'SUITE', sans-serif;
  font-size: 14px;
  color: #254434;
  margin: 0.2rem 0;
`;

export const CenteredImage = styled.img`
  width:  30px; /* 필요한 크기로 조정 */
  height: 30px;
   
  
`;
