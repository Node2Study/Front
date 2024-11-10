import styles from './App.module.scss';
import Example from './components/user/Example';
import Page from './pages/Page';
import { date } from './utils/date';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <Example />
        {date()}
        <Page />
      </header>
    </div>
  );
}

export default App;
