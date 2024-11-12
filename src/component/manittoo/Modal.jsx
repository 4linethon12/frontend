import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState } from 'react';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #e0e5e5;
  border-radius: 20px 20px 0 0;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const Handle = styled.div`
  width: 32px;
  height: 4px;
  border-radius: 2px;
  background-color: #d0d0d0;
  margin: 0 auto 10px;
`;

const Title = styled.h1`
  font-family: 'SUITE', sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  color: #2d4632;
  text-align: start;
  margin: 10px 20px 5px 20px;
`;

const Subtitle = styled.p`
  font-family: 'SUITE', sans-serif;
  font-size: 0.9rem;
  color: #2d4632;
  text-align: start;
  margin: 5px 20px;
`;

const RefreshIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.2rem;
  color: #2d4632;
  cursor: pointer;
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background: white;
  color: #2d4632;
  font-size: 0.9rem;
  font-family: 'SUITE', sans-serif;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;

  &:hover {
    background: #d8d8d8;
  }
`;

const Modal = ({ onClose, onRefresh, onMissionSelect }) => {
  const [startY, setStartY] = useState(0);

  // 터치 시작 위치를 저장
  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  // 터치 종료 시 아래로 스와이프한 경우 모달 닫기
  const handleTouchEnd = (e) => {
    const endY = e.changedTouches[0].clientY;
    if (endY - startY > 20) { // 50px 이상 아래로 스와이프했을 때
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer 
        onClick={(e) => e.stopPropagation()} 
        onTouchStart={handleTouchStart} 
        onTouchEnd={handleTouchEnd}
      >
        <Handle /> {/* 모달 상단에 핸들 추가 */}
        <RefreshIcon onClick={onRefresh}>🔄</RefreshIcon>
        <Title>생각나는 미션이 없다면</Title>
        <Subtitle>크리스마또가 추천해드릴게요!</Subtitle>
        <ButtonList>
        <Button onClick={() => onMissionSelect('마니또가 좋아하는 음료 사주기')}>마니또가 좋아하는 음료 사주기</Button>
          <Button onClick={() => onMissionSelect('마니또한테 캐롤 추천해주기')}>마니또한테 캐롤 추천해주기</Button>
          <Button onClick={() => onMissionSelect('마니또랑 같이 밥 먹기')}>마니또랑 같이 밥 먹기</Button>
          <Button onClick={() => onMissionSelect('마니또한테 크리스마스 영화 추천해주기')}>마니또한테 크리스마스 영화 추천해주기</Button>
          <Button onClick={() => onMissionSelect('마니또랑 같이 사진 찍기')}>마니또랑 같이 사진 찍기</Button>
        </ButtonList>
      </ModalContainer>
    </ModalOverlay>
  );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    onRefresh: PropTypes.func.isRequired,
    onMissionSelect: PropTypes.func.isRequired,
};

export default Modal;