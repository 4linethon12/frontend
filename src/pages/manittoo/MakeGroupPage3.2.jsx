// 필요한 모듈 import
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import * as styles from '../../style/ManittoPage/BackGround';
import * as style from '../../style/ManittoPage/MakeGroupPage';
import Input from '../../component/manittoo/Input'; // Input 컴포넌트 import
import Button from '../../component/manittoo/Button';
import { useNavigate } from 'react-router-dom';


const MakeGroupPage = () => {
    const [progress] = useState(50);
    const [groupName, setGroupName] = useState(''); // 그룹 이름 상태 추가
    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/MakeMission'); // 버튼 클릭 시 /MakeMission 경로로 이동
  };

    const handleGroupNameChange = (event) => {
        setGroupName(event.target.value);
    };

    return (
        <styles.MainBackground>
            <style.highContainer>
                <style.ProgressBarContainer>
                    <style.ProgressBarFill style={{ width: `${progress}%` }} />
                </style.ProgressBarContainer>
            </style.highContainer>
            <style.EmptyContainer>
                <style.TitleText margin="10px">그룹 만들기</style.TitleText>
                <style.TitleText2>친구들이 그룹을 잘 찾아올 수 있도록</style.TitleText2>
                <style.TitleText2>그룹 이름을 지어봐요!</style.TitleText2>
                <style.TitleText3 margin="10px">그룹 이름</style.TitleText3>
                
                {/* Input 컴포넌트 추가 */}
                <Input 
                    placeholder="그룹 이름을 입력하세요" 
                    value={groupName} 
                    onChange={handleGroupNameChange} 
                />
                 <style.TitleText3 margin="10px">이름은 최대 10자리까지 입력 가능해요</style.TitleText3>

                 <Button onClick={handleClick}marginTop="100%">다음</Button>
            </style.EmptyContainer>
        </styles.MainBackground>
    );
};

export default MakeGroupPage;