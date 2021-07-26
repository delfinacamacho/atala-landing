import React from 'react';
import { DetailCard, DecorativeImg, BgAnimation } from './DetailModule.styled';
import ImgSrc from '../../images/decorative-card.png';

const DetailModule = () => {
  return (
    <>
      <DetailCard>
        <BgAnimation>
          <DecorativeImg src={ImgSrc} alt="" />
        </BgAnimation>
      </DetailCard>
    </>
  )
}

export default DetailModule;