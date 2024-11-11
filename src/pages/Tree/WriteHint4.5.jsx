import * as style from '../../style/TreePage/WriteHintstyle';
import hintImage from '/public/images/santa.png';
import Button from '../../component/manittoo/Button';




const WriteHintPages = () => {
  const handleClick = () => {
    // 버튼 클릭 시 수행할 동작을 정의하세요
    console.log('마니또 랜덤 매칭하기 버튼이 클릭되었습니다.');
  };
  return (
    <style.MainContainer>
      <style.StyledDiv>💌</style.StyledDiv>
      <style.TitleText>마니또에게</style.TitleText>
      <style.TitleText>힌트메세지를 남겨주세요.</style.TitleText>
      <style.WrapperContainer>
        <style.ContainerImage src={hintImage} alt="Hint Image" />
        <style.Container>
          <style.ContainerText>나는 너랑 같은 학교야</style.ContainerText>
        </style.Container>
      </style.WrapperContainer>
      <Button onClick={handleClick} marginTop="40%">
          확인
        </Button>
    </style.MainContainer>
  )
}

export default WriteHintPages