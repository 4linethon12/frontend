import axios from 'axios';

const createGroup = async (groupName, nickname) => {
  const token = localStorage.getItem('token');
  
  try {
    const response = await axios.post(
      'http://43.201.50.47:8000/api/groups/groups/',
      {
        name: groupName,
        group_leader: nickname,
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
    console.error('그룹 생성 실패:', error);
    throw error;
  }
};

export default createGroup;