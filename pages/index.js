import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Layout from './component/layout/layout'

export default function Home() {

	const [dataQuran, setDataQuran] = useState([])

	const getData = () => {
		axios.get("https://equran.id/api/surat")
			.then((response) => {
				let res = response.data
				setDataQuran(res)
			}).catch((err) => {
				console.log(err)
			})
	}
	useEffect(() => getData(),[])
	return (
		<Layout>
			<Head>
				<title>Qurankita - Media quran online</title>
			</Head>
			<div className="hidden md:flex md:w-[100vw] md:h-[100vh] md:justify-center md:items-center md:font-bold ">
				<p className="font-popins text-[70px]">
					Tolong Buka versi Mobile
				</p>
			</div>
			<div className="w-full m-auto p-[10px] box-border flex flex-wrap justify-around md:hidden">
					{dataQuran.map((e, i) => {
						return (
							<Link key={i} href={`/surat/${e.nomor}`}>
								<a key={i} className="w-[350px] h-full my-[10px]">
									<Card key={i} surat={e.nomor} arabic={e.nama} arti={e.arti} latin={e.nama_latin} tempat={e.tempat_turun}/>
								</a>
							</Link>
						)
					})}
			</div>
		</Layout>
	)
}

const Card = function({surat, arabic, arti, latin, tempat}) {
	return (
		<div className=" bg-dark-grey text-white p-[10px] box-border leading-[23px] flex text-[14px] justify-around items-center rounded-[10px]">
			<div className="w-[60px] rounded-[10px] h-[60px] flex justify-center items-center bg-card">
				{surat}
			</div>
			<div className="w-[75%] justify-between flex h-full">
				<div className="w-[60%]">
					<p>{arti}</p>
					<p>{latin}</p>
					<p>tempat turun : {tempat}</p>
				</div>
				<p className="float-right font-nask mt-[10px] text-[25px]">{arabic}</p>
			</div>
		</div>
	)
}