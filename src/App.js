import styled from 'styled-components';
import './App.css'
const AppContainer = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  display:flex;
  align-items: center;
  justify-content: center;
  background: rgb(254,193,130);
  background: linear-gradient (
    50deg,
    rgba(254,193,130,1) 20%,
    rgba(254,160,142,1) 100%,
  );
`;
function App() {
  return (
    <AppContainer>NewsLetter</AppContainer>
  );
}

export default App;
