import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Grid2} from '@mui/material'
import './App.css'
import SignInComponent from './components/auth/signin'

function App() {

  return (
    <Router>
        <Grid2 container minHeight={400} columns={1}>
          <Grid2 size={6}>
          <SignInComponent />
        </Grid2>
      </Grid2>
      <AppRoutes/>
    </Router>
  )
}

export default App
