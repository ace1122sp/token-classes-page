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
        {/* Image */}
        <img src={img} alt='token' />

        <div className={style['ownership-section']}>
          {/* Section 1 */}
          <div className={style['ownership-section--left']}>
            <h6>{tokenClassName}</h6>
            <p>{percentageOfOwnership}</p>
          </div>
          <div className={style['ownership-section--right']}>
            <p>{ownershipSectionLabel}</p>
          </div>
        </div>

        <div className={style['price-section']}>
          {/* Section 2 */}
          <div>
            <h6>{priceString}</h6>
          </div>

          {/* TODO Extract into a Component */}
          <div>
            <i>Icon</i>
            <p>Access to Fantium Discord Channel</p>
          </div>

          <div>
            <i>Icon 2</i>
            <p>Exclusive Workout Video</p>
          </div>
        </div>

        <div>
          <Button {...buttonProps} />
        </div>
      </div>

      {/* Tokens Number */}
      <p>100 Tokens</p>
    </div>
  );
};

export default Card;
