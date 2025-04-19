import '../index.css'
export default function Hero() {

    const scrollToCart = () => {
        const section = document.getElementById("cart-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <section className="sora relative py-[20vh] text-white ">

            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover"
                    src="/Banner-min.jpg"
                />
            </div>


            <div className="relative text-white text-5xl font-semibold flex flex-col justify-center h-full px-[7vw]">
                <h1 className="leading-tight">
                    Bid on Unique Items from <br /> Around the World
                </h1>
                <p className="text-2xl font-thin py-8">
                    Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions
                </p>
                <button onClick={scrollToCart} className='btn text-xl font-medium max-w-[12vw] rounded-full py-[3vh]'>
                    Explore Auctions
                </button>
            </div>
        </section>
    );

}

