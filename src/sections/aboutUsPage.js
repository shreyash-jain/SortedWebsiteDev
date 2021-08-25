/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Box,
  Container,
  Heading,
  Text,
  Label,
  Image,
  Button,
} from 'theme-ui';
import Input from 'components/input';
import banner from 'assets/banner.png';
import { rgba } from 'polished';
import { useCallback } from 'react';
import Head from 'next/head';

const AboutUsPage = () => {

    return (
        <Box as="section" id="careers" sx={styles.section}>
            <Container>
        
                <Box sx={styles.contentWrapper}>
                    <Box sx={styles.content}>
                        <Heading as="h1">
                            Sorted Life Private Limited
                        </Heading>
                        
                    </Box>
                    <Box as="figure" sx={styles.illustration}>
                        <Image src={banner} alt="banner" />
                    </Box>
                </Box>

                <Box sx={styles.details}>
                    <Box sx={styles.detailsContent}>
                        <Heading as="h2">
                            Who are we?
                        </Heading>

                        <Heading as="p">
                            We are a fitness 
                        </Heading>
                    </Box>
                </Box>

                <Box sx={styles.details}>
                    <Box sx={styles.detailsContent}>
                        <Heading as="h2">
                            What matters to us?
                        </Heading>

                        <Heading as="p">
                            We are a fitness 
                        </Heading>
                    </Box>
                </Box>

                <Box sx={styles.details}>
                    <Box sx={styles.detailsContent}>
                        <Heading as="h2">
                            What we do?
                        </Heading>

                        <Heading as="p">
                            We are a fitness 
                        </Heading>
                    </Box>
                </Box>

                <Box sx={styles.details}>
                    <Box sx={styles.detailsContent}>
                        <Heading as="h2">
                            How we do it?
                        </Heading>

                        <Heading as="p">
                            We are a fitness 
                        </Heading>
                    </Box>
                </Box>
        
              
            </Container>
        </Box>
    );
};

export default AboutUsPage;

const styles = {
    contentWrapper: {
        display: ['block', null, null, null, 'grid', 'flex'],
        gridTemplateColumns: ['1fr 1fr', null, null, null, '0.9fr 1.1fr'],
        gap: [0, 0, 0, 0, 40],
        alignItems: 'center',
        minHeight: [null, null, '100vh', '70vh', '50vh', '100vh'],
        pt: ['150px', null, null, null, null, null, '140px', '130px'],
        pb: ['0px', null, null, '0px', null, 10, '0px'],
        textAlign: ['center', null, 'left'],
    },
    content: {
        maxWidth: [null, null, null, '75%', '100%'],
        margin: [null, null, null, '0 auto', 0],
        textAlign: [null, null, null, 'center', 'left'],
        h1: {
      
            fontWeight: 600,
            fontSize: ['34px', '34px', '34px', '44px', '40px', '49px', '62px'],
            lineHeight: [1.26, 1.26, 1.11, 1.4, 1.11],
            color: 'black',
        },
        p: {
            maxWidth: [450, null, null, 'none', 450],
            fontSize: ['14px', null, '18px', 17, '16px', '15px', '18px'],
            lineHeight: [1.87, 1.87, 2.33, 2.33, 2],
            mt: ['25px', null, null, null, 4],
        },
    },
    details: {
        display: ['block', null, null, null, 'grid', 'flex'],
        gridTemplateColumns: ['1fr 1fr', null, null, null, '0.9fr 1.1fr'],
        gap: [0, 0, 0, 0, 40],
        alignItems: 'center',
        
        pt: ['50px', null, null, null, null, null, '50', '50'],
        pb: ['0px', null, null, '0px', null, 10, '0px'],
    },
    detailsContent: {
        maxWidth: [null, null, null, '75%', '100%'],
        margin: [null, null, null, '0 auto', 0],
        textAlign: [null, null, null, 'left', 'left'],
        p: {
            maxWidth: [450, null, null, 'none', 450],
            fontSize: ['14px', null, '18px', 17, '16px', '15px', '18px'],
            lineHeight: [1.87, 1.87, 2.33, 2.33, 2],
            mt: ['5px', null, null, null, 4],
        },
    }
};
