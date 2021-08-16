/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'For whom Sort It is made for ?',
    contents: (
      <div>
        Individual Yoga Instructors, Fitness Trainers, Nutritionists and Institutions such as Gyms and Yoga Centers
      </div>
    ),
  },
  {
    title: 'Is App only on Play Store ?',
    contents: (
      <div>
        Yes currently App is only available at Play Store, but soon it is coming for IOS users
      </div>
    ),
  },
  {
    title: `Why is there different app for clients ?`,
    contents: (
      <div>
        So that they can get a simple UI/UX to connect to teachers
      </div>
    ),
  },
  {
    title: `Is Sort it free ?`,
    contents: (
      <div>
        Yes Sort it completely free for 3 months, and thereafter choose your plan, free plan will always exist and it covers most of the features, check them in the pricing section
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
