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
export const TitleText = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  color: white;
  margin: ${(props) => props.margin || '0'};
`;
export const TitleText2 = styled.h1`
  font-family: "CAFE24";
  font-weight: 200; /* Weight */
  font-size: 1.2rem;
  color: white;
  
`;

export const EmptyContainer = styled.div`
  width: 320px;
  height: 380px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.3); /* 반투명한 테두리 */
  border-radius: 8px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 1rem; /* 텍스트 간격 */
  justify-content: center;
  align-items: center;
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
  margin: 20px 0;
  width: 90%;
  opacity: 0.3;
`;
