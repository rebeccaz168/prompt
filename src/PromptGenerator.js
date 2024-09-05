import React, { useState } from 'react';

function PromptGenerator() {
  const [prompt, setPrompt] = useState('');
  const [category, setCategory] = useState('fantasy');

//   const fetchPrompt = async () => {
//     const response = await fetch('http://localhost:5000/get-prompt', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ category }),
//     });
//     const data = await response.json();
//     setPrompt(data.prompt);
//   };

  return (
    <div>
      <h1>Creative Writing Prompt Generator</h1>
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="fantasy">Fantasy</option>
        <option value="sci-fi">Sci-Fi</option>
        <option value="romance">Romance</option>
      </select>
      {/* <button onClick={fetchPrompt}>Generate Prompt</button> */}
      {prompt && <p>{prompt}</p>}
    </div>
  );
}

export default PromptGenerator;
