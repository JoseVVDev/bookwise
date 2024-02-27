import Image from "next/image";
import Link from "next/link";
import book from "#/assets/iconBookHeart.svg";
import google from "#/assets/google.svg";
import github from "#/assets/github.svg";
import rocket from "#/assets/RocketLaunch.svg";

export default function Home() {
  return (
    <div className='flex h-full p-5'>
      <div className='flex h-full w-1/3 flex-row items-center justify-center gap-4 rounded-md bg-image-login bg-cover'>
        <Image className='brightness-125' src={book} alt='book' />
        <h1 className='bg-gradient-horizontal bg-clip-text text-3xl font-bold leading-base text-transparent brightness-125'>
          BookWise
        </h1>
      </div>
      <div className='flex w-2/3 flex-col items-center justify-center'>
        <div className='flex w-1/3 flex-col gap-10'>
          <header className='flex w-full flex-col gap-2'>
            <h3 className='text-2xl font-semibold text-gray-100'>
              Boas vindas!
            </h3>
            <p className='text-base font-thin text-gray-200'>
              Faça seu login ou acesse como visitante
            </p>
          </header>
          <div className='flex w-full flex-col gap-4'>
            <button className='flex h-[72px] flex-row items-center gap-5 rounded-[8px] bg-gray-600 px-6 py-5 text-[1.125rem] text-gray-200'>
              <Image className='h-8 w-8' src={google} alt='google' />
              <p>Entrar com Google</p>
            </button>
            <button className='flex h-[72px] flex-row items-center gap-5 rounded-[8px] bg-gray-600 px-6 py-5 text-[1.125rem] text-gray-200'>
              <Image className='h-8 w-8' src={github} alt='github' />
              <p>Entrar com GitHub</p>
            </button>
            <Link
              href='/main'
              className='flex h-[72px] flex-row items-center gap-5 rounded-[8px] bg-gray-600 px-6 py-5 text-[1.125rem] text-gray-200'
            >
              <Image className='h-8 w-8' src={rocket} alt='rocket' />
              <p>Acessar como visitante</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
