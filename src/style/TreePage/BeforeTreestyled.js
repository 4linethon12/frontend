import styled from "styled-components";
export const MainContainer = styled.div`
  background-image: url('/images/background/treemainto.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;  
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  flex-direction: column;
`;

export const EmptyContainer = styled.div`
  width: 320px;
  height: 650px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.0); /* 반투명한 테두리 */
  border-radius: 8px;
  margin: 10% 0;
  display: flex;
  flex-direction: column;
 
`;

export const TitleText3 = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: bold; /* Weight */
  font-size: 20px;
  color: #7B9F99;
  
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
  
  display: flex;
  flex-direction: column;
  
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
  
  align-items: start;
`;
export const CenteredImage = styled.img`
  width: 300px; /* 필요한 크기로 조정 */
  height: 410px;
  
  
   
`;
export const hint_1 = styled.img`
   position: absolute;
  top: 40%;
  left: -5%;
`;
export const hint_2 = styled.img`
   position: absolute;
  top: 35%;
  left: 30%;

`;
export const hint_3 = styled.img`
  position: absolute;
  top: 50%;
  left: 60%;
`;
export const hint_4 = styled.img`
   position: absolute;
  top: 70%;
  left: 45%;
`;
export const hint_5 = styled.img`
   position: absolute;
  top: 60%;
  left: 25%;
  width: 80px;
  height: 80px;
`;

export const TreeContainer = styled.div`
position: relative; /* 힌트를 트리 위에 배치하기 위해 relative 설정 */
width: 300px; /* 트리 이미지 크기 */
height: 400px; /* 트리 이미지 크기 */
margin: 0 auto; /* 수평 가운데 정렬 */
`;

export const HintContainer = styled.div`
  position: absolute;
  top: ${({ top }) => top || '0%'};
  left: ${({ left }) => left || '0%'};
  display: flex;
  flex-direction: column;
  width: 120px; /* 이미지 크기에 맞춰 조정 */
  height: 70px; /* 이미지 크기에 맞춰 조정 */
  
`;

export const CenteredImage2 = styled.div`
 width: 60px; /* hint_1 크기와 동일하게 설정 */
  height: 43px; /* hint_1 크기와 동일하게 설정 */
  background-color: rgba(255, 0, 0, 0.0); /* 테스트용 배경색 */
  position: absolute; /* 부모인 CenteredImage 기준으로 배치 */
  top: 50%; /* 부모 높이의 50% */
  left: 40%; /* 부모 너비의 40% */
  transform: translate(-50%, -50%); /* 정확히 가운데 정렬 */
  
 
`;

export const CenteredImage3 = styled.div`
width: 50px;
  height: 50px;
  background-color: rgba(255, 0, 0, 0.0); /* 테스트용 배경색 */
  position: absolute; /* 부모인 CenteredImage 기준으로 배치 */
  top: 65%; /* 부모 높이의 50% */
  left: 50%; /* 부모 너비의 50% */
  transform: translate(-50%, -50%); /* 정확히 가운데 정렬 */
 
`;

export const CenteredImage4 = styled.div`
width: 50px;
  height: 50px;
  background-color: rgba(255, 0, 0, 0.0); /* 테스트용 배경색 */
  position: absolute; /* 부모인 CenteredImage 기준으로 배치 */
  top: 50%; /* 부모 높이의 50% */
  left: 65%; /* 부모 너비의 50% */
  transform: translate(-50%, -50%); /* 정확히 가운데 정렬 */
 
`;

export const CenteredImage5 = styled.div`
width: 50px;
  height: 50px;
  background-color: rgba(255, 0, 0, 0.0); /* 테스트용 배경색 */
  position: absolute; /* 부모인 CenteredImage 기준으로 배치 */
  top: 70%; /* 부모 높이의 50% */
  left: 25%; /* 부모 너비의 50% */
  transform: translate(-50%, -50%); /* 정확히 가운데 정렬 */
 
`;

export const CenteredImage6 = styled.div`
width: 70px;
  height: 50px;
  background-color: rgba(255, 0, 0, 0.5); /* 테스트용 배경색 */
  position: absolute; /* 부모인 CenteredImage 기준으로 배치 */
  top: 30%; /* 부모 높이의 50% */
  left: 47%; /* 부모 너비의 50% */
  transform: translate(-50%, -50%); /* 정확히 가운데 정렬 */
 
`;

export const HintText = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: bold;
  font-size: 10px;
  color: white;
  text-align: center;
  margin-top: 5px;
`;
