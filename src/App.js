
import Header from './animal/Header';
import Footer from './animal/Footer';

function App(props) {
  return (
    <div>
      <Header/>
        {props.children}
      <Footer/>
     
    </div>
  );
}

export default App;
