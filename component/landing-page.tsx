import React from 'react'

export default function Page() {
  return (
    <div>
      <div className='flex justify-between'>
        <div className="flex gap-4">
          <p className="font-medium text-lg"> Community</p>
          <p className="font-medium text-lg"> Community</p>
          <p className="font-medium text-lg"> Community</p>
          <p className="font-medium text-lg"> Community</p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 border w-16 bg-slate-300 text-slate-600 border-black rounded-xl">
            {" "}
            Search
          </button>
          <p> Log in</p>
          <button className="px-4 py-2 border border-black rounded-xl">
            {" "}
            sign up
          </button>
        </div>
      </div>
    </div>
  );
}
