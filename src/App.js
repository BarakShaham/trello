import './App.css';
import { TrelloBoard } from './modules/trelloBoard/Trelloboard';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-image: url(https://embedwistia-a.akamaihd.net/deliveries/d5ae8190f0aa7dfbe0b01f336f29d44094b967b5.webp?image_crop_resized=1280x720);
  background-size: cover;
`;

function App() {
  return (
    <RecoilRoot>
      <AppContainer>
        <TrelloBoard />
      </AppContainer>
    </RecoilRoot>
  );
}

export default App;
