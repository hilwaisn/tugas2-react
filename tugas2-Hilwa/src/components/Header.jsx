/* eslint-disable react/prop-types */
export default function Header(){
    return(
        <div className="items-center justify-center mb-4 p-4 bg-gray-200">
            <div className="max-w-full w-full bg-white p-5 rounded-lg shadow-md">
                <div className="flex items-center">
                <img src="./image/Logo Buah.jpg" className="w-20 h-20 rounded-full mr-4"></img>
                <p className="text-4xl font-bold text-green-800">Farmers Market</p>
                </div>
            </div>
        </div>
    )
}