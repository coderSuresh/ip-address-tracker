import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const searchQuery = e.target[0].value
        searchQuery && (window.location.search = `search=${searchQuery}`)
    }

    return (
        <header className="text-center h-52 bg-header-pattern-mobile md:bg-header-pattern-desktop">
            <h1 className="font-bold pt-5 text-2xl text-white">IP Address Tracker</h1>
            <form onSubmit={handleSubmit} className="flex w-[calc(100% - 40px)] mt-4 md:mx-auto mx-5 md:max-w-sm">
                <input type="text"
                    className='w-full text-sm py-3 px-5 rounded-l-md active:outline-none focus:outline-none'
                    placeholder="Search for any IP address"
                />
                <button
                    aria-label='Search'
                    className="bg-very-dark-gray active:opacity-80 active:outline-none focus:outline-none text-white rounded-r-md"
                >
                    <FontAwesomeIcon icon={faChevronRight} className='px-4' />
                </button>
            </form>
        </header>
    )
}

export default Header 