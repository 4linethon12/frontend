// GroupCompletePage.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // useNavigate 임포트
import * as style from '../../style/ManittoPage/CompletsStyle';

const GroupCompletePage = () => {
    // Redux에서 저장된 code 값 가져오기
    const code = useSelector((state) => state.user.code);
    const navigate = useNavigate(); // navigate 훅 사용

    // 코드 복사 함수
    const handleCopyCode = () => {
        navigator.clipboard.writeText(code) // 클립보드에 code 복사
            .then(() => {
                alert("입장 코드가 복사되었습니다!");
                navigate('/MainPage'); // 코드 복사 후 MainPage로 이동
            })
            .catch(() => alert("코드 복사에 실패했습니다."));
    };

   
    console.log('Redux에서 가져온 코드:', code); // Redux 상태 디버깅

    return (
        <style.MainBackground>
            <style.StyledDiv>🎄</style.StyledDiv>
            <style.TitleText>그룹이 만들어졌어요!</style.TitleText>
            <style.TitleText2>입장 코드를 복사해서 친구들에게 공유해주세요</style.TitleText2>
            <style.Container marginTop="1rem">
                <style.ContainerImage src="images/Group/Logo.png" alt="산타이미지" />
                <style.ContainerText>코드: {code}</style.ContainerText> {/* 코드 표시 */}
                <style.StyledButton onClick={handleCopyCode}>입장코드 복사하기</style.StyledButton>
            </style.Container>
        </style.MainBackground>
    );
};

export default GroupCompletePage;