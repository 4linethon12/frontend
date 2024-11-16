import { useState, useEffect } from 'react';
import * as styles from '../../style/ManittoPage/BackGround';
import * as style from '../../style/ManittoPage/MakeMissionPage';
import Input from '../../component/manittoo/MissonInput';
import Button from '../../component/manittoo/GroupButton';
import Modal from '../../component/manittoo/Modal';
import { useNavigate } from 'react-router-dom';
import CloseImage from '/images/Group/x.png';
import chervon from '/images/Mission/chevron-left.png';
import createGroupWithMission from '../../api/createGroupWithMission';
import { useDispatch, useSelector } from 'react-redux';
import { setMission, setCode } from '../../redux/userSlice';

const MakeMissionPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [localMission, setLocalMission] = useState(''); // 로컬 상태로 관리
  
    const mission = useSelector((state) => state.user.mission); // Redux 상태에서 미션 가져오기
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // useEffect를 통해 로컬 스토리지 값 초기화
    useEffect(() => {
        const storedMission = localStorage.getItem('mission') || '';
        setLocalMission(storedMission); // 로컬 상태 초기화
    }, []);

    const groupName = localStorage.getItem('groupName');

    const handleMissionChange = (event) => {
        const newMission = event.target.value;
        setLocalMission(newMission); // 로컬 상태 업데이트
        dispatch(setMission(newMission)); // Redux 상태 업데이트
        localStorage.setItem('mission', newMission); // 로컬 스토리지에 저장
    };

    const handleMissionSelect = (selectedMission) => {
        dispatch(setMission(selectedMission));
        localStorage.setItem('mission', selectedMission);
        closeModal();
    };

    const handleCreateRequest = async () => {
        try {
            const currentMission = mission || localStorage.getItem('mission');
            const { code } = await createGroupWithMission(groupName, currentMission);
            dispatch(setCode(code));
            navigate('/GroupComplete');
        } catch (error) {
            console.error('요청 실패:', error.message);
            alert(error.message || '요청 실패: 다시 시도해주세요');
        }
    };

    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);

    const refreshModal = () => {
        alert('미션 목록이 새로고침되었습니다!');
    };

    const handleClickBack = () => navigate('/MakeGroup');
    const handleClickClose = () => navigate('/MainPage2');

    // 버튼 활성화 조건 수정
    const isButtonActive = localMission.trim().length > 0 && localMission.trim().length <= 16;

    return (
        <styles.MainBackground>
            <style.highContainer>
                <style.CancelContainer>
                    <style.RowContainer>
                        <style.CenteredImage
                            src={chervon}
                            alt="chervon"
                            onClick={handleClickBack}
                            style={{ cursor: 'pointer' }}
                        />
                        <style.CenteredImage
                            src={CloseImage}
                            alt="CloseImage"
                            onClick={handleClickClose}
                            style={{ cursor: 'pointer' }}
                        />
                    </style.RowContainer>
                </style.CancelContainer>
                <style.ProgressContainer>
                    <style.ProgressBarContainer>
                        <style.ProgressBarFill style={{ width: `${100}%` }} />
                    </style.ProgressBarContainer>
                </style.ProgressContainer>
            </style.highContainer>
            <style.EmptyContainer>
                <style.TitleText>미션 만들기</style.TitleText>
                <style.TitleText2>
                    흥미진진한 마니또 게임을 위해 미션을 추가해 봐요!
                </style.TitleText2>
                <style.TitleText3>
                    미션
                </style.TitleText3>

                <Input
                    placeholder="미션 입력"
                    value={localMission} // 로컬 상태와 연결
                    onChange={handleMissionChange}
                    maxLength={16} // 최대 16글자 제한
                />
                <style.TitleText5>
                    미션은 최대 16자리까지 입력 가능해요{' '}
                    <span>
                        ({localMission.length}/16)
                    </span>
                </style.TitleText5>

                <style.TitleText4 onClick={openModal} style={{ cursor: 'pointer' }}>
                    미션 추천 받을래요!
                </style.TitleText4>

                <Button 
                    mission={isButtonActive}
                    onClick={handleCreateRequest}
                >
                    다음
                </Button>
            </style.EmptyContainer>

            {isModalOpen && (
                <Modal
                    onClose={closeModal}
                    onRefresh={refreshModal}
                    onMissionSelect={handleMissionSelect}
                />
            )}
        </styles.MainBackground>
    );
};

export default MakeMissionPage;
