import { useState } from 'react'
import shokran from './images/illustration-thank-you.svg'
import logo from './images/icon-star.svg'

function App() {

  const [rate, setRate] = useState(null)
  const [active, setActive] = useState(true)
  const [selected, setSelected] = useState(null)
  const num_arr = [1, 2, 3, 4, 5]

  const handleClick = () => {
    if (rate) {
      setActive(!active)
    }
  }

  const handleSelect = (num, e) => {
    setRate(e.target.value)
    setSelected(num)
  }
  return (
    <main className="relative w-full min-h-screen bg-VeryDarkBlue font-sans text-base flex items-center justify-center">
      <article className="w-4/5 md:w-96 mx-auto p-5 flex flex-col gap-3 rounded-xl bg-DarkBlue text-White opacity-100 transition-opacity duration-500 ease-in-out transform">
        {active ?
          <>
            <div className='w-10 h-10 mb-5 bg-VeryDarkBlue rounded-full flex items-center justify-center'>
              <img src={logo} alt="logo" width={17} height={16} />
            </div>

            <div>
              <h1 className='font-bold text-3xl mb-3'>How did we do?</h1>
              <p className='font-normal text-sm text-LightGrey'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>

            <ul className='flex items-center justify-between gap-5 my-3'>
              {num_arr.map(num => {
                return (
                  <li key={num} className={`w-9 h-9 rounded-full ${selected === num ? 'bg-Orange' : 'bg-LightGrey'} hover:bg-Orange flex items-center justify-center cursor-pointer`} data-value={num} onClick={(e) => { setRate(e.target.value), setSelected(num) }}>{num}</li>
                )
              })}
            </ul>

            <button type='submit' className='bg-Orange hover:bg-White hover:text-Orange transition rounded-3xl py-2 border-none outline-none' onClick={handleClick}>
              Submit
            </button>
          </>
          :
          <div className='flex flex-col items-center justify-center gap-3 p-2 '>
            <img src={shokran} alt="thank you" />
            <div className='px-3 py-1 my-2 rounded-2xl bg-VeryDarkBlue text-Orange'>
              <p>You selected {rate} out of 5</p>
            </div>
            <h1 className='text-3xl font-bold my-3'>Thank you!</h1>
            <p className='font-normal text-sm text-center text-LightGrey'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            {/* <button onClick={() => { setActive(!active), setRate(null) }}>Back</button> */}
          </div>

        }
      </article>

      <footer className='absolute bottom-1 text-White'>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className='text-Orange'>Frontend Mentor</a>.
        Coded by <a className='text-Orange' href="https://aymanel.netlify.app/" target="_blank">Ayman El Ouahabi</a>.
      </footer>
    </main>
  )
}

export default App
