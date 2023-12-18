import React from 'react'

function MenuNavbar() {
  return (
    <>
      <div className="flex justify-center items-center gap-3">
        <h3 className="font-bold text-white text-sm"> Sering di baca :</h3>
        <div className="flex gap-2">
          <button className="p-3 text-sky-700 bg-emerald-200 rounded-3xl text-xs font-extrabold">
            Al Kahfi
          </button>

          <button className="p-3 text-sky-700 bg-emerald-200 rounded-3xl text-xs font-extrabold">
            Al Kahfi
          </button>

          <button className="p-3 text-sky-700 bg-emerald-200 rounded-3xl text-xs font-extrabold">
            Al Kahfi
          </button>

          <button className="p-3 text-sky-700 bg-emerald-200 rounded-3xl text-xs font-extrabold">
            Al Kahfi
          </button>
        </div>
      </div>
    </>
  );
}

export default MenuNavbar