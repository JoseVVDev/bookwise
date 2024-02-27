"use client";

const tags = [ "Tudo", "Computação", "Educação", "Fantasia" ];

export default function ExploreTags() {
  return (
    <>
      {tags.map((tag) => {
        return (
          <button
            key={tag}
            className='cursor-pointer rounded-full border border-purple-100 px-4 py-1 transition hover:bg-purple-200 hover:text-gray-100'
          >
            {tag}
          </button>
        );
      })}
    </>
  );
}
