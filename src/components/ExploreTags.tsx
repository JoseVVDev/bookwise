interface TagProps {
  id: string,
  name: string
}

export default function ExploreTags({ name }: TagProps ) {
  return (
    <button className='cursor-pointer rounded-full border border-purple-100 px-4 py-1 transition hover:bg-purple-200 hover:text-gray-100' >
      {name}
    </button>
  );
}
