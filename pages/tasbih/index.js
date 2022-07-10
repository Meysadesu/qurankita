import { useState } from "react";
import Layout from "../component/layout/layout";

export default function About() {

    const [count, setCount] = useState(0)

    return (
        <Layout>
            <div className="h-[70vh] w-[100vw] flex flex-col justify-center items-center">
                <div className=" flex flex-col items-center">
                    <p className="text-[40px] font-popins h-[100px] w-[200px] flex justify-center items-center text-dark-grey bg-slate-400 rounded-[10px]">{count}</p>
                    <p onClick={() => setCount(0)} className="my-9 px-[50px] py-[10px] bg-violet rounded font-popins">Reset</p>
                    <button onClick={() => setCount(count += 1)} className=" px-[50px] py-[10px] bg-violet rounded font-popin">COUNT</button>
                </div>
            </div>
        </Layout>
    ) 
}