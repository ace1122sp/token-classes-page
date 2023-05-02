import { useEffect, useState } from 'react';
import { CardProps } from '../components/Card';

// NOTE add an explanation why you did not use redux store for this data, and why you still decided to install redux
export const mockCardData: CardProps = {
  img: 'https://picsum.photos/800/600',
  tokenClassName: 'Gold',
  percentageOfOwnership: 0.0021,
  ownershipSectionLabel: 'Ownership / Token',
  priceString: '$ 500',
  buttonProps: {
    variant: 'primary',
    label: 'CTA',
    onClick: () => {},
  },
};

export interface Props {
  isLoading: boolean;
  tokenClasses?: CardProps[];
}

const useProps = (): Props => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tokenClasses, setTokenClasses] = useState<any[]>([]);

  useEffect(() => {
    setIsLoading(true);
    setTokenClasses([mockCardData, mockCardData]);
    setIsLoading(false);
  }, []);

  return {
    tokenClasses,
    isLoading,
  };
};

export default useProps;
