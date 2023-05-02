export const fetchTokenClassItems = async (cb: (data: []) => void) => {
  try {
    const urlObject = new URL(process.env.REACT_APP_API_URL!);
    const response = await fetch(urlObject);
    const data = await response.json();
    cb(data?.data);
  } catch (error: any) {
    console.log('Error: ', error);
    throw error;
  }
};
