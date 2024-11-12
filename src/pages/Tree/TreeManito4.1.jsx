import * as style from '../../style/TreePage/TreeMinatostyle';
import treeImage from '/images/Tree.png'; 
import LogoImage from '/images/mainpage/Sub.png'; 

const TreeManito = () => {
  return (
    <style.MainContainer>
      <style.EmptyContainer>
        <style.RowContainer1>
          <style.CenteredImage2 src={LogoImage} alt="LogoImage"  ></style.CenteredImage2>
          <style.TitleText>메인으로 돌아가기</style.TitleText>
        </style.RowContainer1>
        <style.RowContainer2>
          <style.TitleText3>황민영</style.TitleText3>
          <style.TitleText4>산타의 마니또 트리</style.TitleText4>
        </style.RowContainer2>
        <style.BadgeContainer>
      <style.BadgeText>💌 1일 뒤 마니또의 힌트가 공개돼요!</style.BadgeText>
    </style.BadgeContainer>
    </style.EmptyContainer>
    <style.CenteredImage src={treeImage} alt="Tree Image" />
   
    </style.MainContainer>
  )
}

export default TreeManito