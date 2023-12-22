import Image from 'next/image'
import book from '../../public/assets/iconBookHeart.svg'
import google from '../../public/assets/google.svg'
import github from '../../public/assets/github.svg'
import rocket from '../../public/assets/RocketLaunch.svg'


export default function Home() {
  return (
    <div className='p-5 h-full flex'>
      <div className='flex flex-row h-full w-1/3 rounded-md bg-image-login bg-cover justify-center items-center gap-4'>
        <Image className='brightness-125' src={book} alt='book' />
        <h1 className='text-3xl font-bold brightness-125 text-transparent bg-gradient-horizontal bg-clip-text leading-base'>BookWise</h1>
      </div>
      <div className='flex flex-col w-2/3 justify-center items-center'>
        <div className='w-1/3 flex flex-col gap-10'>
          <header className='w-full flex flex-col gap-2'>
            <h3 className='text-gray-100 font-semibold text-2xl'>Boas vindas!</h3>
            <p className='text-gray-200 font-thin text-base'>Faça seu login ou acesse como visitante</p>
          </header>
          <div className='w-full flex flex-col gap-4'>
            <button className='bg-gray-600 h-[72px] rounded-[8px] flex flex-row gap-5 items-center px-6 py-5 text-[1.125rem] text-gray-200'>
              <Image className='w-8 h-8' src={google} alt='google' />
              <p>Entrar com Google</p>
            </button>
            <button className='bg-gray-600 h-[72px] rounded-[8px] flex flex-row gap-5 items-center px-6 py-5 text-[1.125rem] text-gray-200'>
              <Image className='w-8 h-8' src={github} alt='github' />
              <p>Entrar com GitHub</p>
            </button>
            <button className='bg-gray-600 h-[72px] rounded-[8px] flex flex-row gap-5 items-center px-6 py-5 text-[1.125rem] text-gray-200'>
              <Image className='w-8 h-8' src={rocket} alt='rocket' />
              <p>Acessar como visitante</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
