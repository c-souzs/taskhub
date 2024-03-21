import { RouterProvider } from 'react-router-dom'
import router from './routes'
import GlobalStyle from './styles/global'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

export default App
