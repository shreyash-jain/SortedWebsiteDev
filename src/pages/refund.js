import { ThemeProvider, Box } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import Layout from 'components/layout';
import RefundPolicyPage from 'sections/refundPolicyPage';

const Terms = () => {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <RefundPolicyPage />

                </Layout>
    
            </StickyProvider>
    
        </ThemeProvider>
        
    )
}

export default Terms;