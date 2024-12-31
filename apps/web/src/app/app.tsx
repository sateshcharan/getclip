import { Button, Input } from '@getclip/lib/ui/index';
import { useState } from 'react';
import { motion } from 'motion/react';

export function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    const response = await fetch('http://localhost:3333/api', {
      method: 'GET',
    });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <motion.div className="flex flex-col justify-center items-center gap-4 w-screen h-screen px-20">
          <Input placeholder="Enter url" />

      {message === '' && (
        
        <motion.div
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button >Get Data</Button>
        </motion.div>
      )}
      <h3 className="text-2xl font-semibold">{message}</h3>
    </motion.div>
  );
}

export default App;
