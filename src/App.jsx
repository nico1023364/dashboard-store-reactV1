//Dependencies
import { useState, useCallback } from "react";
//Components
import Sidebar from "./components/shared/Sidebar";
//Icons
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiSearch2Line,
  RiArrowDownSLine,
  RiDeleteBin6Line,
} from "react-icons/ri";
//images

//Render Principal
function App() {
  //STATES
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toogleCar = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  //Fecha actual
  const currentDate = new Date();
  let mesActual = new Intl.DateTimeFormat("es-ES", { month: "short" }).format(
    new Date()
  ); //Tomar el mes actual corto
  let diaActual = new Intl.DateTimeFormat("es-ES", { weekday: "long" }).format(
    new Date()
  ); //Tomar el dia actual largo
  const formattedDate = `${diaActual}, ${currentDate.getDate()} ${mesActual} ${currentDate.getFullYear()}`; //Fecha formateadak

  return (
    <div className="bg-[#262837] w-full h-full">
      <Sidebar showMenu={showMenu} />
      {/*Pasar el valor de showMenu como props */}

      {/* Menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toogleCar} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toogleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          {/*Operador ternario para mostras icono de cierrre o apertura del menu */}
        </button>
      </nav>

      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 pb-20">
        <div className="lg:col-span-6 md:p-8 p-4">
          {/* Header */}
          <header>
            {/* Title - Search */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">Jaegar Resto</h1>
                <p className="capitalize text-gray-500">{formattedDate}</p>
              </div>
              <form action="">
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300 " />
                  <input
                    type="text"
                    className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
              <a
                href="#"
                className="relative before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:-bottom-[2px] before:rounded-full py-2 pr-4 text-[#ec7c6a]"
              >
                Hot Dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Cold Dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Soup
              </a>
              <a href="#" className="py-2">
                Grill
              </a>
            </nav>
          </header>

          {/* Title Content */}
          <div className="flex items-center justify-between mb-16 ">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodless</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodless</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodless</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodless</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodless</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodless</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
          </div>
        </div>
        {/* CARRITO */}
        <div
          className={`lg:col-span-2  fixed lg:fixed lg:right-0 lg:w-80 top-0 bg-[#1F1D2B] w-full h-full transition-all ${
            showOrder ? "right-0" : "-right-full"
          } `}
        >
          {/* Orders */}
          <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
            <RiCloseLine
              onClick={toogleCar}
              className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
            />
            <h1 className="text-2xl my-4">Orders #151416</h1>
            {/* Buttons Pills */}
            <div className="flex items-center gap-4 flex-wrap mb-8 lg:flex-nowrap text-[12px]">
              <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
                Dine In
              </button>
              <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
                To Go
              </button>
              <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
                Delivery
              </button>
            </div>
            {/* Cart */}
            <div>
              <div className="grid grid-cols-6 mb-4 p-4">
                <h5 className="col-span-4">Item</h5>
                <h5>Qty</h5>
                <h5>Price</h5>
              </div>
              {/* Container Prodcuts */}
              <div className="overflow-y-scroll h-[200px] md:h-[700px] lg:h-[200px] ">
                {/* Product */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/* Description product */}
                    <div className="col-span-4 flex items-center gap-3">
                      <img
                        src="comida.png"
                        alt="comida"
                        className="w-10 h-10 object-cover "
                      />
                      <div>
                        <h5 className="text-sm">Spaicy seaso....</h5>
                        <p className="text-xs text-gray-500">$2.29</p>
                      </div>
                    </div>
                    {/* Qty */}
                    <div>
                      <span>2</span>
                    </div>
                    {/* Price */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* notes */}
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input
                        type="text"
                        className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                        placeholder="Order note..."
                      />
                    </form>
                    <div>
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/* Description product */}
                    <div className="col-span-4 flex items-center gap-3">
                      <img
                        src="comida.png"
                        alt="comida"
                        className="w-10 h-10 object-cover "
                      />
                      <div>
                        <h5 className="text-sm">Spaicy seaso....</h5>
                        <p className="text-xs text-gray-500">$2.29</p>
                      </div>
                    </div>
                    {/* Qty */}
                    <div>
                      <span>2</span>
                    </div>
                    {/* Price */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* notes */}
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input
                        type="text"
                        className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                        placeholder="Order note..."
                      />
                    </form>
                    <div>
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/* Description product */}
                    <div className="col-span-4 flex items-center gap-3">
                      <img
                        src="comida.png"
                        alt="comida"
                        className="w-10 h-10 object-cover "
                      />
                      <div>
                        <h5 className="text-sm">Spaicy seaso....</h5>
                        <p className="text-xs text-gray-500">$2.29</p>
                      </div>
                    </div>
                    {/* Qty */}
                    <div>
                      <span>2</span>
                    </div>
                    {/* Price */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* notes */}
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input
                        type="text"
                        className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                        placeholder="Order note..."
                      />
                    </form>
                    <div>
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Submit Payment */}
            <div className="absolute bottom-0 left-0 bg-[#262837] p-4 w-full">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Discount</span>
                <span>$0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400"> SubTotal</span>
                <span>$21,03</span>
              </div>
              <div className="">
                <button className="shadow-btn bg-[#ec7c6a] py-2 w-full mt-4 rounded-lg font-medium">
                  Continue to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
