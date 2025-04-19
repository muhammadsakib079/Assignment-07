import '../index.css'

export default function Nev() {

  return (

    <>
      <section className="poppins flex justify-between items-center px-[7vw] py-[3vh]">

        <div>
          <h3 className='text-3xl text-[#003EA4] font-medium'>
            Auction<span className='font-bold text-[#FFD337]'>Gallery</span>
          </h3>
        </div>

        <ul className="flex gap-18 text-xl">
          <li><a href="">Home</a></li>
          <li><a href="">Auctions</a></li>
          <li><a href="">Categories</a></li>
          <li><a href="">How to works</a></li>
        </ul>

        <div>
          <div className="flex-none navbar-center gap-5">
            <div className="navbar-end">
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0}  className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <ul
                
                className="menu menu-normal dropdown-content bg-base-100 rounded-box z-1 mt-3 w-62 p-2 shadow">
                <li>
                  <a href='' className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a href="">Settings</a></li>
                <li><a href="">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>

  )
  
}