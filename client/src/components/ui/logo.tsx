import logo from '../../assets/logo.png'

const UnclutterLogo = () => {
  return (
    <div className='flex flex-row gap-1 justify-center'>
      <img src={logo} alt="Logo" className="h-5 w-4" />
      <p className='text-white'>Unclutter</p>
    </div>
  )
}

export default UnclutterLogo;
