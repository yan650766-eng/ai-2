const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Service is healthy' });
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    // Simple AI response logic
    let response = '抱歉，我不太明白您的問題。請提供更多細節。';

    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('尺寸') || lowerMessage.includes('size')) {
      response = '根據您的身高和體重，我建議您選擇M碼。如果您提供具體尺寸，我可以給出更準確的建議。';
    } else if (lowerMessage.includes('穿搭') || lowerMessage.includes('搭配') || lowerMessage.includes('outfit')) {
      response = '這件衣服很適合搭配牛仔褲和運動鞋，呈現休閒風格。您也可以嘗試搭配裙子營造優雅造型。';
    } else if (lowerMessage.includes('價格') || lowerMessage.includes('price')) {
      response = '我們的商品價格從NT$500到NT$3000不等，視款式和材質而定。';
    }

    res.json({
      success: true,
      response: response,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in chat:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.post('/api/contact', (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log('Contact form submission:', { name, email, message });
    res.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});