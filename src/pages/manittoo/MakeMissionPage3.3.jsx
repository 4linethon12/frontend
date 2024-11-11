// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import * as styles from '../../style/ManittoPage/BackGround';
import * as style from '../../style/ManittoPage/MakeMissionPage';
import Input from '../../component/manittoo/Input'; // Input 컴포넌트 import
import Button from '../../component/manittoo/Button';
import Modal from '../../component/manittoo/Modal';
import { useNavigate } from 'react-router-dom';

const MakeMissionPage = () => {
    const [progress] = useState(100);
    const [groupName, setGroupName] = useState(''); // 그룹 이름 상태 추가
    const navigate = useNavigate();


    const handleClick = () => {
        navigate('/GroupCOmplete'); // 버튼 클릭 시 /MakeMission 경로로 이동
      };
    

    const handleGroupNameChange = (event) => {
        setGroupName(event.target.value);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    // 모달 열기 함수
    const openModal = () => setIsModalOpen(true);

    // 모달 닫기 함수
    const closeModal = () => setIsModalOpen(false);

    // 모달 새로고침 기능 (예시)
    const refreshModal = () => {
        alert("미션 목록이 새로고침되었습니다!");
    };

    const handleMissionSelect = (mission) => {
        setGroupName(mission); // 선택된 미션을 groupName 상태에 저장
        closeModal(); // 모달 닫기
    };

    return (
        <styles.MainBackground>
            <style.highContainer>
                <style.ProgressBarContainer>
                 
                    <style.ProgressBarFill style={{ width: `${progress}%` }} />
                </style.ProgressBarContainer>
            </style.highContainer>
            <style.EmptyContainer>
                <style.TitleText margin="10px">미션 만들기</style.TitleText>
                <style.TitleText2>흥미진진한 마니또 게임을 위해</style.TitleText2>
                <style.TitleText2>미션을 추가해 봐요!(최대 2개까지 추가할 수 있어요)</style.TitleText2>
                <style.TitleText3 margin="10px">미션</style.TitleText3>
                
                {/* Input 컴포넌트 추가 */}
                <Input 
                    placeholder="미션 입력" 
                    value={groupName} 
                    onChange={handleGroupNameChange} 
                />
                <style.TitleText3 margin="10px">미션은 최대 10자리까지 입력 가능해요</style.TitleText3>
                
                {/* 클릭 시 모달을 여는 기능 추가 */}
                <style.TitleText4 onClick={openModal} style={{ cursor: 'pointer' }}>
                    미션 추천 받을래요!
                </style.TitleText4>
                
                <Button onClick={handleClick}>다음</Button>
            </style.EmptyContainer>

            {/* 모달을 조건부로 렌더링 */}
            {isModalOpen && (
                <Modal onClose={closeModal} onRefresh={refreshModal} onMissionSelect={handleMissionSelect} />
            )}
        </styles.MainBackground>
    );
};

export default MakeMissionPage;