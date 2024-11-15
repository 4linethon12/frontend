import styled from "styled-components";

export const MainContainer = styled.div`
 background-image: url('/images/background/LetterWrite.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;  
  display: flex;
  justify-content: center;
  align-items: center;
   flex-direction: column;

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
export const EmptyContainer = styled.div`
  width: 300px;
  height: 630px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.0); /* 반투명한 테두리 */
  border-radius: 8px;
  margin: 20% 0;
  display: flex;
  flex-direction: column;
  
  align-items: flex-start;
  
`;

export const EmptyContainer2 = styled.div`
  width: 300px;
  height: 630px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.3); /* 반투명한 테두리 */
  border-radius: 8px;
  margin: 20% 0;
  display: flex;
  flex-direction: column;
  gap: 178px;
  align-items: flex-start;
  
`;


export const StyledDiv = styled.div`
  font-size: 24px;
`;
 
export const TitleText = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: white;
  margin-top: ${(props) => props.marginTop || '0'};
`;


export const TitleText2 = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 500px;
  font-size: 14px;
  color: white;
  margin-top: 66px;
`;

export const StyledButton = styled.button`
  width: 300px;
  height: 63px;
  color: ${(props) => (props.isActive ? 'white' : '#B2AEAE')}; /* 글자 색상 변경 */
  font-size: 16px;
  font-family: 'SUITE', sans-serif;
  font-weight: 700; /* 'px' 제거: 숫자로만 사용 */
  background-color: ${(props) => (props.isActive ? '#8F1426' : '#CFD3D5')}; /* 배경색 변경 */
  text-align: center;
  border-radius: 40px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin-top: 186px;
`;



export const Container = styled.div`
  width: ${(props) => props.width || '300px'};
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
export const HintInput = styled.input`
  width: 100%;
  height: 60px;
  border: none;
  background: transparent;
  font-family: 'SUITE', sans-serif;
  font-size: 16px;
  color: #254434;
  outline: none;
  font-weight: 600;
  text-align: center; /* 가로 정렬 */
  line-height: 60px; /* 높이와 같은 값으로 수직 정렬 */
  &::placeholder {
    text-align: center; /* placeholder도 가운데 정렬 */
  }
  &:focus {
    outline: none;
  }
`;

export const HintText = styled.span`
  position: absolute;
  color: #7B9F99;
  font-size: 14px;
  font-family: 'SUITE', sans-serif;
  pointer-events: none;
  opacity: ${(props) => (props.isFocused ? 0 : 1)};
  transition: opacity 0.3s;
  line-height: 30px; 
  white-space: pre-line;
  
  text-align: center; /* 텍스트 중앙 정렬 */
`;


export const ExitedImage = styled.img`
  width:  30px; /* 필요한 크기로 조정 */
  height: 30px;
   margin-left: auto;
  margin-right: 5%;
`;