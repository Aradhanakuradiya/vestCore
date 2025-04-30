import React from 'react';
import { motion } from 'framer-motion';

const StockMarketEducationPage = () => {
  return (
    <div style={styles.container}>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={styles.header}
      >
        <h1 style={styles.title}>Unlock the World of Trading</h1>
        <p style={styles.description}>
          Varsity delivers unparalleled, free online education, covering every aspect of the stock market.
        </p>
      </motion.header>

      <main style={styles.main}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={styles.card}
        >
          <h2>Join the Active TradingQ&A Community</h2>
          <p>
            Explore market nuances and connect with fellow investors.
          </p>
          <a href="/faqs" style={styles.button}>
            Visit TradingQ&A
          </a>
          <div style={styles.infoBox}>
            <h3>Learn Stock Market Basics</h3>
            <ul style={styles.infoList}>
              <li>Introduction to Stock Market</li>
              <li>Understanding Stocks and Shares</li>
              <li>Basics of Trading</li>
              <li>Investment Strategies</li>
            </ul>
          </div>
        </motion.div>
      </main>

      <footer style={styles.footer}>
        <div>© 2023 Stock Market Education. All rights reserved.</div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundImage: 'linear-gradient(to bottom right, #f7fafc, #e5e7eb)',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    textAlign: 'center',
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: 'transparent',
    backgroundClip: 'text',
    backgroundImage: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.125rem',
    color: '#6b7280',
  },
  main: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    padding: '1.5rem',
    textAlign: 'center',
    maxWidth: '32rem',
  },
  button: {
    backgroundColor: 'linear-gradient(to right, #34d399, #3b82f6)',
    color: 'blue',
    fontWeight: 'semibold',
    padding: '0.75rem 1.5rem',
    borderRadius: '1.5rem',
    transition: 'background-color 0.3s ease-in-out',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    display: 'inline-block',
    marginTop: '1.5rem',
    textDecoration: 'none'
  },
  'button:hover': {
    backgroundColor: 'linear-gradient(to right, #22c55e, #2563eb)',
  },
  infoBox: {
    backgroundColor: '#f9fafb',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    padding: '1rem',
    marginTop: '1.5rem',
  },
  infoTitle: {
    fontSize: '1.25rem',
    fontWeight: 'semibold',
    color: '#16a34a',
    marginBottom: '0.5rem',
  },
  infoList: {
    listStyleType: 'disc',
    paddingLeft: '1.5rem',
    color: '#4b5563',
  },
  footer: {
    backgroundColor: '#4a5568',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    borderTopLeftRadius: '0.375rem',
    borderTopRightRadius: '0.375rem',
    boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
    marginTop: '2rem'
  },
};

export default StockMarketEducationPage;
