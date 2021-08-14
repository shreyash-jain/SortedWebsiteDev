import { ThemeProvider } from "@theme-ui/core";
import { StickyProvider } from "contexts/app/app.provider";
import Layout from "components/layout";
import theme from "theme";
import { useRouter } from "next/router";
import EnquiryPage from "sections/enquiryPage";

const Enquiry = () => {

    const { query } = useRouter();

    return (
        <ThemeProvider theme={theme}>
      
            <StickyProvider>
                <Layout>
                   <EnquiryPage/>
                
                </Layout>
    
            </StickyProvider>
    
        </ThemeProvider>
    )
}

export default Enquiry;