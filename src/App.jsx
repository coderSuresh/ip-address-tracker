import Header from './components/Header'
import { useState, useEffect } from 'react'

const Details = () => {

  const [ip, setIp] = useState('')
  const [location, setLocation] = useState('')
  const [timezone, setTimezone] = useState('')
  const [isp, setIsp] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchIp = async () => {
    const res = await fetch('https://ipapi.co/json/')
    const data = await res.json()
    setIp(data.ip)

    setLocation(`${data.city}, ${data.region}, ${data.country_name}`)
    setTimezone(data.timezone)
    setIsp(data.org)
    setLoading(false)
  }

  useEffect(() => {
    fetchIp()
  }, [])

  return (
    <div className="mx-5">
      {
        loading ? <h1>Loading...</h1> :
          <div className='flex flex-col text-center md:text-start items-center md:flex-row gap-5 bg-white shadow rounded-xl px-10 py-6 md:items-start justify-between md:mx-auto mt-[-4rem] md:max-w-4xl w-full'>
            <div className="ip flex-1">
              <p className='text-xs text-dark-gray uppercase tracking-widest font-medium mb-2'>IP ADDRESS</p>
              <p className="text-xl text-very-dark-gray font-medium">{ip}</p>
            </div>

            <div className="divider md:block hidden my-3 ml-5 h-16 w-[1px] opacity-40 bg-dark-gray" />

            <div className="location flex-1">
              <p className='text-xs text-dark-gray uppercase tracking-widest font-medium mb-2'>LOCATION</p>
              <p className="text-xl text-very-dark-gray font-medium">{location}</p>
            </div>

            <div className="divider md:block hidden my-3 ml-5 h-16 w-[1px] opacity-40 bg-dark-gray" />

            <div className="timezone flex-1 ">
              <p className='text-xs text-dark-gray uppercase tracking-widest font-medium mb-2'>TIMEZONE</p>
              <p className="text-xl text-very-dark-gray font-medium">{timezone}</p>
            </div>

            <div className="divider md:block hidden my-3 ml-5 h-16 w-[1px] opacity-40 bg-dark-gray" />

            <div className="isp flex-1">
              <p className='text-xs text-dark-gray uppercase tracking-widest font-medium mb-2'>ISP</p>
              <p className="text-xl text-very-dark-gray font-medium">{isp}</p>
            </div>
          </div>
      }
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
