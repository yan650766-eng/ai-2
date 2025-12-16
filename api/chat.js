/**
 * AI Chat endpoint for customer service
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { message, userId } = req.body;

      // TODO: Integrate with AI service (e.g., OpenAI, etc.)
      // For now, provide basic responses based on keywords
      let response = '抱歉，我不太明白您的問題。請提供更多細節。';

      const lowerMessage = message.toLowerCase();

      if (lowerMessage.includes('尺寸') || lowerMessage.includes('size')) {
        response = '根據您的身高和體重，我建議您選擇M碼。如果您提供具體尺寸，我可以給出更準確的建議。';
      } else if (lowerMessage.includes('穿搭') || lowerMessage.includes('搭配') || lowerMessage.includes('outfit')) {
        response = '這件衣服很適合搭配牛仔褲和運動鞋，呈現休閒風格。您也可以嘗試搭配裙子營造優雅造型。';
      } else if (lowerMessage.includes('價格') || lowerMessage.includes('price')) {
        response = '我們的商品價格從NT$500到NT$3000不等，視款式和材質而定。';
      }

      res.status(200).json({
        success: true,
        response: response,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error in chat handler:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}