import styled from 'styled-components';


export const EmptyContainer = styled.div`
  width: 330px;
  height: 630px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.0); /* 반투명한 테두리 */
  border-radius: 8px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  
`;
 


export const highContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.0); /* 반투명한 테두리 */
  border-radius: 8px;

  display: flex;  
  flex-direction: column;
  
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px; /* 높이를 줄여서 긴 직사각형 모양으로 */
  background-color: #17493E; /* 배경을 어두운 색으로 설정 */

  overflow: hidden;
`;

// 진행 바 스타일
export const ProgressBarFill = styled.div`
  height: 100%;
  width: ${(props) => props.progress}%; /* 진행률에 따라 길이 변경 */
  background-color: #FFFFFF; /* 하얀색 배경 */
  transition: width 0.3s ease-in-out;
`;
export const CenteredImage = styled.img`
  width:  30px; /* 필요한 크기로 조정 */
  height: 30px;
  margin-left: 90%;
`;
export const CenteredImage2 = styled.img`
  width:  30px; /* 필요한 크기로 조정 */
  height: 30px;
   
  
`;


 

export const RowContainer = styled.div`
  display: flex;
  gap: 1rem; /* 텍스트 간격 */
  justify-content: center;
  align-items: space-between;
`;
export const RowContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  
`;

export const CancelContainer = styled.div`
  margin: 10px;
`;

export const ProgressContainer = styled.div `
  padding: 0px;
  margin: 0px;
`



export const LeftImage = styled.img`
  width:  30px; /* 필요한 크기로 조정 */
  height: 30px;
   margin-left: auto;
  
`;

export const TitleText = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: white;

  margin-top: 33px;
`;

export const TitleText2 = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 200; /* Weight */
  font-size: 14px;
  color: white;
  margin-top: 22px;
   
   
`;

export const Span = styled.div`
   margin-left: 20%; 
  font-size: 14px;
   
   
`;

export const TitleText3 = styled.h1`
 font-family: "SUITE", sans-serif;
font-weight: 300; /* Weight */
font-size: 14px;
color: white;
 margin-top: 22px;
 margin-bottom: 5%;
opacity: 0.4;
`;

export const TitleText4 = styled.h1`
display: flex;
 font-family: "SUITE", sans-serif;
font-weight: 300; /* Weight */
font-size: 14px;
color: white;
 margin-top: 22px;
 margin-bottom: 5%;
 justify-content: space-between;
opacity: 0.4;
`;