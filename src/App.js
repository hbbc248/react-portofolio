import React, { useState, useEffect} from 'react';
import './App.css';


// Components.
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  const [selectedNavItem, setSelectedNavItem] = useState('About');

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `My Portfolio - ${selectedNavItem}`;
  });

  return (
    <div className="App container mx-auto  max-w-5xl flex flex-col min-h-screen">
      <Header
        selectedNavItem={selectedNavItem}
        setSelectedNavItem={setSelectedNavItem}
      />
      <Main selectedNavItem={selectedNavItem} />
      <Footer />
    </div>
  );
}

export default App;