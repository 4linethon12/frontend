import styled from "styled-components";



export const MainContainer = styled.div`
 background-image: url('/images/background/treemainto.svg');
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
  height: 150px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.0); /* 반투명한 테두리 */
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  margin-top: 15%;
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
  top: 50%; /* 부모 높이의 50% */
  left: 25%; /* 부모 너비의 50% */
  transform: translate(-50%, -50%); /* 정확히 가운데 정렬 */
 
`;

export const CenteredImage6 = styled.div`
width: 70px;
  height: 50px;
  background-color: rgba(255, 0, 0, 0.5); /* 테스트용 배경색 */
  position: absolute; /* 부모인 CenteredImage 기준으로 배치 */
  top: 70%; /* 부모 높이의 50% */
  left: 47%; /* 부모 너비의 50% */
  transform: translate(-50%, -50%); /* 정확히 가운데 정렬 */
 
`;


export const HintText = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: white;
 
`;

export const RowContainer1 = styled.div`
  display: flex;
  gap: 1rem; /* 텍스트 간격 */
 
`;

export const RowContainer2 = styled.div`
  display: flex;
   
  
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
  margin-left: 5px;
`;
export const TitleText5 = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: bold; /* Weight */
  font-size: 12px;
  color: #7B9F99;
  margin-top: 4%;
  margin-bottom: 2%;
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
export const LogoImage = styled.img`
  width: 190px; /* 필요한 크기로 조정 */
  height: 60px;
  margin-left: -8%;
 
`;
export const CenteredImage = styled.div`
 width: 300px; /* 트리 이미지 크기 */
  height: 410px;
  background-image: url('/images/Tree.png'); /* 트리 이미지 배경 설정 */
  background-size: cover;
  background-position: center;
  position: relative; /* 자식 요소를 배치할 수 있도록 설정 */
`;


export const HintContainer = styled.div`
  position: absolute;
  top: ${({ top }) => top || '0%'};
  left: ${({ left }) => left || '0%'};
  display: flex;
  flex-direction: column;
  width: 70px; /* 이미지 크기에 맞춰 조정 */
  height: 70px; /* 이미지 크기에 맞춰 조정 */
  
`;


export const hint_1 = styled.img`
    width: 60px;
    height: 43px;
   
    
`;
export const hint_2 = styled.img`
     width: 48px;
     height: 60px;
`;
export const hint_3 = styled.img`
 width: 68px;
 height: 68px;
`;
export const hint_4 = styled.img`
 width: 73px;
 height: 85px;
`;
export const hint_5 = styled.img`
 width: 80px;
 height: 80px;
 
`;
export const TreeContainer = styled.div`
position: relative; /* 힌트를 트리 위에 배치하기 위해 relative 설정 */
width: 300px; /* 트리 이미지 크기 */
height: 400px; /* 트리 이미지 크기 */
margin: 0 auto; /* 수평 가운데 정렬 */
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
 


export const EmptyContainer2 = styled.div`
  width: 320px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.3); /* 반투명한 테두리 */
  border-radius: 8px;
   
  display: flex;
  flex-direction: column;
  margin-top: 20%;
`;

export const CenteredImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 410px;
`;