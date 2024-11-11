import styled from "styled-components";

export const MainContainer = styled.div`
  background-image: url('/images/background/Letter.svg'); /* 편지지 이미지 경로 */
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
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