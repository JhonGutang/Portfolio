import Image from "next/image";

const UnderConstruction = () => {
    return ( <div>
        <div className="flex">
        <Image src='/thumbnail/under_construction.png' alt="" width={500} height={500}></Image>
        </div>
        <div className="text-3xl">
            Sorry, Website still under construction
        </div>
    </div> );
}
 
export default UnderConstruction;