const Card = ({ title, price, img }) => {
    function fun(){
        alert("product added to card successfully");
    }
    return (
        <div className="rounded-2xl shadow-md p-4 hover:shadow-xl flex
        flex-col">
            <img src={img} alt={title} className=" h-40 object-fit rounded-xl" />
            <h3 className="text-lg font-semibold mt-3">{title}</h3>
            <p className="text-gray-600 font-bold mt-1">${price}</p>
            <button
                onClick={fun}
                className="mt-4 w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700"
            >
                Add to Cart
            </button>        </div>
    );
};

export default Card;