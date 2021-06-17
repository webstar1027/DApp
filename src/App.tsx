import React from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header title="Header" />
      <Layout title="Main" />
      <Footer title="Footer" />
    </div>
  );
}

export default App;
