import Header from './components/Header';
import Main from './components/Main';

export default function Home() {
  return (
    <div className="flex flex-col max-w-5xl mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <Header />
        <Main />
        <footer></footer>
      </section>
    </div>
  );
}
