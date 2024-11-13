// MakeGroupPage.js
import { useState } from 'react';
import * as styles from '../../style/ManittoPage/BackGround';
import * as style from '../../style/ManittoPage/MakeGroupPage';
import Input from '../../component/manittoo/Input'; 
import Button from '../../component/manittoo/Button';
import { useNavigate } from 'react-router-dom';
import CloseImage from '/images/Group/x.png';
 
const MakeGroupPage = () => {
    const [progress] = useState(50);
    const [groupName, setGroupNameLocal] = useState('');
    const navigate = useNavigate();
    

   
    const handleNextClick = () => {
        if (groupName.trim() === "") {
            alert("그룹 이름을 입력해 주세요.");
            return;
        }
        localStorage.setItem('groupName', groupName); // 그룹 이름을 로컬 스토리지에 저장
        navigate('/MakeMission'); // 다음 페이지로 이동
    };

    const handleClickClose = () => {
        navigate('/MainPage');
    };

    const handleGroupNameChange = (event) => {
        setGroupNameLocal(event.target.value);
    };

    return (
        <styles.MainBackground>
            <style.highContainer>
                <style.RowContainer>
                    <style.LeftImage
                        src={CloseImage}
                        alt="CloseImage"
                        onClick={handleClickClose}
                        style={{ cursor: 'pointer' }}
                    />
                </style.RowContainer>
                <style.ProgressBarContainer>
                    <style.ProgressBarFill style={{ width: `${progress}%` }} />
                </style.ProgressBarContainer>
            </style.highContainer>
            <style.EmptyContainer>
                <style.TitleText>그룹 만들기</style.TitleText>
                <style.TitleText2>친구들이 그룹을 잘 찾아올 수 있도록</style.TitleText2>
                <style.TitleText2>그룹 이름을 지어봐요!</style.TitleText2>
                <style.TitleText3>그룹 이름</style.TitleText3>
                
                <Input 
                    placeholder="그룹 이름을 입력" 
                    value={groupName} 
                    onChange={handleGroupNameChange} 
                />
                <style.TitleText3 margin="10px">이름은 최대 10자리까지 입력 가능해요</style.TitleText3>

                <Button onClick={handleNextClick} marginTop="100%">다음</Button>
            </style.EmptyContainer>
        </styles.MainBackground>
    );
};

export default MakeGroupPage;