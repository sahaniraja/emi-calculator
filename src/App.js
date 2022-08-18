import react from 'react';
import { Routes,Route } from 'react-router-dom';
import Header from './Components/Utilities/Header/Header';
import HomeLoan from './Components/Utilities/Pages/Loans/HomeLoan';

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path={'/'}/>
      <Route path={'/homeloan'} element={<HomeLoan/>}/>
    </Routes>
    </>
  );
}

export default App;
