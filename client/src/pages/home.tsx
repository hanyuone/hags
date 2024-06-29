import { Alert, AlertDescription } from '../components/ui/alert';
import { Info } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import CognitiveInsights from '../components/ui/cognitive-insights';
import AppBreakdown from '../components/ui/app-breakdown';
import {
  appBreakdownData,
  appBreakdownX,
  appBreakdownY,
  cogInsightX,
  cogInsightY,
  cogInsights,
} from '../lib/data';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useToast } from '../components/ui/use-toast';
import Logo from '../components/ui/logo';
import { Badge } from '../components/ui/badge';

export default function Home() {
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-main min-h-screen text-center flex flex-col items-center justify-center pt-10 pb-20'>
      <Logo />
      <h1 className='text-white text-4xl font-semibold'>Welcome Joanna</h1>
      <Alert className='w-3/4 lg:w-1/3 mt-4 bg-alert-fill border-alert-border'>
        <Info className='h-4 w-4' />
        <AlertDescription className='text-black text-left'>
          To get started, please complete the following action items.
        </AlertDescription>
      </Alert>
      <div className='items-top flex space-x-2 my-6'>
        <Checkbox id='terms1' color='#FFF' className='border-white' />
        <div className='grid gap-1.5 leading-none'>
          <label
            htmlFor='terms1'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white'
          >
            Set cap on individual cognitive load score
          </label>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <Button className='text-button bg-button-fill font-bold px-4 hover:bg-button-fill'>
          Upload video or image
        </Button>
        <Button
          className='text-white bg-slate-700 font-bold px-4 hover:bg-slate-700'
          onClick={() => {
            toast({
              title: 'Session successfully has been n',
            });
            localStorage.clear();
          }}
        >
          Reset my session
        </Button>
      </div>
      <Card className='mt-5 w-11/12 lg:w-1/3 bg-card-fill border-none flex flex-col items-center justify-center text-center shadow-card'>
        <CardHeader>
          <CardTitle className='text-white text-4xl font-bold'>0.785</CardTitle>
          <CardDescription className='text-white font-semibold w-3/4 mx-auto'>
            Your current aggregate cognitive index score
          </CardDescription>
          <Badge className='bg-slate-500 text-white hover:bg-slate-500'>
            The average aggregate cognitive index score is 0.5
          </Badge>
        </CardHeader>
        <CardContent>
          <CognitiveInsights
            data={cogInsights}
            x={cogInsightX}
            y={cogInsightY}
          />
        </CardContent>
        <CardFooter>
          <Button
            className='text-button bg-button-fill font-bold px-10 hover:bg-button-fill'
            onClick={() => navigate('/insights')}
          >
            Details
          </Button>
        </CardFooter>
      </Card>
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
          <AppBreakdown
            data={appBreakdownData}
            x={appBreakdownX}
            y={appBreakdownY}
          />
        </CardContent>
        <CardFooter>
          <Button
            className='text-button bg-button-fill font-bold px-10 hover:bg-button-fill'
            onClick={() => navigate('/insights')}
          >
            Details
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
