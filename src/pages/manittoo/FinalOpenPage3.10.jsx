import * as style from '../../style/ManittoPage/FinalOpenstyle';
import CloseImage from '/images/Group/x.png';
import { useNavigate } from 'react-router-dom';
 
const FinalOpenPage = () => {

  const handleClickBack = () => navigate('/Mainpage3');
  const navigate = useNavigate();

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
   <style.TitleText margin='10px 0px'>크리스마스의 비밀이 풀리는 순간,</style.TitleText>
   <style.TitleText >나의 마니또는...? 🎁</style.TitleText>
   <style.Divider></style.Divider>

   
   <style.WhiteContainer>


    <style.RowContainer>
    <style.Container>
         <style.ContainerImage src="public/images/마니또.png" alt="산타이미지" />
      <style.Text>황민영</style.Text>
       
    </style.Container>
    <style.MiniImage src="public/images/파란화살표.png" alt="화살표이미지" />
     <style.Container>
         <style.ContainerImage src="public/images/마니또.png" alt="산타이미지" />
      <style.Text>황민영</style.Text>
       
    </style.Container>
    </style.RowContainer>



    <style.RowContainer>
    <style.Container>
         <style.ContainerImage src="public/images/마니또.png" alt="산타이미지" />
      <style.Text>황민영</style.Text>
       
    </style.Container>
    <style.MiniImage src="public/images/파란화살표.png" alt="화살표이미지" />
     <style.Container>
         <style.ContainerImage src="public/images/마니또.png" alt="산타이미지" />
      <style.Text>황민영</style.Text>
       
    </style.Container>
    </style.RowContainer>



    <style.RowContainer>
    <style.Container>
         <style.ContainerImage src="public/images/마니또.png" alt="산타이미지" />
      <style.Text>황민영</style.Text>
       
    </style.Container>
    <style.MiniImage src="public/images/파란화살표.png" alt="화살표이미지" />
     <style.Container>
         <style.ContainerImage src="public/images/마니또.png" alt="산타이미지" />
      <style.Text>황민영</style.Text>
       
    </style.Container>
    </style.RowContainer>

    
    
    


   </style.WhiteContainer>
    </style.EmptyContainer>
     
    </style.MainContainer>
  )
}

export default FinalOpenPage