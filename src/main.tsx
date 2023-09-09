import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/assets/styles/main.scss';
import { SnackbarProvider } from 'notistack';

const snackbarSettings = {
  maxSnack: 3,
  autoHideDuration: 1800,

  preventDuplicate: true,
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SnackbarProvider
    {...snackbarSettings}
    anchorOrigin={{
      horizontal: 'right',
      vertical: 'top',
    }}
  >
    <App />
  </SnackbarProvider>,
);
