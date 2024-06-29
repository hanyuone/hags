import { Button } from '../components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../components/ui/card';
import CognitiveInsights from '../components/ui/cognitive-insights';
import { data1, data2, x, y } from '../lib/data';
import { useNavigate } from 'react-router-dom';
import AppBreakdown from '../components/ui/app-breakdown';
import AggregateBreakdown from '../components/ui/aggregate-breakdown';
import { useEffect } from 'react';
import Logo from '../components/ui/logo';

const Insights = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='bg-main min-h-screen text-center flex flex-col items-center justify-center pt-10 pb-20'>
      <Logo />
      <h2 className='text-white text-4xl font-semibold'>Cognitive Insights</h2>
      <Card className='mt-5 w-11/12 lg:w-1/3 bg-card-fill border-none flex flex-col items-center justify-center text-center shadow-card'>
        <CardHeader>
          <CardTitle className='text-white text-4xl font-bold'>1250</CardTitle>
          <CardDescription className='text-white font-semibold w-3/4 mx-auto'>
            Your current aggregate cognitive index score
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CognitiveInsights data={data1} x={x} y={y} />
        </CardContent>
      </Card>
      <Card className='mt-5 w-11/12 lg:w-1/3 bg-card-fill border-none flex flex-col items-center justify-center text-center shadow-card'>
        <CardHeader>
          <CardTitle className='text-white text-4xl font-bold'>
            Aggregate Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className='text-white text-left'>
          <p className='font-normal text-sm my-3'>
            This number was calculated based on your most recent 10 hour session
            on applications
            <b> Tiktok</b>, <b>Youtube</b> and <b>Instagram</b>.
          </p>
          <p className='font-normal text-sm my-3'>
            Your recent content consumption was 10% higher than your average
            Cognitive Load Index.
          </p>
          <p className='font-normal text-sm my-3'>
            This indicates that the videos you've been watching are more
            overwhelming and draining.
          </p>
          <p className='font-normal text-sm my-3'>
            If this trend continues, it may lead to increased fatigue. Consider
            balancing your viewing habits with less cognitively demanding
            content to maintain optimal mental well-being.
          </p>
        </CardContent>
        <CardFooter>
          <Button
            className='text-button bg-button-fill font-bold px-10 hover:bg-button-fill'
            onClick={() => navigate('/')}
          >
            See actionables
          </Button>
        </CardFooter>
      </Card>
      <Card className='mt-5 w-11/12 lg:w-1/3 bg-card-fill border-none flex flex-col items-center justify-center text-center shadow-card'>
        <CardHeader>
          <CardTitle className='text-white text-4xl font-bold'>
            Aggregate Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent className='text-white text-left'>
          <AggregateBreakdown data={data2} />
        </CardContent>
      </Card>
      <h2 className='text-white text-4xl font-semibold my-10'>
        Average Cognitive Load Index
      </h2>
      <Card className='mt-5 w-11/12 lg:w-1/3 bg-card-fill border-none flex flex-col items-center justify-center text-center shadow-card'>
        <CardHeader>
          <CardDescription className='text-white font-semibold'>
            Application breakdown
          </CardDescription>
          <CardTitle className='text-white text-4xl font-bold'>
            2h 20m
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AppBreakdown data={data1} x={x} y={y} />
        </CardContent>
      </Card>
      <Card className='mt-5 w-11/12 lg:w-1/3 bg-card-fill border-none flex flex-col items-center justify-center text-center shadow-card'>
        <CardHeader>
          <CardTitle className='text-white text-4xl font-bold'>
            Average Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent className='text-white text-left'>
          <AggregateBreakdown data={data2} />
        </CardContent>
      </Card>
      <h2 className='text-white text-4xl font-semibold my-10'>Actionables</h2>
      <Card className='w-11/12 lg:w-1/3 bg-card-fill border-none flex flex-col items-center justify-center text-center shadow-card'>
        <CardHeader>
          <CardDescription className='text-white font-semibold'>
            Disclaimer: these are only suggested actionables.
          </CardDescription>
        </CardHeader>
        <CardContent className='text-white text-left'>
          <p className='font-normal text-sm my-3'>
            <b>Diversify Your Content:</b> Balance your viewing habits with a
            mix of lighter, more relaxing content and mentally stimulating
            videos.
          </p>
          <p className='font-normal text-sm my-3'>
            <b>Take Regular Breaks:</b> Implement short breaks between watching
            sessions to rest your mind and reduce strain.
          </p>
          <p className='font-normal text-sm my-3'>
            <b>Set Viewing Limits:</b> Limit your screen time (less than 1 hour
            at a time), especially for high-load content, to prevent cognitive
            overload.
          </p>
          <p className='font-normal text-sm my-3'>
            <b>Engage in Offline Activities:</b>Incorporate offline activities
            such as reading, walking, or hobbies that do not involve screens to
            give your brain a break.
          </p>
          <p className='font-normal text-sm my-3'>
            <b>Use Mindfulness Techniques: </b>Practice mindfulness or
            meditation to help manage stress and improve focus.
          </p>
          <p className='font-normal text-sm my-3'>
            <b>Adjust Settings:</b> Use app settings to filter or limit
            high-intensity content, ensuring a more balanced viewing experience.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Insights;
