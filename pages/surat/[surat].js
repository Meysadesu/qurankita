import axios from "axios"
import Head from "next/head"
import { useEffect, useState } from "react"
import Layout from "../component/layout/layout"
import styles from './surat.module.css'

export default function Surat({surat}) {
    
    const [dataQuran, setDataQuran] = useState({})
    const [ayat, setAyat] = useState([])
    const [seeAll, setSeeAll] = useState(false)

    const getSurah = async function() {
            await axios.get("https://equran.id/api/surat/" + surat)
            .then( resp => {
                let response = resp.data
                setAyat(response.ayat)
                setDataQuran(response)
            }) .catch( err => {
                console.log(err)
            })
    }

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
                    <div className={styles.atas}>
                        <div className={styles.header__container}>
                            <div className={styles.info}>
                                <p>{dataQuran.nama_latin}</p>
                                <p id="arti">{dataQuran.arti}</p>
                            </div>
                            <p style={{ fontFamily: 'var(--nask)' }} className={styles.header}> {dataQuran.nama} </p>
                        </div>
                        <div className={(seeAll === true ? styles.active : styles.nActive)}>
                            <p dangerouslySetInnerHTML={{__html: dataQuran.deskripsi}}></p>
                        </div>
                        <div onClick={() => setSeeAll(!seeAll)} className={styles.button}>Baca selengkapnya</div>
                        <audio className={styles.audio} controls>
                            <source src={`https://equran.id/content/audio/${suratAudio()}.mp3`}/>
                        </audio>
                    </div>
                    {ayat.map((e, i) => {
                        return (
                            <div key={i} id="card" className={styles.cardayat}>
                                <p  className={styles.ar}>{e.ar}</p>
                                <p  dangerouslySetInnerHTML={{__html: e.tr}} className={styles.tr}></p>
                                <p  className={styles.idn}>{e.idn}</p>
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