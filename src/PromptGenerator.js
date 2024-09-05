import React, { useState } from 'react';
import { Card, CardContent, Typography, Select, MenuItem, Button, Box, ToggleButton, ToggleButtonGroup, Container } from '@mui/material';

function PromptGenerator() {
  const [prompt, setPrompt] = useState('');
  const [category, setCategory] = useState('fantasy');
  const [selectedButton, setSelectedButton] = useState(null); // case where nothing is set for the filter; 

  const handleGradeChange = (newSelected) => {
    setSelectedButton(newSelected);
  };


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
    <Container>
      <Card style={{ padding: '20px', textAlign: 'center' }}>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            Creative Writing Prompt Generator
          </Typography>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            variant="outlined"
            style={{ marginBottom: '20px' }}
          >
            <MenuItem value="fantasy">Fantasy</MenuItem>
            <MenuItem value="sci-fi">Sci-Fi</MenuItem>
            <MenuItem value="romance">Romance</MenuItem>
          </Select>
          <Box display="flex" justifyContent="center" alignItems="center">
            <ToggleButtonGroup
                value={selectedButton}
                exclusive
                onChange={handleGradeChange}
                aria-label="grade selection"
                style={{ display: 'flex', gap: '10px' }}
            >
                <ToggleButton value="1-5" aria-label="1 - 5th Grade">
                1 - 5th Grade
                </ToggleButton>
                <ToggleButton value="6-8" aria-label="6 - 8th Grade">
                6 - 8th Grade
                </ToggleButton>
                <ToggleButton value="highschool" aria-label="Highschool">
                Highschool
                </ToggleButton>
                <ToggleButton value="beyond" aria-label="Beyond">
                Beyond
                </ToggleButton>
            </ToggleButtonGroup>
            </Box>
          {/* <Button variant="contained" color="primary" onClick={fetchPrompt}>
            Generate Prompt
          </Button> */}
          {prompt && (
            <Typography variant="body1" style={{ marginTop: '20px', fontStyle: 'italic' }}>
              {prompt}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

export default PromptGenerator;
