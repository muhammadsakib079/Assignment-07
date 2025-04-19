export default function Footer() {

  return (
    <>
      <section className="text-center py-[5vh]">
        <div >
          <h3 className='text-3xl text-[#003EA4] font-medium'>
            Auction<span className='font-bold text-[#FFD337]'>Gallery</span>
          </h3>
        </div>

        <ul className="flex justify-center gap-8 text-xl pt-[2vh]">
          <li>Bid.</li>
          <li>Win.</li>
          <li>Own.</li>



        </ul>
        <ul className="flex justify-center gap-12 text-xl py-[2vh]">
          <li><a href="">Home</a></li>
          <li><a href="">Auctions</a></li>
          <li><a href="">Categories</a></li>
          <li><a href="">How to works</a></li>
        </ul>

        <h3 className="text-xl">
          © 2025 AuctionHub. All rights reserved.
        </h3>
      </section>
    </>
  )
}