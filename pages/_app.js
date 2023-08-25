import '../styles/globals.css'
import '../styles/normalize.css'
import { PortfolioProvider } from '../context/PortfolioProvider'
import ScrollButton from '../components/ScrollButton'

function MyApp({ Component, pageProps }) {
    return (
    <PortfolioProvider>
        <Component {...pageProps} />
        <ScrollButton/>
    </PortfolioProvider>)
      

}

export default MyApp