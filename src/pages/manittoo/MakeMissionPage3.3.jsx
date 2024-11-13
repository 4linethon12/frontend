// 필요한 모듈 import
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import * as styles from '../../style/ManittoPage/BackGround';
import * as style from '../../style/ManittoPage/MakeMissionPage';
import Input from '../../component/manittoo/Input';
import Button from '../../component/manittoo/Button';
import Modal from '../../component/manittoo/Modal';
import { useNavigate } from 'react-router-dom';
import CloseImage from '/images/Group/x.png';
import chervon from '/images/Mission/chevron-left.png';
import createGroupWithMission from '../../api/createGroupWithMission';
import { useDispatch, useSelector } from 'react-redux';
import { setMission, setCode } from '../../redux/userSlice';

const MakeMissionPage = () => {
    // 로컬 상태와 Redux 상태 관리
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [groupName, setGroupName] = useState('');
    const mission = useSelector((state) => state.user.mission); // Redux 상태에서 mission 가져오기
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 로컬 스토리지에서 그룹 이름 가져오기
    useEffect(() => {
        const storedGroupName = localStorage.getItem('groupName') || '';
        setGroupName(storedGroupName);
    }, []);

    const nickname = localStorage.getItem('nickname'); // 닉네임 가져오기

    // 입력값 변경 처리
    const handleMissionChange = (event) => {
        const newMission = event.target.value;

        console.log('newMission:', newMission); // 디버깅 로그

        if (!newMission || typeof newMission !== 'string') {
            console.error('Invalid mission value:', newMission);
            return;
        }

        // Redux 상태 및 로컬 스토리지 업데이트
        dispatch(setMission(newMission));
        localStorage.setItem('mission', newMission);
    };

    // 모달에서 미션 선택 처리
    const handleMissionSelect = (selectedMission) => {
        if (!selectedMission) {
            console.error('미션이 선택되지 않았습니다.');
            return;
        }

        // Redux 상태 및 로컬 스토리지 업데이트
        dispatch(setMission(selectedMission));
        localStorage.setItem('mission', selectedMission);
        closeModal();
    };

    // 그룹 생성 요청
    const handleCreateRequest = async () => {
        try {
            const currentMission = mission || localStorage.getItem('mission'); // mission 확인
    
            // createGroupWithMission에서 반환된 code 사용
            const { code } = await createGroupWithMission(groupName, nickname, currentMission);
    
            console.log('받아온 코드:', code); // 받은 코드 디버깅
    
            if (!code) {
                throw new Error('코드를 받을 수 없습니다.');
            }
    
            dispatch(setCode(code)); // Redux 상태 업데이트
            navigate('/GroupComplete'); // 성공 시 완료 페이지로 이동
        } catch (error) {
            console.error('요청 실패:', error.message);
            alert(error.message || '요청 실패: 다시 시도해주세요');
        }
    };

    // 모달 제어 함수
    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);
    const refreshModal = () => {
        alert('미션 목록이 새로고침되었습니다!');
    };

    // 뒤로가기 및 닫기 버튼 처리
    const handleClickBack = () => navigate('/MakeGroup');
    const handleClickClose = () => navigate('/MainPage');

    // UI 렌더링
    return (
        <styles.MainBackground>
            <style.highContainer>
                <style.RowContainer>
                    <style.CenteredImage src={chervon} alt="chervon" onClick={handleClickBack} style={{ cursor: 'pointer' }} />
                    <style.CenteredImage src={CloseImage} alt="CloseImage" onClick={handleClickClose} style={{ cursor: 'pointer' }} />
                </style.RowContainer>
                <style.ProgressBarContainer>
                    <style.ProgressBarFill style={{ width: `${100}%` }} />
                </style.ProgressBarContainer>
            </style.highContainer>
            <style.EmptyContainer>
                <style.TitleText margin="10px">미션 만들기</style.TitleText>
                <style.TitleText2>흥미진진한 마니또 게임을 위해 미션을 추가해 봐요! (최대 2개까지 추가할 수 있어요)</style.TitleText2>
                <style.TitleText3 margin="5%">미션</style.TitleText3>

                <Input
                    placeholder="미션 입력"
                    value={mission} // Redux 상태로 연결
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