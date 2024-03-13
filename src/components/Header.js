
const Header = () => {
  return (
    <div className="h-16 my-7 shadow-lg flex justify-between">
      <div className="ml-4 font-bold text-4xl text-blue-700">SHEKHAR MOBILE SHOP</div>
      <div className=" mr-8">
        <button className=" mx-2 p-2 cursor-pointer bg-gray-200 hover:bg-gray-400 rounded-lg">Setting</button>
        <button className=" mx-2 p-2 cursor-pointer bg-gray-200 hover:bg-gray-400 rounded-lg">Calculator</button>
        <button className=" mx-2 p-2 cursor-pointer bg-gray-200 hover:bg-gray-400 rounded-lg">Help</button>
      </div>
    </div>
  )
}

export default Header