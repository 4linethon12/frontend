import styled from 'styled-components';
import { ScrollContainer } from 'react-indiana-drag-scroll';

export const MainBackground = styled.div`
 background-image: url('/images/mainpage/MainBack.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;  
  display: flex;
  
  flex-direction: column;
  align-items: center;

`;
 
export const TitleText = styled.h1`
 font-family: "SUITE", sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: white;
  margin: ${(props) => props.margin || '0'};
`;


export const TitleText2 = styled.h1`
  font-family: "CAFE24";
  font-weight: 200; /* Weight */
  font-size: 1.2rem;
  color: white;
  
`;

export const MiniText = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 400px;
  font-size: 12px;
  color: #184E40;
  display: flex;
  align-items: center;
  justify-content: center;
   
`;
export const TitleText3 = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: white;
  margin-top: 10%;
 
  margin-bottom: 10%;
`;
export const EmptyContainer = styled.div`
 width: 320px;
  height: 420px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.0); /* 반투명한 테두리 */
  border-radius: 8px;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
 
`;
export const EmptyContaine2 = styled.div`
  width: 103px;
  height: 75;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.3); /* 반투명한 테두리 */
  display: flex;              /* 플렉스 박스 설정 */
  flex-direction: column;     /* 자식 요소를 세로로 정렬 */
  justify-content: center;    /* 수직 중앙 정렬 */
  align-items: center; 
 
 
`;
export const MiniContainer = styled.div`
  width: 80px;
  height: 30px;
  background-color: rgba(255, 253, 253, 0.8); /* 반투명한 배경색 */
  display: flex;
  border-radius: 19px;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
 
 
`;


export const RowContainer = styled.div`
   display: flex;
  gap: 1rem; /* 텍스트 간격 */
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;
  justify-content: space-between;
 
`;

export const BadgeContainer4 = styled.div`
  width: 60px;
  height: 23px;
  background: rgba(143, 20, 38, 0.80);
  border-radius: 19px;
  display: flex;        /* 플렉스박스로 설정 */
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;  /* 수직 가운데 정렬 */
  
`;

export const BadgeText4 = styled.div`
  color: white;
  font-size: 10px;
  font-family: 'SUITE';
  font-weight: 600;
  text-align: center;

`;

export const RowContainer2 = styled.div`
  display: flex;
  gap: 1rem; /* 텍스트 간격 */
  justify-content: center;
  align-items: center;
`;

export const CenteredImage = styled.img`
  width: 190px; /* 필요한 크기로 조정 */
  height: 60px;
  margin-left: -8%;
 
`;
 
export const LeftImage = styled.img`
  width: 50px; /* 필요한 크기로 조정 */
  height: 60px;
  
 
`;

export const SantaImage = styled.img`
  width: 50px; /* 필요한 크기로 조정 */
  height: 50px;
  margin-bottom: 5%;
 
`;
export const Image2 = styled.img`
  width: 50px; /* 이미지 크기 조절 */
  height: 50px;
  margin-top: 10%;
  margin-bottom: 10%;
`;

export const RightImage = styled.img`
  width: 30px; /* 필요한 크기로 조정 */
  height: 30px;
  color: #184E40;
  
 
`;

export const SantaContainer = styled.div`
  width: 320px;
  height: 190px;
  background-color: rgba(255, 255, 255, 0.1); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.5); /* 반투명한 테두리 */
  border-radius: 8px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.hr`
   border: none;
  border-top: 1px solid #ccc;
  margin-top: 5%;
  width: 90%;
  opacity: 0.3;
`;
export const Divider2 = styled.hr`
 
  width: 90%;
  opacity: 0.3;
  background-color: #CFD3D5;;
`;

export const Container = styled.div`
  width: ${(props) => props.width || '318px'};
  height: ${(props) => props.height || '70px'};
  background-color: rgba(255, 253, 253, 0.8); /* 배경색과 투명도 설정 */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
 
`;

// 텍스트 스타일 (윗줄, 아랫줄 동일 스타일)
export const Text = styled.p`
font-family: 'SUITE', sans-serif;
  font-size: 13px;
  color: #000;
  margin: 0.2rem 0;
  white-space: pre-line;
`;



export const Container2 = styled.div`
  width: ${(props) => props.width || '320px'};
  height: ${(props) => props.height || '200px'};
  background-color: rgba(255, 253, 253, 0.8); /* 배경색과 투명도 설정 */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  margin-top: 10%; /* 숫자일 경우 px 추가 */
`;

export const ContainerText = styled.p`
  font-family: 'SUITE', sans-serif;
  font-size: 20px;
  color: #254434;
  font-weight: bold;
   
`;

export const ContainerImage = styled.img`
  width: 72px; /* 원하는 이미지 크기 */
  height: 72px;
  margin-bottom: -55px;
  z-index: 1;
`;

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`;

