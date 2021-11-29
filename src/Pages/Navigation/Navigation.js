import React from 'react';

const Navigation = () => {
    return (
        <>
            
            <ul className="flex  flex-col	items-end col-span-1">
  <li className="-mb-px mr-1">
    <a className="bg-white inline-block border-l   rounded-t py-2 px-4 text-blue-700 font-semibold" href="#">Active</a>
  </li>
  <li className="mr-1">
    <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Tab</a>
  </li>
  <li className="mr-1">
    <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Tab</a>
  </li>
  <li className="mr-1">
    <a className="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href="#">Tab</a>
  </li>

</ul>
            
        </>
    );
};

export default Navigation;