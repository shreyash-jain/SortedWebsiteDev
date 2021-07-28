/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import PatternBG from 'assets/patternBG.png';

const packages = [
  {
    name: 'Free Plan',
    description: 'For Individual Fitness Trainers, Yoga Instructors, Nutritionists and Therapists having upto 30 clients',
    buttonText: 'Signup Now',
    header: 'Always Free',
    priceWithUnit: '₹0/mo',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Manage consultation, classes and personal training, reminder on WhatsApp',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'One to one and class group chat',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Simple fee collection',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Personalized website',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Diet and Workout plan builder',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Access to recipes and exercises library',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Live Fitness Classes',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Multiple professionals per institution',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'More than 30 clients',
        isAvailable: false,
      },
    ],
  },
  {
    name: 'Professional Plan',
    header: 'Recommended',
    priceWithUnit: '3 months free\n',
    priceExtra: 'then ₹499/mo',
    description: 'Have more than 30 clients ?',
    buttonText: 'Signup Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Manage consultation, classes and personal training, reminder on WhatsApp',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'One to one and class group chat',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Simple fee collection',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Personalized website',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Diet and Workout plan builder',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Access to recipes and exercises library',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Live Fitness Classes',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'More than 30 clients',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Multiple professionals per institution',
        isAvailable: false,
      },

    ],
  },
  {

    name: 'Institution Plan',
    description: 'For Yoga Centers, Gyms and Studios',
    priceWithUnit: '₹1499/mo',
    header: 'Coming soon',
    buttonText: 'Signup Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Manage consultation, classes and personal training, reminder on WhatsApp',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'One to one and class group chat',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Simple fee collection',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Personalized website',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Diet and Workout plan builder',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Access to recipes and exercises library',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Live Fitness Classes',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Multiple professionals per institution',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'More than 30 clients',
        isAvailable: true,
      },
    ],
  },
];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="Plans for all your needs"
          slogan="Pricing"
          isWhite={false}
        />
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: ['wrap', null, null, 'nowrap'],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: 'primary',

    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
