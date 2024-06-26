import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { QueryClientProvider, QueryClient } from 'react-query';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={client}>
        <App />
    </QueryClientProvider>
)
