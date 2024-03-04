import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/Home/HomePage';

function App() {
  return (
    <div className="app-wrap flex flex-col  h-[55em]">
      <h1 className="text-3xl font-bold underline text-center mb-2.5">
        Eat-N-Split
      </h1>
      {/*<Header />
      <Navigation />*/}
      <main className="content h-[55rem]">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
