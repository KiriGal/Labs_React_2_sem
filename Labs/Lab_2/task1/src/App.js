import Clock from "./components/Clock";

function App() {
  return (
    <div className="App">
        <Clock format='12' timezone='+1:00' />
        <Clock format='24' timezone='+10:00' />
    </div>
  );
}

export default App;
