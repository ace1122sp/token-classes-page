import { mockCardData } from './hooks/useProps';

interface MockResponse {
  data: object[];
}
const mockResponse: MockResponse = {
  data: [mockCardData, mockCardData],
};

export const fetchTokenClassItems = async () => {
  try {
    // const response = await fetch(url);
    // const data = await response.json();
    // return data;
    return mockResponse;
  } catch (error: any) {
    console.log('Error: ', error);
    throw error;
  }
};
