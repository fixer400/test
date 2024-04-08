import avatar from './avatar.png';
import './App.css';
import ColoredUserPic from './Components/ColoredUserPic';

function App() {
  return (
    <div className="App">
      <ColoredUserPic
        src={avatar}
        size={150}
        margin={4}
        backgroundColor={'red'}
        colors={['green', 'blue']}
        hoverColors={['blue', 'green']}
        colorWidth={6}
      />
    </div>
  );
}

export default App;
