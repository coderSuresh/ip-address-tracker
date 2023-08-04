import React from 'react'

const ErrorModal = ({error}) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white rounded-xl p-10">
                <h1 className="text-center text-2xl font-bold">Error</h1>
                <p className="text-center text-sm mt-2">{error}</p>
                <button
                    className="bg-very-dark-gray w-full text-white px-5 py-2 rounded-md mt-5 active:opacity-80 active:outline-none focus:outline-none"
                    onClick={() => window.location.search = ''}>OK</button>
            </div>
        </div>
    )
}

export default ErrorModal