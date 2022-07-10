import axios from "axios"
import Head from "next/head"
import { useCallback, useEffect, useState } from "react"
import Layout from "../component/layout/layout"

export default function Surat({surat}) {
    
    const [dataQuran, setDataQuran] = useState({})
    const [ayat, setAyat] = useState([])
    const [seeAll, setSeeAll] = useState(false)

    const getSurah = useCallback(
        async () => {
            await axios.get("https://equran.id/api/surat/" + surat)
            .then( resp => {
                let response = resp.data
                setAyat(response.ayat)
                setDataQuran(response)
            }) .catch( err => {
                console.log(err)
            })
        }
    )

    const suratAudio = () => {
        let id = ""
        switch (surat.length) {
            case 1:
                id = `00${surat}`
                break;
            case 2:
                id = `0${surat}`
                break
            default:
                id = surat
                break;
        }
        return id
    }

    useEffect (() => {
        getSurah()
    },[])
    
    return (
        <div>
            <Head>
                <title>Surat {dataQuran.nama_latin} - Qurankita Media quran online</title>
            </Head>
            <Layout>
                <div>
                    <div className="w-[90%] mx-auto mt-[10px] mb-[40px]">
                        <div className="flex w-full justify-between h-[80px] p-[10px] items-center box-border">
                            <div>
                                <p>{dataQuran.nama_latin}</p>
                                <p>{dataQuran.arti}</p>
                            </div>
                            <p className="text-[30px] font-nask"> {dataQuran.nama} </p>
                        </div>
                        <div className={`${seeAll === true ? "h-full" : "h-[120px]"} w-full p-[10px] box-border rounded-[10px] text-[15px] mb-[20px] overflow-hidden bg-dark-grey`}>
                            <p dangerouslySetInnerHTML={{__html: dataQuran.deskripsi}}></p>
                        </div>
                        <div onClick={() => setSeeAll(!seeAll)} className="w-full font-bold bg-violet h-[50px] rounded-[20px] mb-[20px] flex justify-center items-center">Baca selengkapnya</div>
                        <audio className="w-full m-auto" controls>
                            <source src={`https://equran.id/content/audio/${suratAudio()}.mp3`}/>
                        </audio>
                    </div>
                    {ayat.map((e, i) => {
                        return (
                            <div key={i} id="card" className="w-[90%] rounded-[10px] my-[40px] mx-auto bg-dark-grey p-[10px] box-border">
                                <p  className="font-nask text-right text-[20px]" dir="rtl">{e.ar}</p>
                                <p  dangerouslySetInnerHTML={{__html: e.tr}} className="text-[11px] my-[10px]"></p>
                                <p  className="text-[11px]">{e.idn}</p>
                            </div>
                        )
                    })}
                </div>
            </Layout>
        </div>
    )
}

Surat.getInitialProps = async ({query}) => {
    const {surat} = query
    return {surat}
}