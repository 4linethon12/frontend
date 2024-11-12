// 필요한 모듈 import
import  { useState } from 'react';
import * as styles from '../../style/ManittoPage/BackGround';
import * as style from '../../style/ManittoPage/MakeMissionPage';
import Input from '../../component/manittoo/Input';
import Button from '../../component/manittoo/Button';
import Modal from '../../component/manittoo/Modal';
import { useNavigate } from 'react-router-dom';
import CloseImage from '/images/Group/x.png';
import chervon from '/images/Mission/chevron-left.png';
import createGroupWithMission from '../../api/createGroupWithMission'; // 새로운 API 요청 함수 import
import { useSelector } from 'react-redux'; // Redux에서 그룹 이름 가져오기

const MakeMissionPage = () => {
    const [progress] = useState(100);
    const [mission, setMission] = useState(''); // 미션 상태 추가
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    
    // Redux에서 그룹 이름 가져오기
    const groupName = useSelector((state) => state.group.groupName);
    const nickname = localStorage.getItem('nickname'); // 닉네임 가져오기

    const handleCreateRequest = async () => {
        try {
            await createGroupWithMission(groupName, nickname, mission); // 그룹 이름, 닉네임, 미션을 모두 포함해 서버에 요청
            navigate('/GroupComplete'); // 성공 시 완료 페이지로 이동
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            alert('요청 실패: 다시 시도해주세요');
        }
    };

    const handleMissionChange = (event) => {
        setMission(event.target.value);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const refreshModal = () => {
        alert("미션 목록이 새로고침되었습니다!");
    };

    const handleMissionSelect = (selectedMission) => {
        setMission(selectedMission); // 선택된 미션을 상태에 저장
        closeModal();
    };

    const handleClickBack = () => {
        navigate('/MakeGroup'); // 이전 페이지로 이동
    };

    const handleClickClose = () => {
        navigate('/MainPage'); // 메인 페이지로 이동
    };

    return (
        <styles.MainBackground>
            <style.highContainer>
                <style.RowContainer>
                    <style.CenteredImage src={chervon} alt="chervon" onClick={handleClickBack} style={{ cursor: 'pointer' }} />
                    <style.CenteredImage src={CloseImage} alt="CloseImage" onClick={handleClickClose} style={{ cursor: 'pointer' }} />
                </style.RowContainer>
                <style.ProgressBarContainer>
                    <style.ProgressBarFill style={{ width: `${progress}%` }} />
                </style.ProgressBarContainer>
            </style.highContainer>
            <style.EmptyContainer>
                <style.TitleText margin="10px">미션 만들기</style.TitleText>
                <style.TitleText2>흥미진진한 마니또 게임을 위해 미션을 추가해 봐요! (최대 2개까지 추가할 수 있어요)</style.TitleText2>
                <style.TitleText3 margin="5%">미션</style.TitleText3>
                
                <Input 
                    placeholder="미션 입력" 
                    value={mission} 
                    onChange={handleMissionChange} 
                />
                <style.TitleText3 margin="5%">미션은 최대 10자리까지 입력 가능해요</style.TitleText3>
                
                <style.TitleText4 onClick={openModal} style={{ cursor: 'pointer' }}>
                    미션 추천 받을래요!           
                </style.TitleText4>
                
                <Button onClick={handleCreateRequest}>다음</Button>
            </style.EmptyContainer>

            {isModalOpen && (
                <Modal onClose={closeModal} onRefresh={refreshModal} onMissionSelect={handleMissionSelect} />
            )}
        </styles.MainBackground>
    );
};

export default MakeMissionPage;