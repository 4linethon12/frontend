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

export const CenteredImage = styled.img`
  width:  30px; /* 필요한 크기로 조정 */
  height: 30px;
   
  
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
export const RightImage = styled.img`
  width:  30px; /* 필요한 크기로 조정 */
  height: 30px;
   margin-left: auto;
  margin-right: 5%;
`;
 
export const RowContainer = styled.div`
  display: flex;
  gap: 1rem; /* 텍스트 간격 */
  justify-content: center;
  justify-content: space-between;
`;



export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 5px; /* 높이를 줄여서 긴 직사각형 모양으로 */
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


export const TitleText = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  color: white;
  margin-top: ${(props) => props.margin || '0'};
  margin-bottom: ${(props) => props.margin || '0'};
`;
export const TitleText2 = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 200; /* Weight */
  font-size: 14px;
  color: white;
  margin-top: ${(props) => props.margin || '0'};
  margin-bottom: ${(props) => props.margin || '0'};
`;
export const TitleText3 = styled.h1`
font-family: "SUITE", sans-serif;
font-weight: 200; /* Weight */
font-size: 12px;
color: white;
margin-top: ${(props) => props.margin || '0'};
margin-bottom: ${(props) => props.margin || '0'};
opacity: 0.4;
`;

export const TitleText4 = styled.h1`

font-family: "SUITE", sans-serif;
font-weight: 200; /* Weight */
font-size: 1.0rem;
color: white;
margin-top: 80%;
margin-bottom: 5%;
opacity: 0.6;
text-decoration: underline;
text-align: center;
`;

