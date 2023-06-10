import './App.css';
import { Provider } from "react-redux";
import store from "store";
import {CardController} from "./components/Card/CardController/CardController"
import {Background} from "./components/background/background"
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { CurrentCounterFrame } from 'components/Counter/CurrentCounterFrame/CurrentCounterFrame';
import { MaxCounter } from 'components/Counter/MaxCounter/MaxCounter';
import {PointerLayer} from 'components/PointerLayer/PointerLayer'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Background></Background>
      <Header ></Header>
      <CardController></CardController>
      <CurrentCounterFrame ></CurrentCounterFrame>
      <MaxCounter ></MaxCounter>
      <Footer ></Footer>
      <PointerLayer></PointerLayer>
      </Provider>
    </div>
  );
}

export default App;
