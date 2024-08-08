import { SafeAreaView, Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from "./src/app/store";
import Counter from './src/components/Counter';
import ButtonRedux from './src/components/ButtonRedux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
          <Counter />
          <ButtonRedux/>
      </SafeAreaView>
    </Provider>
  );
}

export default App;