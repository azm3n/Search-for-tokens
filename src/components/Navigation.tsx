import ArrowLeftIcon from '../assets/arrow_left.svg'

const Navigation = () => {
  return (
    <div className='flex h-14 w-full items-center justify-between gap-4 rounded-t-2xl border border-[#2B344D] p-3'>
      <button className='flex h-8 w-8 items-center justify-center rounded-2xl bg-[#2B344D80] px-2 py-1'>
        <ArrowLeftIcon />
      </button>
      <p className='text-base font-bold text-[#F7F7F7]'>Select a token</p>
      <div className='h-8 w-8'></div>
    </div>
  )
}

export default Navigation
