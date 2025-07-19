import { Router } from './routes/router';
import { useAntiInspect } from './utils/anti-inspect';

function App() {
  useAntiInspect();
  return <Router />;
}

export default App;
