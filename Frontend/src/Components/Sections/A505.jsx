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
      <div className="min-h-screen flex flex-col items-center justify-center [text-align:center] bg-white p-5">
        <p className="text-[15px] text-[#6b6b6b] m-0">Loading page content…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center [text-align:center] bg-white p-5">
      {error ? <p>{error}</p> : null}
      <h1 className="text-[96px] font-bold text-[#3f3f3f] m-0 leading-[1.1]">{pageData.statusCode}</h1>
      <h2 className="text-[28px] font-bold text-[#3f3f3f] my-[10px] mx-0">{pageData.title}</h2>
      <p className="text-[15px] text-[#6b6b6b] m-0">{pageData.message}</p>
    </div>
  );
}