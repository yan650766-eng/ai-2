/**
 * Health check endpoint
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ status: 'OK', message: 'Service is healthy' });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}