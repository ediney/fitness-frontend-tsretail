import { SelectedPage } from '../src/shared/types';
import { useState } from 'react'
import Home from './components/home';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  return (
    <>
      <div className="app bg-gray-20">
        <Home setSelectedPage={setSelectedPage}/>
      </div> 
    </>
  )
}

export default App
