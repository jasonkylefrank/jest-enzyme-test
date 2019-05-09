import React from 'react';
import Header from './components/Header';
import Headline from './components/Headline';
import styles from './App.module.scss';


function App() {
  return (
    <div className="App">
      <Header />

      <main className={styles.main}>
        <Headline header="Posts" desc="Click the button to render posts" />
      </main>
    </div>
  );
}

export default App;
