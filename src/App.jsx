import Header from './components/Header'

const Details = () => {
  return (
    <div className="mx-5">
      <div className='flex gap-5 bg-white shadow-sm rounded-xl px-10 py-6 justify-between md:mx-auto mt-[-4rem] md:max-w-4xl w-full'>
        <div className="ip flex-1">
          <p className='text-xs text-dark-gray uppercase tracking-widest font-medium mb-2'>IP ADDRESS</p>
          <p className="text-xl text-very-dark-gray font-medium">192.168.1.10</p>
        </div>

        <div className="divider my-3 ml-5 w-[1px] opacity-40 bg-dark-gray" />

        <div className="location flex-1">
          <p className='text-xs text-dark-gray uppercase tracking-widest font-medium mb-2'>LOCATION</p>
          <p className="text-xl text-very-dark-gray font-medium">Brooklyn, NY 10001</p>
        </div>

        <div className="divider my-3 ml-5 w-[1px] opacity-40 bg-dark-gray" />

        <div className="timezone flex-1 ">
          <p className='text-xs text-dark-gray uppercase tracking-widest font-medium mb-2'>TIMEZONE</p>
          <p className="text-xl text-very-dark-gray font-medium">UTC-05:00</p>
        </div>

        <div className="divider my-3 ml-5 w-[1px] opacity-40 bg-dark-gray" />

        <div className="isp flex-1">
          <p className='text-xs text-dark-gray uppercase tracking-widest font-medium mb-2'>ISP</p>
          <p className="text-xl text-very-dark-gray font-medium">SpaceX Starlink</p>
        </div>

      </div>
    </div>
  )
}

const App = () => {

  return (
    <>
      <Header />
      <Details />

    </>
  )
}

export default App
