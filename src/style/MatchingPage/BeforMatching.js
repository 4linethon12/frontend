import styled from 'styled-components';

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
  
  flex-direction: column;
  align-items: center;
   
`;

export const EmptyContainer = styled.div`
  width: 90%;
  height: 650px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.0); /* 반투명한 테두리 */
  border-radius: 8px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
 
  
`;
export const TitleText = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: white;
  margin: ${(props) => props.margin || '0'};
`;
export const SmallText = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: white;
  margin-bottom: 5%;
  opacity: 0.5;
  align-items: start;
  text-align: left; 
   
`;

export const SmallContainer = styled.div`
  width: 320px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.0); /* 반투명한 테두리 */
  border-radius: 8px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  
`;
export const RowContainer = styled.div`
  display: flex;
  
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px  auto;
  width: 95%;
  opacity: 0.3;
  
`;


export const RightImage = styled.img`
  width:  30px; /* 필요한 크기로 조정 */
  height: 30px;
   margin-left: auto;
   margin-right: 5%;
   margin-top: 3%;
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