export const BottomContainer = styled.div`
  width: ${(props) => props.width || '320px'};
  height: ${(props) => props.height || '140px'};
  background-color: rgba(255, 253, 253, 0.8); /* 배경색과 투명도 설정 */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   border-radius: 15px;
  box-sizing: border-box;
   
`;
export const RowContainer3 = styled.div`
  display: flex;
  gap: 1rem; /* 요소 간 간격 */
  overflow-x: auto; /* 가로 스크롤 활성화 */
  white-space: nowrap; /* 요소가 한 줄에 표시되도록 설정 */
  padding: 1rem;
  margin-top: 5%;
  margin-bottom: 5%;
  
`;

export const BadgeContainer = styled.div`
  width: 160px;
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

export const DragScrollContainer = styled(ScrollContainer)`
  display: flex;
  width: 100%;
  height: 30vh;
  overflow-x: auto;
  justify-content: center;
  
  
`;

export const Item = styled.div`
  min-width: 140px;
  height: 140px;
  background-color: #CFD3D5;
  display: flex;
  border-radius: 8px;
  margin-left:10%;
 
`; 
export const Item3 = styled.div`
  min-width: 140px;
  height: 140px;
  background-color: #CFD3D5;
  margin-right: 5%;
  border-radius: 8px;
  margin-left:5%;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;
  flex-direction: column;
`;


export const BadgeContainer2 = styled.div`
  width: 80px;
  height:30px;
  background: rgba(143, 20, 38, 0.80);
  border-radius: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

 

export const BadgeText2 = styled.div`
  color: white;
  font-size: 12px;
  font-family: 'SUITE';
  font-weight: 600;
  text-align: center;
`;

export const RowContainerText5 = styled.div`
  color: #8F1426;
  font-size: 8px;
  font-family: 'SUITE';
  font-weight: 600;
   
`;


export const Item2 = styled.div`
  min-width: 320px; /* 카드의 최소 너비 설정 */
  height: 140px; /* 카드의 높이 설정 */
  background-color: #CFD3D5; /* 배경 색상 */
 
  border-radius: 8px; /* 둥근 모서리 */
 
  display: flex;
  flex-direction: row; /* 이미지와 텍스트를 가로로 배치 */
  
  justify-content: center;
  align-items: center;
 
 
`;

export const RowContainer4 = styled.div`
  display: flex;
  flex-direction: column; /* 이름과 이미지를 세로로 배치 */
  margin-left: 10%;
  margin-right: 15px; /* 텍스트와의 간격 조정 */
 
 
`;

export const LogoImage = styled.img`
  width: 60px; /* 이미지 크기 설정 */
  height: 60px;
  border-radius: 50%; /* 원형으로 만들기 */
  margin-bottom: 8px;
`;

export const RowContainerText = styled.div`
  font-family: 'SUITE', sans-serif;
  font-size: 14px; /* 글자 크기 */
  font-weight: 600;
  color: #184E40; /* 글자 색상 */
  text-align: center;
`;

export const RowContainer5 = styled.div`
  display: flex;
  flex-direction: column; /* 미션 박스와 텍스트를 세로로 배치 */
  text-align: center;
 margin-left: 5%;
  width: 100%; /* 박스가 남은 공간을 차지하도록 설정 */
  height: 100%; /* 부모 요소 높이에 맞추기 */
  margin-top: 10%;
`;

export const BadgeContainer3 = styled.div`
  width: 177px;
  height: 75px;
  background: rgba(255, 253, 253, 0.8); /* 반투명 배경 */
  border-radius: 10px; /* 둥근 모서리 */
  margin-top: 8px; /* 상단 여백 */
  padding: 10px; /* 내부 여백 */
  display: flex;
  flex-direction: column; /* 텍스트를 세로로 배치 */
   
  align-items: flex-start; /* 텍스트를 왼쪽 정렬 */
`;

export const RowContainerText3 = styled.div`
  font-family: 'SUITE', sans-serif;
  font-size: 10px; /* "MISSION" 텍스트 크기 */
  font-weight: 600;
  color: #254434; /* 텍스트 색상 */
  margin-bottom: 5px; /* 아래 텍스트와 간격 추가 */
`;

export const RowContainerText2 = styled.div`
  font-family: 'SUITE', sans-serif;
   margin-left: 15%;
  font-weight: 400;
  color: #254434; /* 텍스트 색상 */
   
  text-overflow: ellipsis; /* 텍스트가 넘칠 경우 말줄임 처리 */
  white-space: nowrap; /* 한 줄로 표시 */
 
  font-size: 11px; /* 미션 내용 텍스트 크기 */
 
`;

export const RowContainerText0 = styled.div`
  font-family: 'SUITE', sans-serif;
    
  font-weight: 400;
  color: #254434; /* 텍스트 색상 */
   
  text-overflow: ellipsis; /* 텍스트가 넘칠 경우 말줄임 처리 */
  white-space: nowrap; /* 한 줄로 표시 */
 
  font-size: 11px; /* 미션 내용 텍스트 크기 */
 
`;