import {FC, useRef} from 'react'
import {Token} from '../interfaces'
import TokenTile from './TokenTile'

type Props = {
  tokens: Token[]
  loadedTokens: number
  setLoadedTokens: (value: number) => void
}

const TokensList: FC<Props> = ({tokens, loadedTokens, setLoadedTokens}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  return (
    <div
      className='flex h-full w-full flex-col gap-1 overflow-y-scroll'
      ref={ref}
      onScroll={() => {
        if (
          ref.current &&
          ref.current.offsetHeight + ref.current.scrollTop + 1 >=
            ref.current.scrollHeight
        ) {
          setLoadedTokens(loadedTokens + 20)
        }
      }}
    >
      {tokens.slice(0, loadedTokens).map(token => (
        <TokenTile token={token} key={token.id} />
      ))}
    </div>
  )
}

export default TokensList
