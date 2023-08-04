import { useEffect, useState } from 'react'
import MapComponent from './MapComponent'
import ErrorModal from './ErrorModal'

const Details = () => {
    const [ip, setIp] = useState('')
    const [location, setLocation] = useState('')
    const [timezone, setTimezone] = useState('')
    const [latLong, setLatLong] = useState({
        latitude: 0,
        longitude: 0
    })
    const [isp, setIsp] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const searchParams = new URLSearchParams(window.location.search)
    const search = searchParams.get('search')

    const fetchIp = async (query) => {

        let url = 'https://ipapi.co/json/'

        if (query) {
            url = `https://ipapi.co/${query}/json/`
        }

        const res = await fetch(url)
        const data = await res.json()

        if (data.error) {
            setError(true)
            setErrorMsg(data.reason)
            return
        }

        setIp(data.ip)

        setLocation(`${data.city}, ${data.region}, ${data.country_name}`)
        setTimezone(data.timezone)
        setIsp(data.org)
        setLatLong({
            latitude: parseFloat(data.latitude),
            longitude: parseFloat(data.longitude)
        })

        setLoading(false)
    }

    useEffect(() => {
        if (search) {
            fetchIp(search)
        } else {
            fetchIp()
        }
    }, [search])
   
    return (
        <>
            {
                error && <ErrorModal error={errorMsg} />
            }
            <div className="mx-5">
                <div className='flex flex-col text-center md:text-start items-center md:flex-row gap-5 bg-white shadow rounded-xl px-10 py-6 md:items-start justify-between md:mx-auto mt-[-4rem] md:max-w-4xl w-full'>
                    <div className="ip flex-1">
                        <p className='text-xs text-dark-gray uppercase tracking-widest font-medium mb-2'>IP ADDRESS</p>
                        <p className="text-xl text-very-dark-gray font-medium">{loading ? '192.212.174.101' : ip}</p>
                    </div>

                    <div className="divider md:block hidden my-3 ml-5 h-16 w-[1px] opacity-40 bg-dark-gray" />

                    <div className="location flex-1">
                        <p className='text-xs text-dark-gray uppercase tracking-widest font-medium mb-2'>LOCATION</p>
                        <p className="text-xl text-very-dark-gray font-medium">{loading ? 'Brooklyn, NY, 10001' : location}</p>
                    </div>

                    <div className="divider md:block hidden my-3 ml-5 h-16 w-[1px] opacity-40 bg-dark-gray" />

                    <div className="timezone flex-1 ">
                        <p className='text-xs text-dark-gray uppercase tracking-widest font-medium mb-2'>TIMEZONE</p>
                        <p className="text-xl text-very-dark-gray font-medium">{loading ? 'UTC-05:00' : timezone}</p>
                    </div>

                    <div className="divider md:block hidden my-3 ml-5 h-16 w-[1px] opacity-40 bg-dark-gray" />

                    <div className="isp flex-1">
                        <p className='text-xs text-dark-gray uppercase tracking-widest font-medium mb-2'>ISP</p>
                        <p className="text-xl text-very-dark-gray font-medium">{loading ? 'SpaceX Starlink' : isp}</p>
                    </div>
                </div>
            </div>
            {
                !loading && <MapComponent location={location} latLong={latLong} />
            }
        </>
    )
}

export default Details