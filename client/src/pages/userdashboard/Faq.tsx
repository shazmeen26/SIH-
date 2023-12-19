import React from 'react';

const Faq = () => {
  const faqData = [
    {
      question: 'What is the purpose of this website?',
      answer: 'The purpose of this website is to provide information about...',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can contact our customer support team by...',
    },
    {
      question: 'Is there a mobile app available?',
      answer: 'Yes, we have a mobile app available for both iOS and Android...',
    },
    // Add more FAQ items as needed
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Frequently Asked Questions</h1>
      <div style={styles.faqList}>
        {faqData.map((item, index) => (
          <div key={index} style={styles.faqItem}>
            <h3 style={styles.question}>{item.question}</h3>
            <p style={styles.answer}>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  faqList: {
    borderTop: '2px solid #ccc',
    paddingTop: '20px',
  },
  faqItem: {
    marginBottom: '20px',
  },
  question: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: '10px',
  },
  answer: {
    fontSize: '16px',
    color: '#555',
  },
};

export default Faq;
