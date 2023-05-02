import { useCallback } from 'react';
import Card, { CardProps } from './components/Card';
import { useProps } from './hooks';
import Loading from '../../components/loading';
import style from './TokenClasses.module.css';
import WideCTA from '../../components/wide-cta';

const TokenClasses = () => {
  const { tokenClasses, isLoading } = useProps();

  const renderCards = useCallback(
    () =>
      tokenClasses?.map((tokenClass: CardProps) => (
        <Card {...tokenClass} key={tokenClass?.tokenClassName} />
      )),
    [tokenClasses]
  );

  return (
    <div className={style.wrapper}>
      {isLoading && <Loading />}
      {!isLoading && renderCards()}
      <div className={style['cta-wrapper']}>
        <WideCTA label='VALUATION METHOD' onClick={() => {}} />
      </div>
    </div>
  );
};

export default TokenClasses;
