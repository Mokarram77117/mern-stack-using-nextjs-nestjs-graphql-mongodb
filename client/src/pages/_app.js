import { ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.css';
import client from '../apolloconfig';
import Navibar from '../components/Navibar';
import '../styles/globals.css';
;

function MyApp({ Component, pageProps }) {
 
  
  
  
  return (
        <ApolloProvider client={client}>
            <>
             
                <Component {...pageProps} />
            </>
        </ApolloProvider>
  )
}

export default MyApp
