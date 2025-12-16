/**
 * Contact endpoint for handling contact form submissions
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      // Here you would typically save to database or send email
      // For now, just log and respond
      console.log('Contact form submission:', { name, email, message });

      res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}