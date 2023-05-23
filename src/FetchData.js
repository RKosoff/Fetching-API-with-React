import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import Button from 'react-bootstrap/Button';

function FetchData() {
    const [apiInfo, setApi] = useState('');
  const fetchQuote = useCallback( async () => { 
    const url = "https://web-series-quotes-api.deta.dev/quote/"
    try {
        const response = await fetch(url);
        const qoute = await response.json();
        setApi(qoute[0].quote);
      } catch (error) {
        console.log("error", error);
      }
});
  return (
    <>
    <div>{apiInfo}</div>
    <button onClick={fetchQuote}>Generate Qoute</button>
    </>
  )

}


export default FetchData