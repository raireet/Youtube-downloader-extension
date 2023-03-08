import { useState, useEffect } from 'react';

function useOnlineStatus() {
  const [ifOnline, setIfOnline] = useState(navigator.onLine);

  const handleifOnline = () => {
    setIfOnline(true);
  };

  function handleifOffline() {
    setIfOnline(false);
  }

  useEffect(() => {
    window.addEventListener('online', handleifOnline);
    window.addEventListener('offline', handleifOffline);

    return () => {
      window.removeEventListener('online', handleifOnline);
      window.removeEventListener('offline', handleifOffline);
    };
  }, []);

  return ifOnline;
}

export default useOnlineStatus;