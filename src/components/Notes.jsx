import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {
  // console.log(props);
  return (
    
    <div className="flex flex-wrap justify-center text-center">

      <div className="flex flex-1  h-100 w-100 mt-4 space-x-5">
        <div className="bg-yellow-300 w-40 h-40">
      <h2 className="text-2xl text-black font-bold"> Do Grocery</h2>
      <p className="text-black font-sans pt-7">Buy products To Clean House.</p>
      <hr />
      <div className="flex flex-row px-3 mx-4 ">
      <img src="/img/refresh.png" className="w-7 h-7 mr-6 mt-4"/>
      <img src="/img/delete.png" className="w-7 h-7 mt-4" />
        </div>
        </div>
        <div className="bg-yellow-300 w-40 h-40">
        <h2 className="text-2xl text-black font-bold"> Do Grocery</h2>
      <p className="text-black font-sans pt-7">Buy products To Clean House.</p>
      <hr />
      <div className="flex flex-row px-3 mx-4 ">
      <img src="/img/refresh.png" className="w-7 h-7 mr-6 mt-4"/>
      <img src="/img/delete.png" className="w-7 h-7 mt-4" />
        </div>
        </div>
        <div className="bg-yellow-300 w-40 h-40">
        <h2 className="text-2xl text-black font-bold"> Do Grocery</h2>
      <p className="text-black font-sans pt-7">Buy products To Clean House.</p>
      <hr />
      <div className="flex flex-row px-3 mx-4 ">
      <img src="/img/refresh.png" className="w-7 h-7 mr-6 mt-4"/>
      <img src="/img/delete.png" className="w-7 h-7 mt-4" />
        </div>
        </div>
      </div>
      

    </div>
  );
}

export default Notes;