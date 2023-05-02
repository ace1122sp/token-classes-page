import { useEffect, useState, useCallback } from 'react';
import { CardProps } from '../components/Card';
import { fetchTokenClassItems } from '../tokenClassesAPI';

export interface Props {
  isLoading: boolean;
  tokenClasses?: CardProps[];
}

const useProps = (): Props => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tokenClasses, setTokenClasses] = useState<any[]>([]);

  const formatAndStoreData = useCallback((data: object[]) => {
    const formattedData = data?.map((item: any) => {
      return {
        id: item.id,
        img: item.img_url,
        tokenClassName: item.token_class_name,
        percentageOfOwnership: `${
          Math.round(item.percentage_of_ownership * 10000) / 10000
        }%`,
        ownershipSectionLabel: 'Ownership / Token',
        priceString: `$ ${Math.round(item.price_usd)}`,
        buttonProps: {
          variant: item.token_class_name === 'Gold' ? 'primary' : 'secondary', // NOTE this is just for demonstration purposes
          label: item.token_class_name === 'Gold' ? 'BUY ON OPEN SEA' : 'BUY', // NOTE this is just for demonstration purposes
          onClick: () => {},
        },
        tokenClassPerks: item.token_class_perks,
        numberOfTheCollectionRemaining: item.number_of_the_collection_remaining,
      };
    });
    setTokenClasses(formattedData);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchTokenClassItems((data: []) => {
      formatAndStoreData(data);
      setIsLoading(false);
    });
  }, [formatAndStoreData]);

  return {
    tokenClasses,
    isLoading,
  };
};

export default useProps;
