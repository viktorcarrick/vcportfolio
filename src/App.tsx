import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import './App.css'
import BlobComponent from './components/BlobComponent';

function App() {


  return (
    <>
      <div className='h-screen w-screen bg-bgblue font-display'>
        <div className='w-screen h-32 border border-red-600 flex flex-row font-medium'>
          <div className='border border-green-600 flex-grow text-white text-2xl flex justify-start items-center pt-4'>
          <h3 className="pl-4">VIKTOR CARRICK</h3>
          </div>
          <div className='border border-green-400 flex-grow-0 grid grid-cols-3 gap-24 place-items-center text-white text-2xl pr-24 pt-4'>
            <h3 className="">OM MIG</h3>
            <h3 className="">PORTFOLIO</h3>
            <h3 className="">KONTAKT</h3>
          </div>
        </div>
        <div className='"h-[calc(100dvh-128px)] mt-24'>
          <div className='border-2 border-black flex justify-center'>
            <div className='flex border-2 border-pink-400 items-center'>
              <BlobComponent width={533} height={550} className=''></BlobComponent>
              <div className='flex flex-col text-8xl font-medium text-white ml-2'>
                <h3 className='mb-2'>
                  <TypeAnimation
                    sequence={[
                      'VIKTOR \nCARRICK', // Types 'One'
                      2000, // Waits 1s
                      () => {
                        console.log('Sequence completed');
                      },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={1}
                    style={{ fontSize: 'text-3xl', display: 'inline-block',whiteSpace: 'pre-line' }}
                  />
                </h3>
                <h3 className='text-3xl font-light'>Interaktionsdesigner med passion för UX och kod!</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
