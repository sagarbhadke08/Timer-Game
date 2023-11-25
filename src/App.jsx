import Player from './components/Player.jsx';
import TimerChallange from './components/TimerChallange.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TimerChallange title="Easy" targetTime={1}/>
      <TimerChallange title="Not Easy" targetTime={5}/>
      <TimerChallange title="Getting Tough" targetTime={10}/>
      <TimerChallange title="Pros Only" targetTime={15}/>
    </>
  );
}

export default App;
