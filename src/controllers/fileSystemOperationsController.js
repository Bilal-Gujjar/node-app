import fs from 'fs';
import path from 'path';

/**
 * Handles file system operations for the '/listFiles' route.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
async function fileSystemOperations(req, res) {
    const { dirPath, extension } = req.query;
    
    if (!dirPath || !extension) {
        return res.status(400).json({ message: 'Both dirPath and extension query parameters are required.' });
    }

    try {
        const files = await listFilesWithExtension(dirPath, `.${extension}`);
        res.json(files);
    } catch (error) {
        res.status(500).json({ message: 'Failed to list files', error: error.message });
    }

    /**
     * Lists all files with a specific extension in a directory.
     * @param {string} dirPath - The path to the directory to read.
     * @param {string} extension - The file extension to filter by.
     * @returns {Promise<string[]>} A promise that resolves with the list of files.
     */
    async function listFilesWithExtension(dirPath, extension) {
        try {
            const files = await fs.promises.readdir(dirPath);
            return files.filter(file => path.extname(file) === extension);
        } catch (error) {
            console.error('Error reading directory:', error);
            throw error;
        }
    }
}

export { fileSystemOperations };
