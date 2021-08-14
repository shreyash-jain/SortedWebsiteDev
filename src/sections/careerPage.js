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

const CareerPage = () => {

    const handleSubmit = useCallback( (e) => {
        
        console.log(e);
    }
    )

  return (
    <Box as="section" id="careers" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading as="h1">
              Come join us in building a sorted healthy community
            </Heading>
            <Text as="p">
        
            </Text>
                        
          </Box>
          <Box as="figure" sx={styles.illustration}>
            <Image src={banner} alt="banner" />
          </Box>
        </Box>
        
        <Box sx={styles.subscribe} as={"form"} onSubmit={handleSubmit}>
                  <Label htmlFor="name">Name</Label>
  
                  <Input name="name" id="name" mb={3} placeholder={"Enter your name"} required={true} />
                  
                  <Label htmlFor="phone">Phone</Label>
  
                  <Input name="phone" id="phone" mb={3} placeholder={"Enter your phone"} required={true} />
  
                  <Label htmlFor="email">Email</Label>
  
                  <Input type="email" name="email" id="email"  placeholder={"Enter your email"} mb={3} required={true} />

                  <Label htmlFor="resume" name="resume">Resume</Label>
                  <Input type="file" name="resume" mb={3} style={{ padding: '14px 24px' }} required={true}/>
              
                  <Button className="donate__btn" sx={styles.subscribe.button} variant="darkButton">Submit</Button>
        </Box>
              
      </Container>
    </Box>
  );
};

export default CareerPage;

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
    },
    p: {
      maxWidth: [450, null, null, 'none', 450],
      fontSize: ['14px', null, '18px', 17, '16px', '15px', '18px'],
      lineHeight: [1.87, 1.87, 2.33, 2.33, 2],
      mt: ['25px', null, null, null, 4],
    },
  },
  subscribe: {
      
    alignItems: 'center',
      mt: ['30px'],
      pb: ['30px'],
    width: '90%',
    
      div: {
          display: 'flex',
          
          input: {
              mr: ['15px'],
              padding: '14px 24px',
      minHeight: ['45px', null, null, 60, 50, null, 60],
    },
      },
      button: {
        minHeight: ['45px', null, null, 60, 50, null, 60],
        backgroundColor: '#f5f5f5',
          fontSize: ['14px', '14px', '16px'],
        borderColor: 'primary',
          color: 'black',
          '&:hover': {
              boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
              backgroundColor: 'primary',
              color: 'black',
          }
        
      }
  },
  sponsoredBy: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['center', null, null, null, 'unset'],
    mt: ['30px', '30px', '40px', '40px', '30px'],
    span: {
      color: rgba('#566272', 0.6),
      fontSize: ['14px', '16px', '16px'],
    },
  },
  logos: {
    display: 'flex',
    alignItems: 'center',
    figure: {
      ml: ['10px', '16px', '28px', '16px', '16px'],
    },
    img: {
      maxWidth: ['69px', '85px', '100%', '100%', '79px', '100px', '100%'],
    },
  },
  illustration: {
    ml: [0, 0, '30px', 0, 0],
    mt: ['50px', null, null, null, 0],
    minWidth: ['auto', null, null, null, null, '600px'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    img: {
      maxWidth: ['100%', null, null, '80%', '100%'],
    },
  },
};
