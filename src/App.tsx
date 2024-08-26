import {useState} from 'react'
import {TokensList, Navigation} from './components'
import {generateTokens} from './utils'
import {Token} from './interfaces'
import LoupeIcon from './assets/loupe.svg'

const App = () => {
  const [tokenNumber, setTokenNumber] = useState(0)
  const [tokens, setTokens] = useState<Token[]>([])
  const [filteredTokens, setFilteredTokens] = useState<Token[]>([])
  const [loadedTokens, setLoadedTokens] = useState(20)

  console.log({loadedTokens})

  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-9 bg-gray-500'>
      <div className='w-90 rounded-2xl bg-[#0F0F1A]'>
        <Navigation />
        <div className='flex h-122 w-full flex-col gap-4 rounded-b-2xl border border-[#2B344D] p-3'>
          <div className='relative text-gray-600 focus-within:text-gray-400'>
            <input
              className='py block h-10 w-full rounded-md border border-[#2B344D] bg-[#040407] py-2.25 pl-2 pr-8 text-sm text-[#F7F7F7] placeholder-[#7685A0] outline-none focus:focus:ring-1 focus:ring-[#2B344D] focus:ring-opacity-50'
              placeholder='Search'
              required
              onChange={e => {
                setFilteredTokens(
                  tokens.filter(
                    token =>
                      token.name
                        .toLocaleLowerCase()
                        .includes(e.target.value.toLocaleLowerCase()) ||
                      token.ticker
                        .toLocaleLowerCase()
                        .includes(e.target.value.toLocaleLowerCase()),
                  ),
                )
                setLoadedTokens(20)
              }}
            />
            <span className='absolute inset-y-0 right-0 flex items-center pr-2'>
              <button>
                <LoupeIcon />
              </button>
            </span>
          </div>
          <TokensList
            tokens={filteredTokens}
            loadedTokens={loadedTokens}
            setLoadedTokens={setLoadedTokens}
          />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <input
          className='py block h-10 w-36 rounded-md border border-[#2B344D] bg-[#040407] px-2 py-2.25 text-sm text-[#F7F7F7] placeholder-[#7685A0] outline-none focus:focus:ring-1 focus:ring-[#2B344D] focus:ring-opacity-50'
          placeholder='Token number'
          type='number'
          onChange={e => setTokenNumber(Number(e.target.value))}
          required
        />
        <button
          className='rounded-2xl bg-[#171C2F] px-3 py-2 text-[#F7F7F7]'
          onClick={() => {
            const tokens = generateTokens(tokenNumber)
            setTokens(tokens)
            setFilteredTokens(tokens)
            setLoadedTokens(20)
          }}
        >
          Generate tokens
        </button>
      </div>
    </div>
  )
}

export default App
