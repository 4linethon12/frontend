import * as style from '../../style/TreePage/BeforeTreestyled';
import treeImage from '/images/Tree.png'; 
import Button from '../../component/manittoo/Button';

const BeforeTree = () => {
  const handleClick = () => {
    // 버튼 클릭 시 수행할 동작을 정의하세요
    console.log('다음 페이지로.');
  };


  return (
    <style.MainContainer>
      <style.EmptyContainer>
      <style.RowContainer2>
          <style.TitleText3>황민영</style.TitleText3>
          <style.TitleText4>산타의 마니또 트리</style.TitleText4>
        </style.RowContainer2>
        <style.CenteredImage src={treeImage} alt="Tree Image" />
        <Button onClick={handleClick} marginTop="60%">
          확인
        </Button>
        </style.EmptyContainer>
    </style.MainContainer>
  )
}

export default BeforeTree