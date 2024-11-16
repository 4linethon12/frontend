import styled from 'styled-components';

export const MainContainer = styled.div`
  background-image: url('/images/Letter/LetterBack.png');
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
  max-width: 600px;
`;

export const highContainer = styled.div`
  width: 355px;
  height: 50px;
  margin: 10px;
  display: flex;
  align-items: end;
  flex-direction: column;
`;

export const RightImage = styled.img`
  width: 30px;
  height: 30px;
  margin-left: auto;
  cursor: pointer;
`;

export const TitleText2 = styled.h1`
  width: 375px;
  display: flex;
  flex-direction: column;
  font-family: "CAFE24";
  font-weight: bold;
  font-size: 32px;
  color: white;
  margin-bottom: 20px;
  text-align: left;
  margin-left: 50px;
`;

export const LetterWrapper = styled.div`
  position: relative; /* 부모 위치 설정 */
  width: 400px; /* 이미지 크기 */
  height: 400px;
`;

export const ContainerImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

export const LetterText = styled.div`
  position: absolute; /* 부모 요소 기준 배치 */
  top: 20%; /* 텍스트 시작 위치 */
  left: 10%;
  width: 80%; /* 텍스트 영역 너비 */
  height: 60%; /* 텍스트 영역 높이 */
  overflow: hidden; /* 텍스트가 넘칠 경우 숨김 */
  font-family: "CAFE24";
  font-size: 14px;
  line-height: 1.5;
  color: black;
   
`;

export const SenderText = styled.p`
  font-family: "SUITE", sans-serif;
  font-weight: bold; /* Weight */
  font-size: 14px;
  color: black;

`;

export const ReceiverText = styled.p`
 font-family: "SUITE", sans-serif;
  font-weight: bold; /* Weight */
  font-size: 14px;
  color: black;
`;

export const TitleText = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const LetterBodyText = styled.p`
  margin-top: 20%;
  font-size: 14px;
  line-height: 1.6;
  color: #000;
  margin-bottom: 20%;
`;



export const EmptyContainer = styled.div`
  width: 200px;
  height: 283px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.3); /* 반투명한 테두리 */
  border-radius: 8px;
   
  display: flex;
  flex-direction: column;
 
`;