const Home = () => {
  return (
    <div>
      <section className="grid grid-rows-1 grid-cols-1 grid-flow-col gap-5 
      sm:grid-rows-2 sm:grid-cols-2 
      md:grid-rows-3 md:grid-cols-3">
        <img
          src="https://www.gap.com/Asset_Archive/GPWeb/content/0030/015/306/assets/FA235245_M_DP_MOB_1.jpg"
          alt="men with clothes"
          className="object-cover row-start-1 col-start-1 row-end-1 col-end-2 w-full h-[550px] bg-[200px]
          sm:row-start-1 sm:col-start-2 sm:row-end-1 sm:col-end-2
          md:row-start-1 md:col-start-1  md:grid-rows-subgrid md:row-span-3 md:h-full
          "
        />
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/quiet-luxury-1606239428.jpg"
          alt="men with clothes"
          className="object-cover row-start-2 col-start-1 col-end-1 w-full h-[200px]
          sm:row-start-3 sm:col-start-1 sm:row-end-3 sm:col-end-3 
          md:row-start-1 md:col-start-2  md:col-end-2 md:row-span-1
          "
        />
        <div className=" row-start-3 col-start-1  col-end-1 row-span-1 flex flex-col justify-center items-center
        sm:row-start-1 sm:col-start-2  sm:col-end-1
        md:row-start-2 md:col-start-2  md:col-end-3 md:row-span-1
        ">
          <h3 className="text-[1.5rem]  text-center">
            ULTIMATE <br /> <span className="text-[2.5rem] font-volkhov">CLOTHES</span>
          </h3>
          <p className="text-gray-600">NEW COLLECTION</p>
          <button className="mt-2 duration-300 p-3 bg-black rounded text-white hover:bg-[#30A2FF]  ">
            SHOP NOW
          </button>
        </div>
        <img
          src="https://coolwallpapers.me/picsup/3110737-men-clothes_outdoor_women-fashion.jpg"
          alt="clothes"
          className="object-cover row-start-4 col-start-2  col-end-1 row-span-1 w-full h-[300px] 
          sm:row-start-2 sm:col-start-2 sm:row-end-3 sm:col-end-2 sm:h-full
          md:row-start-3 md:col-start-2  md:ol-end-2 md:row-span-1 
          "
        />
        <img
          src="https://images.unsplash.com/photo-1635944201335-f9165880a0b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D"
          alt="men with clothes"
          className="object-cover row-start-5 col-start-2  col-end-1 row-span-1 w-full h-[600px] 
          sm:row-start-2 sm:col-start-1 sm:row-end-2 sm:col-end-2 
          md:h-full md:row-start-1 md:row-end-4 md:col-start-3 md:col-end-3 md:row-span-4
          "
        />
      </section>
      {/* <section className="grid grid-rows-3 grid-cols-3 grid-flow-col gap-5 ">
        <img
          src="https://www.gap.com/Asset_Archive/GPWeb/content/0030/015/306/assets/FA235245_M_DP_MOB_1.jpg"
          alt="men with clothes"
          className="object-cover row-start-1 col-start-1 grid grid-rows-subgrid gap-4 row-span-3"
        />
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/quiet-luxury-1606239428.jpg"
          alt="men with clothes"
          className="object-cover row-start-1 col-start-2  col-end-2 row-span-1 "
        />
        <div className=" row-start-2 col-start-2  col-end-3 row-span-1 flex flex-col justify-center items-center">
          <h3 className="text-[1.5rem]  text-center">
            ULTIMATE <br /> <span className="text-[2.5rem] font-volkhov">CLOTHES</span>
          </h3>
          <p className="text-gray-600">NEW COLLECTION</p>
          <button className="mt-2 duration-300 p-3 bg-black rounded text-white hover:bg-[#30A2FF]  ">
            SHOP NOW
          </button>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_y4_fjE11_BfZK2o7zW8DRab1Q7IoCJ-ZRqIeQRtrb1f6uLbWAXhHFtkDnVF7oKZgAM&usqp=CAU"
          alt="clothes"
          className="object-cover row-start-3 col-start-2  col-end-2 row-span-1 w-full"
        />
        <img
          src="https://i.guim.co.uk/img/media/84f37e562bd17bd57a2c10b618a30808bb072974/0_0_2250_3000/master/2250.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=f2a733c624e314166f101e419506403a"
          alt="men with clothes"
          className="object-cover w-full h-full row-start-1 row-end-4 col-start-3 col-end-3 grid grid-rows-subgrid  row-span-4 "
        />
      </section> */}
    </div>
  );
};

export default Home;
