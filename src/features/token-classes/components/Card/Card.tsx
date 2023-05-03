import React, { useCallback } from 'react';
import Button from '../../../../components/button';
import style from './Card.module.css';

export interface CardProps {
  id: number;
  img: string;
  tokenClassName: string;
  percentageOfOwnership: number;
  ownershipSectionLabel: string;
  priceString: string;
  buttonProps: {
    variant: 'primary' | 'secondary';
    label: string;
    onClick: () => void;
  };
  tokenClassPerks: string[];
  numberOfTheCollectionRemaining: number;
}

const staticPerksIcons: string[] = ['💎', '👋', '🎁', '🎉', '🎊', '🎈'];

const Card: React.FC<CardProps> = ({
  id,
  img,
  tokenClassName,
  percentageOfOwnership,
  ownershipSectionLabel,
  priceString,
  buttonProps,
  tokenClassPerks,
  numberOfTheCollectionRemaining,
}) => {
  const renderTokenClassPerks = useCallback(
    () =>
      tokenClassPerks?.map((item: string, i: number) => (
        <div className={style['benefits']}>
          <span>{staticPerksIcons[i]}</span>
          <p>{item}</p>
        </div>
      )),
    [tokenClassPerks]
  );

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
            <p className={style['ownership-section--right-text']}>
              {ownershipSectionLabel}
            </p>
          </div>
        </div>

        <div className={style['price-section']}>
          {/* Section 2 */}
          <div className={style['price-section--price']}>
            <h6>{priceString}</h6>
          </div>

          {renderTokenClassPerks()}

          <div className={style['cta-wrapper']}>
            <Button {...buttonProps} />
          </div>
        </div>

        {/* Tokens Number */}
      </div>
      <p className={style['card-bottom-text']}>
        {numberOfTheCollectionRemaining} Tokens
      </p>
    </div>
  );
};

export default Card;
