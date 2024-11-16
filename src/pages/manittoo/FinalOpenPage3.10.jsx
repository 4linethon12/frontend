import * as style from '../../style/ManittoPage/FinalOpenstyle';
import CloseImage from '/images/Group/x.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const FinalOpenPage = () => {
  const navigate = useNavigate();
  const [manittoData, setManittoData] = useState([]); // 마니또 데이터를 저장할 상태
  const [userData, setUserData] = useState({}); // 유저 데이터를 저장할 상태

  // 뒤로가기 버튼 클릭 핸들러
  const handleClickBack = () => navigate('/Mainpage3');

  // API 호출로 마니또 데이터 가져오기
  useEffect(() => {
    const fetchManittoData = async () => {
      try {
        const token = localStorage.getItem('token'); // 토큰 가져오기

        const response = await axios.get('http://43.201.50.47:8000/api/groups/user/groups', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        console.log('서버 응답 데이터:', response.data); // 서버로부터 받은 데이터 출력

        setManittoData(response.data); // 응답 데이터 저장
      } catch (error) {
        console.error('마니또 데이터 가져오기 실패:', error);
      }
    };

    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token'); // 토큰 가져오기

        const response = await axios.get('http://43.201.50.47:8000/api/users', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        console.log('유저 데이터:', response.data); // 유저 데이터 출력

        const userMap = response.data.reduce((acc, user) => {
          acc[user.id] = user.nickname;
          return acc;
        }, {});

        setUserData(userMap); // 유저 데이터 매핑 저장
      } catch (error) {
        console.error('유저 데이터 가져오기 실패:', error);
      }
    };

    fetchManittoData();
    fetchUserData();
  }, []);

  return (
    <style.MainContainer>
      <style.RowContainer>
        <style.CenteredImage
          src={CloseImage}
          alt="CloseImage"
          onClick={handleClickBack}
          style={{ cursor: 'pointer' }}
        />
      </style.RowContainer>
      <style.EmptyContainer>
        <style.TitleText2>Merry Chrismato</style.TitleText2>
        <style.TitleText margin="10px 0px">크리스마스의 비밀이 풀리는 순간,</style.TitleText>
        <style.TitleText>나의 마니또는...? 🎁</style.TitleText>
        <style.Divider></style.Divider>

        <style.WhiteContainer>
          {manittoData.length > 0 ? (
            manittoData[0].matches.slice(0, 5).map((match, index) => (
              <style.RowContainer2 key={index}>
                <style.Container>
                  <style.ContainerImage
                    src={'public/images/마니또.png'}
                    alt="산타이미지"
                  />
                  <style.Text>{`${userData[match.giver] || match.giver}`}</style.Text>
                </style.Container>

                <style.MiniImage
                  src="public/images/파란화살표.png"
                  alt="화살표이미지"
                />

                <style.Container>
                  <style.ContainerImage
                    src={'public/images/마니또.png'}
                    alt="산타이미지"
                  />
                  <style.Text>{`${userData[match.receiver] || match.receiver}`}</style.Text>
                </style.Container>
              </style.RowContainer2>
            ))
          ) : (
            <style.Text>마니또 데이터를 불러오는 중입니다...</style.Text>
          )}
        </style.WhiteContainer>
      </style.EmptyContainer>
    </style.MainContainer>
  );
};

export default FinalOpenPage;
