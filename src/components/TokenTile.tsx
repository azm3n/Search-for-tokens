import {FC} from 'react'
import {Token} from '../interfaces'

type Props = {
  token: Token
}

const TokenTile: FC<Props> = ({
  token: {name, ticker, icon, change, price, plusIcon},
}) => {
  return (
    <div className='group relative flex min-h-16 w-full items-center justify-between overflow-hidden rounded-xl bg-[#171C2F] px-3 py-2'>
      <div className='z-10 flex h-12 w-auto gap-2'>
        <div className='relative size-12'>
          <img src={icon} className='rounded-[24px]' />
          <img
            src='https://s3-alpha-sig.figma.com/img/9d63/6e4e/de74b4442a7b709d84c023c572b586d0?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H~c3zXu5tcW9Ktc7pV6oY3LVIMovSpNurhPxhH-7tCE-ApIR197Ryr-yHsyQBNmK9VaG-W6AmeObIQSoGS9xsrSGym70M-v6IKSJSmmdDynRWvzWnh6I-tB9-6dxXd63oZJEszyf6g6AS32rckLKf7Pue-OOLk~9r7jx~6usUpx50UdmghACc8UY2Z8xiFVI9JMYeVpsyRmGM4cLkiXeVzMFwChQM0~llfO0LPGiQjg5JJVZ1lPPN2sW7K2vo357i9reC4NAL6QlyVU7VH7pYMwwQVksbsI1qrMNcyewHQ3OZd3jyOo-~K~X9BACq-GtKzh3jJm2LsI42~0CFWTrng__'
            className='absolute bottom-0 right-[18px] size-3'
          />
          <img
            src='https://s3-alpha-sig.figma.com/img/fd72/ba43/2a431352c244e94c171157ee37409203?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cjRJZbvi52qIZz~xhJduffNoEI59QjED7Vd5LVynXsPv5LxCwNmh4aQRAAifNKtZr7OvE6mIVfe2ODOCPgagnFO2PoUzZhH2JugJWVrJQ-BjsNyBLayQNs4ePcJO3M8jJkiRWxeHFm~r1cvlcBl0NUy17Zodi1EJH9Vn6QzQpRM0ddwz9xepHKf8oW6nxIlaM5QjOvlQcY3hLhJiKuymsQ3q85TnNtuXnmKwb2J~wmTIZ-9WUWc-HYcXXX-C3JclTReQyHtwhjnknOfzP4pyGKlb4KBW3UPnhNJIkyx1da5xE1oel~Y32xuVCf77Tatb6DT3WSgWTR87B9zaVeGgBg__'
            className='absolute bottom-0 right-[12px] size-3'
          />
          <img
            src='https://s3-alpha-sig.figma.com/img/a422/8e7f/172c929a3de115b3ce695c16e664b282?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GzPLlv2CB-kPncpDUZN5U~ssa~WUmsIg29nm7aiSXadS8VGhq8eX2~ME80kon-EZw1lrtJQ48htvT~jFfiTJrzwguTlfeX2ydO3WU11OG~RGrnMBPHCHfcPGnfAs9EFh8oJyBpMpEziNMGgf~b8uuEKTDAD6tuGMLQgbBM1FGL11iXkk0ebaXLwhPa0qiCTx2H11VQTNFVpd1padYLFRFfAEe6ebJVw62IAy2g0T2Y3CpQcf~QXIvjhrpKw8NZYgBwhWiINAKzzusRUjZengDgwnsYUuVDCTZilyQglKCrD2msxach8FYkDTMO8YrUas4O2LMGQRKB9hhiJilBeJJw__'
            className='absolute bottom-0 right-[6px] size-3'
          />
          <div className='absolute bottom-0 right-0 flex size-3 items-center justify-center rounded-md bg-[#3E4864] text-xxs font-bold text-[#F7F7F7]'>
            {`${plusIcon}+`}
          </div>
        </div>
        <div className='flex h-[42px] flex-col justify-between gap-[3px]'>
          <p className='text-base font-bold leading-[22px] text-[#F7F7F7]'>
            {name}
          </p>
          <span className='leading-[13px]leading-[13px] flex h-[17px] max-w-fit items-center justify-center rounded-[4px] bg-[#3E4864] px-[5px] py-[2px] text-[10px] text-[#F7F7F7]'>
            {ticker}
          </span>
        </div>
      </div>
      <div className='z-10 flex h-[42px] flex-col items-end justify-between gap-0'>
        <p className='text-base font-bold leading-[22px] text-[#F7F7F7]'>
          {`$${price}`}
        </p>
        <span className='h-[20px] rounded-[4px] bg-[#171C2F]'>
          <span className='flex h-[20px] items-center justify-center rounded-[4px] bg-[#D2585840] px-[8px] py-[2px] text-[12px] leading-4 text-[#F08282]'>
            {`${change}%`}
          </span>
        </span>
      </div>
      {/* <div className="absolute left-0 top-full h-1/2 w-full animate-[wave_2s_linear_infinite] bg-[url('/src/assets/wave.svg')] bg-contain group-hover:top-1/2"></div> */}
    </div>
  )
}

export default TokenTile
