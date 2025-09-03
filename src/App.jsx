import './App.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [count, setcount] = useState(0)

  const handleClick1 = () => {
    setcount(count + 1)
  }

  const handleClick2 = () => {
    if (count <= 0) {
      setcount(0)
    } else {
      setcount(count - 1)
    }
  }

  const handleRefresh = () => {
    setcount(0)
  }

  return (
    <>
      <div className="App">
        {/* Outer card with white color*/}
        <div className="container">

          {/* svg icon */}
          <div className="right">
            <svg onClick={handleRefresh} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M20.0092 2V5.13219C20.0092 5.42605 19.6418 5.55908 19.4537 5.33333C17.6226 3.2875 14.9617 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Linear gradiant card */}
          <div className="total-amount-card" style={{ background: "linear-gradient(to right, #f8c648ff, #dbf800ff)" }}>
            {/* Card text */}
            <div className="cardText">
              <h1 className="total-amount-heading">{count}</h1>
            </div>
          </div>

          {/* buttons */}
          <form>
            <div className="button-collection">
              <Stack spacing={2} direction="row">
                <Button onClick={handleClick1} variant="contained" className='btn-1'>+</Button>
                <Button onClick={handleClick2} variant="contained" className='btn-2'>-</Button>
              </Stack>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default App
