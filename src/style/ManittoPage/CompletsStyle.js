import styled from "styled-components";

export const StyledDiv = styled.div`
  font-size: 24px;
`;

export const MainBackground = styled.div`
 width: 100%;
  min-height: 100vh; 
  overflow: hidden;
  background: linear-gradient(
    0deg,
    #0c1929 0%,
    #184e40 100%
    
  );
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
   
`;

export const TitleText = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: white;
  margin-top: ${(props) => props.marginTop || '0'};
`;


export const TitleText2 = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: white;
  margin-top: 5%;
  opacity: 0.4;
`;

export const Container = styled.div`
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
  font-size: 14px;
  color: #254434;
   
`;

export const ContainerImage = styled.img`
  width: 72px; /* 원하는 이미지 크기 */
  height: 72px;
  margin-bottom: 1rem; /* 텍스트와의 간격 */
  
`;

export const StyledButton = styled.button`
  width: 110px;
  height: 30px;
   
  color: white;
  font-size: 12px;
  font-family: 'SUITE', sans-serif;
  background-color:#8F1426CC;
  border: none;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
 
  margin-top: 5%; // margin-top 추가
`;