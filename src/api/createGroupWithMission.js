import axios from 'axios';

const createGroupWithMission = async (groupName, nickname, mission) => {
    const token = localStorage.getItem('token'); // 토큰 가져오기

    const requestData = {
        name: groupName,
        mission: mission,
        group_leader: {
            nickname: nickname,
        },
    };

    console.log("전송 데이터:", requestData); // 요청 데이터 디버깅

    try {
        const response = await axios.post(
            'http://43.201.50.47:8000/api/groups/groups/', // 서버 엔드포인트
            requestData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log("서버 응답:", response.data); // 응답 데이터 확인

        // 정확한 경로에서 code 추출
        const code = response.data?.data?.code;

        if (!code) {
            throw new Error('서버 응답에 코드가 없습니다.');
        }

        return { code }; // code 반환
    } catch (error) {
        console.error('요청 실패:', error);
        throw error; // 에러 상위로 전달
    }
};

export default createGroupWithMission;