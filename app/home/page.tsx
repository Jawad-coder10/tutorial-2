import React from 'react'

export default function HomePage() {
  return (
    <div className="p-5">
      <div className="flex flex-col sm:flex-row p-4 gap-6 bg-orange-100 border border-amber-300 rounded-xl m-10">
        <div className="p-4 border-2 bg-slate-100 rounded-lg border-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nemo a
          odio recusandae cumque
        </div>
        <div className="p-4 border-2 bg-slate-100 rounded-lg border-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          autem iure voluptatum
        </div>
        <div className="p-4 border-2 bg-slate-100 rounded-lg border-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          autem iure voluptatum
        </div>
        <div className="p-4 border-2 bg-slate-100 rounded-lg border-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          autem iure voluptatum
        </div>
      </div>

      {/* partion 2 */}
      <div className="flex p-4 justify-around gap-6 bg-slate-50 border border-black rounded-xl m-10">
        <button className="px-4 py-2.5 border bg-blue-500 text-white border-slate-300 rounded-xl">
          ajouter
        </button>
        <button className="px-4 py-2.5 border bg-blue-500 text-white border-slate-300 rounded-xl">
          s&apos;inscrire
        </button>
        <button className="px-4 py-2.5 border bg-blue-500 text-white border-slate-300 rounded-xl">
          se connecter
        </button>
      </div>

      {/* width & height */}
      <div className="sm:bg-orange-200 sm:text-red-500 md:text-white md:bg-purple-500 lg:bg-stone-400 xl:bg-green-600 2xl:bg-slate-700 mx-auto  h-[20rem] p-7 md:w-[700px] w-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nisi
        tempore, <p className='text-xs'>je suis de type xs</p> sit aliquam esse obcaecati sed
        ratione delectus exercitationem. Rerum voluptates nemo corporis dolorem
        officiis quis iure quae deserunt cupiditate adipisci voluptatibus, eum
        placeat <p className='font-bold text-3xl'>molestiae dolor. Nisi similique recusandae</p> iure, culpa
        laborum, alias consequatur totam vero sit tempore sed sequi suscipit
        vitae cum soluta libero ipsum quae repudiandae eius ratione odit.
        Laborum, molestias esse? Odio recusandae magnam numquam ex maiores
        voluptatem officia debitis, laboriosam error ducimus dolor quibusdam
        ullam atque blanditiis neque obcaecati iusto minus suscipit reiciendis.
        Ipsa asperiores animi autem cupiditate officiis eveniet perspiciatis
        nihil ratione.
      </div>
    </div>
  );
}
