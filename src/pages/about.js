import { ThemeProvider, Box } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import Layout from 'components/layout';
import AboutUsPage from 'sections/aboutUsPage';

const Careers = () => {
    return (
            <ThemeProvider theme={theme}>
      <StickyProvider>
                <Layout>
                    <AboutUsPage />

                </Layout>
    
            </StickyProvider>
    
        </ThemeProvider>
        
    )
}

export default Careers;