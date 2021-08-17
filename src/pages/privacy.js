import { ThemeProvider, Box } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import Layout from 'components/layout';
import CareerPage from 'sections/careerPage';


const Privacy = () => {
    return (
            <ThemeProvider theme={theme}>
      <StickyProvider>
                <Layout>
                    <CareerPage />

                </Layout>
    
            </StickyProvider>
    
        </ThemeProvider>
        
    )
}

export default Privacy;