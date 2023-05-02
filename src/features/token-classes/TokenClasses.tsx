import { useCallback } from 'react';
import Card, { CardProps } from './components/Card';
import { useProps } from './hooks';
import Loading from '../../components/loading';

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
    <div>
      {isLoading && <Loading />}
      {!isLoading && renderCards()}
    </div>
  );
};

export default TokenClasses;
