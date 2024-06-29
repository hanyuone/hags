import Footer from '../components/ui/footer';
import { Input } from '../components/ui/input';
import { Switch } from '../components/ui/switch';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';

const Settings = () => {
  return (
    <div className='bg-main min-h-screen text-left flex flex-col items-center justify-center pt-10 pb-20 text-white'>
      <h1 className='text-4xl font-semibold'>Settings</h1>
      <div className='flex flex-col mt-4 w-3/4 lg:w-4/5'>
        <h2 className='text-2xl font-medium'>Modifying caps</h2>
        <h3 className='text-lg font-medium mt-3'>
          Individual cognitive load index cap
        </h3>
        <div className='flex flex-row my-4 gap-6'>
          <p className='font-normal text-sm'>
            You will receive a notification if the cognitive load index of an
            individual application reaches this number.
          </p>
          <Input type='number' className='text-black' placeholder='1,250' />
        </div>
        <h3 className='text-lg font-medium'>
          Individual cognitive load index cap
        </h3>
        <div className='flex flex-row my-4 gap-6'>
          <p className='font-normal text-sm'>
            You will receive a notification if the cognitive load index of an
            individual application reaches this number.
          </p>
          <Input type='number' className='text-black' placeholder='10,250' />
        </div>
      </div>
      <div className='flex flex-col mt-4 w-3/4 lg:w-4/5'>
        <h2 className='text-2xl font-medium'>
          Calculating the Cognitive Load Index
        </h2>
        <div className='flex flex-row my-4 align-text-bottom justify-between'>
          <h3 className='text-lg font-medium'>Enable audio detection</h3>
          <Switch className='bg-white' />
        </div>
        <p className='font-normal text-sm'>
          Noise pollution can significantly increase cognitive load by creating
          a distracting environment that requires additional mental effort to
          process information or complete tasks.
        </p>
        <p className='font-normal text-sm'>
          Volume is generally considered loud when it's over 80 decibels (dB).
          Music speed of 92 beats per minute (bpm) or more is considered to be
          fast, which can also affect cognitive processing and concentration.
        </p>
        <div className='flex flex-row my-4 align-text-bottom justify-between'>
          <h3 className='text-lg font-medium'>
            Enable high colour contrast detection
          </h3>
          <Switch className='bg-white' />
        </div>
        <p className='font-normal text-sm'>
          Being constantly exposed to high contrast colours can strain the eyes
          and contribute to visual fatigue, leading to an increase in cognitive
          load as the brain works harder to interpret visual information.
        </p>
        <p className='font-normal text-sm'>
          Excessive contrast between text and background can make it harder to
          read and lead to eye fatigue.
        </p>
        <p className='font-normal text-sm'>
          The optimal contrast ratio is 4.5:1 for regular text and 3:1 for large
          text.
        </p>
        <div className='flex flex-row my-4 align-text-bottom justify-between'>
          <h3 className='text-lg font-medium'>Enable motion detection</h3>
          <Switch className='bg-white' />
        </div>
        <p className='font-normal text-sm'>
          Motion in the visual field can distract attention and increase
          cognitive load as the brain needs to allocate resources to process the
          movement while simultaneously trying to focus on the primary task.
        </p>
        <div className='flex flex-row my-4 align-text-bottom justify-between'>
          <h3 className='text-lg font-medium'>
            Enable brightness level detection
          </h3>
          <Switch className='bg-white' />
        </div>
        <p className='font-normal text-sm'>
          Inconsistent or excessively bright lighting can cause discomfort and
          strain, resulting in higher cognitive load due to the need for
          continuous adaptation and adjustment by the eyes. High brightness
          settings can lead to discomfort and exacerbate eye strain,
          particularly in low-light environments.
        </p>
        <div className='flex flex-row my-4 align-text-bottom justify-between'>
          <h3 className='text-lg font-medium'>
            Enable small font size detection
          </h3>
          <Switch className='bg-white' />
        </div>
        <p className='font-normal text-sm'>
          Small font sizes can be difficult to read, leading to eye strain and
          requiring more cognitive effort to interpret text, thus increasing
          cognitive load. Text that is too small requires more effort to read,
          leading to eye fatigue and potentially causing headaches.
        </p>
        <div className='flex flex-row my-4 align-text-bottom justify-between'>
          <h3 className='text-lg font-medium'>
            Enable colour temperature detection
          </h3>
          <Switch
            className='bg-white'
          />
        </div>
        <p className='font-normal text-sm'>
          Extreme colour temperatures (too warm or too cool) can affect visual
          comfort and cognitive performance, leading to increased cognitive load
          due to the need for the brain to adapt to less optimal viewing
          conditions. Warmer colors (like yellows and oranges) are generally
          easier on the eyes compared to cooler colors (like blues and greens),
          especially in low-light conditions.
        </p>
        <div className='my-4'>
          <h2 className='text-2xl font-medium'>Notifications</h2>
          <div className='flex flex-row my-4 align-text-bottom justify-between'>
            <h3 className='text-lg font-medium'>
              Individual cognitive load index cap
            </h3>
            <Switch className='bg-white' />
          </div>
          <p className='font-normal text-sm'>
            A push notification is sent if you excceed the individual cognitive
            load index cap.
          </p>
          <div className='flex flex-row my-4 align-text-bottom justify-between'>
            <h3 className='text-lg font-medium'>
              Aggregate cognitive load index cap
            </h3>
            <Switch className='bg-white' />
          </div>
          <p className='font-normal text-sm'>
            A push notification is sent if you exceed the aggregate cognitive
            load index cap.
          </p>
        </div>
        <div className='my-4'>
          <h2 className='text-2xl font-medium'>Enabled applications</h2>
          <p className='font-normal text-sm'>
            The individual and aggregate cognitive load index will only be
            calculated when the user is on the specific applications:
          </p>
          <div className='flex flex-col gap-4 mt-2'>
            <div className='flex items-center space-x-2 mt-2 mb-2'>
              <Checkbox id='terms1' color='#FFF' className='border-white' />
              <div className='grid gap-1.5 leading-none'>
                <label
                  htmlFor='terms1'
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white'
                >
                  TikTok
                </label>
              </div>
            </div>
            <div className='flex items-center space-x-2'>
              <Checkbox id='terms1' color='#FFF' className='border-white' />
              <div className='grid gap-1.5 leading-none'>
                <label
                  htmlFor='terms1'
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white'
                >
                  Instagram
                </label>
              </div>
            </div>
            <Button className='text-button bg-button-fill font-bold px-10 hover:bg-button-fill'>
              Delete all session data
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
