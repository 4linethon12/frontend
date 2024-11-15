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
  justify-content: center;
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
   height: 460px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.0); /* 반투명한 테두리 */
  border-radius: 8px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
 
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
export const RowContainer4 = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-start; /* 부모 컨테이너 기준으로 수평 정렬 */
  align-items: flex-start; /* 부모 컨테이너 */
 
`;

export const RowContainer2 = styled.div`
  display: flex;
  gap: 37px;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

export const CenteredImage = styled.img`
  width: 190px; /* 필요한 크기로 조정 */
  height: 60px;
  margin-left: -8%;
 
`;
export const LogoImage = styled.img`
  width: 25px; /* 필요한 크기로 조정 */
  height: 25px;
  
 
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
   
  width: 90%;
  opacity: 0.3;
`;

export const Container = styled.div`
  width: ${(props) => props.width || '320px'};
  height: ${(props) => props.height || '70px'};
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
export const RowContainerText = styled.div`
  color: #254434;
  font-size: 14px;
  font-family: 'SUITE';
  font-weight: 600;
  overflow: hidden;
`;
export const RowContainerText2 = styled.div`
  color: #254434;
  font-size: 10px;
  font-family: 'SUITE';
  font-weight: 400;
  text-overflow: ellipsis;
   margin-right: 5%;
  display: flex;
  margin-top: 5%;
  align-self: flex-end; 
`;
export const RowContainerText3 = styled.div`
  color: #254434;
  font-size: 10px;
  font-family: 'SUITE';
  font-weight: 600;
   
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
export const Item2= styled.div`
  min-width: 140px;
  height: 140px;
  background-color: #CFD3D5;
  margin-right: 5%;
  border-radius: 8px;
  margin-left:5%;
  display: flex;
  justify-content: center;
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

export const BadgeContainer3 = styled.div`
  width: 124px;
  height:65px;
  background: rgba(255, 253, 253, 0.80);
  border-radius: 10px;
  margin-top: 10%;
  padding: 5%;
`;

export const BadgeText2 = styled.div`
  color: white;
  font-size: 12px;
  font-family: 'SUITE';
  font-weight: 600;
  text-align: center;
`;


export const Item3 = styled.div`
  min-width: 320px;
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

export const BadgeContainer4 = styled.div`
  width: 60px;
  height: 23px;
  background: rgba(143, 20, 38, 0.80);
  border-radius: 19px;
  display: flex;        /* 플렉스박스로 설정 */
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;  /* 수직 가운데 정렬 */
  margin-bottom: 5%;
`;

export const BadgeText4 = styled.div`
  color: white;
  font-size: 10px;
  font-family: 'SUITE';
  font-weight: 600;
  text-align: center;

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


export const RowContainerText5 = styled.div`
  color: #8F1426;
  font-size: 8px;
  font-family: 'SUITE';
  font-weight: 600;
   margin-top: 10%;
`;