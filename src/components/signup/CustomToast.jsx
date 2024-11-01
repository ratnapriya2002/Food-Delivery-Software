import { useEffect } from 'react';

function CustomToast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Close after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg z-50 transition-all duration-300">
      {message}
    </div>
  );
}

export default CustomToast;
