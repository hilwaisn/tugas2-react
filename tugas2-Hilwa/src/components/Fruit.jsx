/* eslint-disable react/prop-types */
import { CircleAlert, Heart, MessageCircle, Send } from "lucide-react";

function Fruit({ fruits }) {
    const info = (fruit) => {
        alert(`Nama: ${fruit.name}\nHarga: ${fruit.price}\nKuantiti: ${fruit.quantity}\nKategori: ${fruit.category}`);
    };
    const like = (fruit) => alert(`Saya suka Buah ${fruit.name}`);
    const message = () => { window.prompt(`Berikan komentarmu :`) };
    const confirmation = () => window.confirm(`Apakah kamu yakin mau mengirim ini?`);

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="max-w-4xl w-full p-8 rounded-lg shadow-md  bg-white">
                {fruits.map(fruit => (
                    <div key={fruit.id} className="flex items-center mb-4 p-4 rounded-lg border-2 border-gray-500">
                        <img src={fruit.photo} alt={fruit.name} className="w-48 h-48 rounded-full mr-5" />
                        <div>
                            <h2 className="font-bold text-4xl">{fruit.name}</h2>
                            <p className="text-2xl text-gray-600 mb-2">{fruit.description}</p>
                            <div className="flex justify-between text-1xl">
                                <button onClick={() => info(fruit)} className="btn-info">
                                    <CircleAlert className="icon" /> Info
                                </button>
                                <button onClick={() => like(fruit)} className="btn-like">
                                    <Heart className=" hover:bg-red-600 transition" /> Like
                                </button>
                                <button onClick={() => message(fruit)} className="btn-comment">
                                    <MessageCircle className="ml-5" /> Comment
                                </button>
                                <button onClick={() => confirmation(fruit)} className="btn-send">
                                    <Send className="icon" /> Send
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Fruit;