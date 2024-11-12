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
  justify-content: center;
  flex-direction: column;
  align-items: center;
   
`;

export const EmptyContainer = styled.div`
  width: 90%;
  height: 650px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.3); /* 반투명한 테두리 */
  border-radius: 8px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
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
  margin: ${(props) => props.margin || '0'};
  opacity: 0.5;
`;

export const SmallContainer = styled.div`
  width: 320px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.3); /* 반투명한 테두리 */
  border-radius: 8px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  
`;
export const RowContainer = styled.div`
  display: flex;
   
  justify-content: start;
  align-items: center;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px  auto;
  width: 90%;
  opacity: 0.3;
  
`;