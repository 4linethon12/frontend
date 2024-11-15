// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // axios import
import * as styles from '../../style/ManittoPage/BackGround';
import * as style from '../../style/ManittoPage/MakeGroupPage';
import Input from '../../component/manittoo/Input'; // Input 컴포넌트 import
import Button from '../../component/manittoo/Button';
import chervon from '/images/Mission/x.png';

const JoinGroupPage = () => {
    const [inputCode, setInputCode] = useState(''); // 입력된 코드 상태 추가
    const navigate = useNavigate();
    const token = localStorage.getItem('token'); // JWT 토큰 가져오기

    // 입장 코드 변경 핸들러
    const handleInputCodeChange = (event) => {
        setInputCode(event.target.value);
    };

    // 그룹 코드 전송 함수
    const handleSubmitCode = async () => {
        try {
            console.log('입력된 코드:', inputCode);
            console.log('JWT 토큰:', token);

            // 서버로 그룹 코드 전송
            await axios.post(
                `http://43.201.50.47:8000/api/groups/groups/${inputCode}/join/`, // inputCode를 경로에 사용
                {}, // 요청 데이터가 필요 없는 경우 빈 객체 전달
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Authorization 헤더 설정
                        'Content-Type': 'application/json', // JSON 형식 헤더
                    },
                }
            );

            console.log('그룹 코드 전송 성공');
            alert('그룹 참가에 성공했습니다!');
            navigate('/Mainpage2'); // 성공하면 이동
        } catch (error) {
            console.error('그룹 코드 전송 실패:', error.response || error.message);

            // 에러 메시지에 따른 안내
            if (error.response?.status === 404) {
                alert('그룹을 찾을 수 없습니다. 코드를 확인해주세요.');
            } else if (error.response?.status === 401) {
                alert('인증에 실패했습니다. 다시 로그인하세요.');
            } else {
                alert('그룹 참가에 실패했습니다. 다시 시도해주세요.');
            }
        }
    };

    return (
        <styles.MainBackground>
            <style.highContainer>
                <style.CenteredImage src={chervon} alt="chervon"
                    onClick={() => navigate('/MainPage2')} // 뒤로 가는 버튼 처리
                    style={{ cursor: 'pointer' }}  
                />
                <style.ProgressBarContainer>
                    <style.ProgressBarFill style={{ width: '50%' }} />
                </style.ProgressBarContainer>
            </style.highContainer>

            <style.EmptyContainer>
                <style.TitleText margin="10px">그룹 입장하기</style.TitleText>
                <style.TitleText2>입장 코드를 입력하고 그룹에 입장해서</style.TitleText2>
                <style.TitleText2> 함께 마니또를 찾아봐요!</style.TitleText2>

                <style.TitleText3 margin="10px">입장 코드</style.TitleText3>

                {/* 입장 코드 입력 */}
                <Input 
                    placeholder="입장 코드를 입력하세요" 
                    value={inputCode} 
                    onChange={handleInputCodeChange} 
                />

                <Button onClick={handleSubmitCode} marginTop="100%">다음</Button>
            </style.EmptyContainer>
        </styles.MainBackground>
    );
};

export default JoinGroupPage;