import './App.css'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import Modal from './__fixtures__/test/User';

function App() {
  return (
    <MantineProvider>
      <Modal></Modal>
    </MantineProvider>
  )
}

export default App
