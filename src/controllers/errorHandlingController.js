import axios from 'axios';

async function errorHandling(req, res) {
    const url = req.query.url; 
    if (!url) {
      return res.status(400).json({ message: 'URL parameter is required.' });
    }
  
    try {
      const data = await fetchDataWithProperErrorHandling(url);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

    async function fetchDataWithProperErrorHandling(url) {
        try {
            const response = await axios.get(url);
            if (response.status === 200) {
              return response.data;
            } else {
              throw new Error(`Server responded with status code: ${response.status}`);
            }
        } catch (error) {
            if (error.response) {
              console.error(`Error Response: ${error.response.status}: ${error.response.statusText}`);
              throw new Error(`Error Response: ${error.response.status}: ${error.response.statusText}`);
            } else if (error.request) {
              console.error('Error Request: No response received.');
              throw new Error('Error Request: No response received.');
            } else {
              console.error('Error Message: ', error.message);
              throw new Error('Error Message: ' + error.message);
            }
        }
    }
}

export { errorHandling };
