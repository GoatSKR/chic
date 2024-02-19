export default function Hero() {
    return (
        <div className="  bg-black h-screen flex flex-col md:justify-center md:items-center pt-[220px] md:pt-[20px]  ">
            <div className=" md:w-[480px] px-4 ">
                <p className="text-xl font-INTER text-[#A0A0A0] pt-2">
                    Logo
                </p>
                <h1 className="text-left text-white font-LEITURA font-medium md:w-[480px] w-[300px] text-4xl md:text-6xl">
                    Great Things are created together
                </h1>
                <p className="md:text-xl font-INTER text-[#A0A0A0] pt-2 md:w-[480px] w-[300px]">
                    We're Chic — We build tools, connect communities, and design
                    experiences that bring people together to expand anyone's creative
                    potential
                </p>
            </div>

            <div className="mt-[60px] md:mt-[80px] ml-0 pl-2 md:pl-0">
                <div className=" flex flex-row items-start md:items-center p-2 rounded-xl hover:bg-slate-600">
                    <div>
                        <img className="h-8 w-8 rounded-md mt-2" src="https://framerusercontent.com/images/vDmcrpnnUnU901b5mcyumI8WI.png" alt="" />
                    </div>
                    <div className="flex flex-col text-white pl-2 ">
                        <p className="text-white ">NAKE</p>
                        <p className="text-[#A0A0A0] text-sm ">Community co-working from our HQ in San Francisco</p>
                    </div>
                </div>

                <div className=" flex flex-row items-start md:items-center p-2 rounded-xl hover:bg-slate-600">
                    <div>
                        <img className="h-8 w-8 rounded-md mt-2" src="https://framerusercontent.com/images/vDmcrpnnUnU901b5mcyumI8WI.png" alt="" />
                    </div>
                    <div className="flex flex-col text-white pl-2 ">
                        <p className="text-white ">VERS Models</p>
                        <p className="text-[#A0A0A0] text-sm ">Community co-working from our HQ in San Francisco</p>
                    </div>
                </div>

                <div className=" flex flex-row items-start md:items-center p-2 rounded-xl hover:bg-slate-600">
                    <div>
                        <img className="h-8 w-8 rounded-md mt-2" src="https://framerusercontent.com/images/vDmcrpnnUnU901b5mcyumI8WI.png" alt="" />
                    </div>
                    <div className="flex flex-col text-white pl-2 ">
                        <p className="text-white ">Bold Magazine</p>
                        <p className="text-[#A0A0A0] text-sm ">Community co-working from our HQ in San Francisco</p>
                    </div>
                </div>
            </div>


        </div>
    )
}