import './../styles/index.scss';
import Recipes from './Recipes';

import img from '../images/apple.svg';
import img2 from '../images/image.png';

const App = () => {
  return (
    <>
      <section className='hero'></section>
      <main>
        <section>
          <h1>Hello React :)</h1>
          <Recipes />
        </section>
      </main>
    </>
  );
};

export default App;
