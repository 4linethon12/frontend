// src/api/createGroupWithMission.js
import axios from 'axios';

const createGroupWithMission = async (groupName, nickname, mission) => {
    const token = localStorage.getItem('token');
    
    try {
        const response = await axios.post(
            'http://43.201.50.47:8000/api/groups/groups/',
            {
                name: groupName,
                mission: mission,
                group_leader: {
                    nickname: nickname, // nickname을 객체로 감싸서 전달
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error('요청 실패:', error);
        throw error;
    }
};

export default createGroupWithMission;