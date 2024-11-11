// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

import * as style from '../../style/ManittoPage/CompletsStyle'
 

export default class GroupCompletePage extends Component {
  render() {
    return (
        <style.MainBackground>
        <style.StyledDiv>🎄</style.StyledDiv>
        <style.TitleText>그룹이 만들어졌어요!</style.TitleText>
        <style.TitleText2 >입장 코드를 복사해서 친구들에게 공유해주세요</style.TitleText2>
        <style.Container marginTop="1rem" >
        <style.ContainerImage src="public/images/마니또.png" alt="산타이미지" />
            <style.ContainerText>코드</style.ContainerText>
            <style.StyledButton>입장코드 복사하기</style.StyledButton>
            </style.Container>
      </style.MainBackground>
    )
  }
}
