import styled from "styled-components";

export const MainContainer = styled.div`
  background-image: url('/images/Letter/LetterBack.png'); /* 편지지 이미지 경로 */
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;
  display: flex;
 
  align-items: center;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  width: 80%;
  max-width: 600px; /* 편지지 안에 들어가는 내용의 크기 제한 */
`;

export const TitleText2 = styled.h1`
  font-family: "CAFE24";
  font-weight: bold;
  font-size: 32px;
  color: white;
  margin-bottom: 20px; /* 편지지와의 간격 */
`;

export const BodyText = styled.p`
  font-family: "CAFE24";
  font-size: 16px;
  color: black;
  line-height: 1.5;
`;

export const ContainerImage = styled.img`
width: 264px;
height: 329px;
  
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
  
`;

export const LetterContent = styled.div`
  margin: 20px auto;
  padding: 15px 20px;
  background: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  color: #222;
  line-height: 1.6;
`;

