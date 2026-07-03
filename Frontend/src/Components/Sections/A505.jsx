import React, { useState, useEffect } from 'react';

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const defaultPageData = {
  statusCode: '503',
  title: 'Service Unavailable',
  message: 'The server is temporarily busy, try again later!',
};

export default function ServiceUnavailable() {
  const [pageData, setPageData] = useState(defaultPageData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError('');
        const res = await fetch(`${API}/api/page505`);
        if (!res.ok) throw new Error('Unable to load the 503 page content.');

        const data = await res.json();
        if (!ignore) {
          setPageData({
            statusCode: data.statusCode || defaultPageData.statusCode,
            title: data.title || defaultPageData.title,
            message: data.message || defaultPageData.message,
          });
        }
      } catch (err) {
        if (!ignore) {
          console.error('Failed to fetch Page505 data:', err);
          setError('Unable to load the 503 page content right now.');
          setPageData(defaultPageData);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  if (loading) {
    return (
      <div style={styles.container}>
        <p style={styles.message}>Loading page content…</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {error ? <p style={styles.error}>{error}</p> : null}
      <h1 style={styles.code}>{pageData.statusCode}</h1>
      <h2 style={styles.title}>{pageData.title}</h2>
      <p style={styles.message}>{pageData.message}</p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    padding: '20px',
  },
  code: {
    fontSize: '96px',
    fontWeight: 700,
    color: '#3f3f3f',
    margin: 0,
    lineHeight: 1.1,
  },
  title: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#3f3f3f',
    margin: '10px 0',
  },
  message: {
    fontSize: '15px',
    color: '#6b6b6b',
    margin: 0,
  },
};