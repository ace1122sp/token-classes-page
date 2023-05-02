import React from 'react';
import Button from '../../../../components/button';
import style from './Card.module.css';

export interface CardProps {
  img: string;
  tokenClassName: string;
  percentageOfOwnership: number;
  ownershipSectionLabel: string;
  priceString: string;
  // icon: React.FC;
  buttonProps: {
    variant: 'primary' | 'secondary';
    label: string;
    onClick: () => void;
  };
}

const Card: React.FC<CardProps> = ({
  img,
  tokenClassName,
  percentageOfOwnership,
  ownershipSectionLabel,
  priceString,
  buttonProps,
}) => {
  return (
    <div className={style['wrapper']}>
      <div className={style['content']}>
        <div className={style['img-wrapper']}>
          <img src={img} alt='token' />
        </div>

        <div className={style['ownership-section']}>
          {/* Section 1 */}
          <div className={style['ownership-section--left']}>
            <h6>{tokenClassName}</h6>
            <h3>{percentageOfOwnership}</h3>
          </div>
          <div className={style['ownership-section--right']}>
            <p>{ownershipSectionLabel}</p>
          </div>
        </div>

        <div className={style['price-section']}>
          {/* Section 2 */}
          <div className={style['price-section--price']}>
            <h6>{priceString}</h6>
          </div>

          {/* TODO Extract into a Component */}
          <div className={style['benefits']}>
            <span>💎</span>
            <p>Access to Fantium Discord Channel</p>
          </div>

          <div className={style['benefits']}>
            <span>👋</span>
            <p>Exclusive Workout Video</p>
          </div>
        </div>

        <div className={style['cta-wrapper']}>
          <Button {...buttonProps} />
        </div>
      </div>

      {/* Tokens Number */}
      <p className={style['card-bottom-text']}>100 Tokens</p>
    </div>
  );
};

export default Card;
