import axios from 'axios';

async function asyncOperations(req, res) {
  async function downloadContent(urls) {
    try {
      const downloadPromises = urls.map(url => axios.get(url).then(response => response.data));
      const contents = await Promise.all(downloadPromises);
      return contents;
    } catch (error) {
      console.error("Error during download", error);
      throw error;
    }
  }

  try {
    const { urls } = req.body;
    if (!urls || !Array.isArray(urls)) {
      return res.status(400).json({ message: 'Invalid input: expected an array of URLs.' });
    }

    const contents = await downloadContent(urls);
    res.status(200).json({ contents });
  } catch (error) {
    res.status(500).json({ message: 'Error downloading content', error: error.message });
  }
}

export {
  asyncOperations
};
