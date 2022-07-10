import Link from "next/link"
import { useRouter } from "next/router"

export default function Navigation() {
    const location = useRouter()

    return (
        <div className="w-full h-full relative block md:hidden">
            <div className="h-[55px] p-[20px] w-full box-border leading-[50%] flex items-center">
                <p className="font-popins font-bold text-[25px] text-white">
                    QuranKita.
                </p>
            </div>
            <div className="w-full h-[50px] relative m-auto items-center flex justify-evenly bg-main">
                {
                    [{
                        path : "/",
                        name : "Quran"
                    },
                    {
                        path : "/tasbih",
                        name : "Tasbih"
                    },
                    {
                        path : "/favorite",
                        name : "Favorite"
                    }].map( ( value, index) => {
                        return (
                            <Link key={index} href={value.path}>
                                <a className={` ${ location.pathname === value.path ? "text-violet" : "text-white" } w-[40%] h-[50px] font-popins flex justify-center items-center`}>
                                    { value.name }
                                </a>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}