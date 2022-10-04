import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import EventDetails from './components/EventDetails/EventDetails';
import CreateEvent from './components/CreateEvent/CreateEvent';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="event/details" element={< EventDetails />} />
        <Route path="create/event" element={< CreateEvent />} />
      </Routes>
    </div>
  );
}

export default App;
