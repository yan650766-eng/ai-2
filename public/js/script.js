/**
 * 前端JavaScript for AI Fashion Site
 * Handles chat functionality, form submissions, and dynamic content
 */

// DOM Elements
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');
const contactForm = document.getElementById('contact-form');
const productGrid = document.querySelector('.product-grid');

// Sample product data
const products = [
  {
    id: 1,
    name: '經典白T恤',
    price: 'NT$ 599',
    image: 'https://via.placeholder.com/300x200/FFFFFF/000000?text=White+T-Shirt',
    description: '100%棉質，舒適透氣，適合日常穿搭'
  },
  {
    id: 2,
    name: '牛仔外套',
    price: 'NT$ 1,299',
    image: 'https://via.placeholder.com/300x200/4169E1/FFFFFF?text=Denim+Jacket',
    description: '經典藍色牛仔，百搭實用'
  },
  {
    id: 3,
    name: '休閒長褲',
    price: 'NT$ 899',
    image: 'https://via.placeholder.com/300x200/808080/FFFFFF?text=Casual+Pants',
    description: '彈性面料，舒適自在'
  }
];

/**
 * Initialize the application
 */
function init() {
  loadProducts();
  setupEventListeners();
  addWelcomeMessage();
}

/**
 * Load and display products
 */
function loadProducts() {
  products.forEach(product => {
    const productCard = createProductCard(product);
    productGrid.appendChild(productCard);
  });
}

/**
 * Create a product card element
 * @param {Object} product - Product data
 * @returns {HTMLElement} Product card element
 */
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <div class="price">${product.price}</div>
  `;
  return card;
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
  sendButton.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  contactForm.addEventListener('submit', handleContactSubmit);
}

/**
 * Add welcome message to chat
 */
function addWelcomeMessage() {
  addMessage('您好！我是AI客服小助手，有什麼可以幫助您的嗎？', 'bot');
}

/**
 * Send a message to the chat
 */
async function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  addMessage(message, 'user');
  chatInput.value = '';

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    if (data.success) {
      addMessage(data.response, 'bot');
    } else {
      addMessage('抱歉，發生錯誤，請稍後再試。', 'bot');
    }
  } catch (error) {
    console.error('Error sending message:', error);
    addMessage('網路錯誤，請檢查您的連線。', 'bot');
  }
}

/**
 * Add a message to the chat
 * @param {string} text - Message text
 * @param {string} sender - 'user' or 'bot'
 */
function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;
  messageDiv.textContent = text;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

/**
 * Handle contact form submission
 * @param {Event} e - Form submit event
 */
async function handleContactSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();
    if (data.success) {
      alert('訊息已發送！我們會盡快回覆您。');
      contactForm.reset();
    } else {
      alert('發送失敗，請稍後再試。');
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    alert('網路錯誤，請檢查您的連線。');
  }
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);