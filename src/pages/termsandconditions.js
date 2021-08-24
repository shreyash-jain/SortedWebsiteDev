import { ThemeProvider, Box } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import Layout from 'components/layout';
import TermsConditionsPage from 'sections/termsConditionsPage'

const Terms = () => {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <TermsConditionsPage />

                </Layout>
    
            </StickyProvider>
    
        </ThemeProvider>
        
    )
}

export default Terms;