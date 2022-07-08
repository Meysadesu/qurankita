import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Layout from './component/layout/layout'
import styles from './index.module.css'

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
			<div id='container'
				 className={styles.container}>
					{dataQuran.map((e, i) => {
						return	<Link key={i} href={`/surat/${e.nomor}`}>
							<a key={i} className={styles.body__card}>
								<Card key={i} surat={e.nomor} arabic={e.nama} arti={e.arti} latin={e.nama_latin} tempat={e.tempat_turun}/>
							</a>
						</Link>
					})}
			</div>
		</Layout>
	)
}

const Card = function({surat, arabic, arti, latin, tempat}) {
	return (
		<div id='card' className={styles.card}>
			<div id='nomer' className={styles.nomer}>
				{surat}
			</div>
			<div className={styles.information__quran}>
				<div className={styles.info}>
					<p>{arti}</p>
					<p id='latin'>{latin}</p>
					<p id='turun'>tempat turun : {tempat}</p>
				</div>
				<p id='arabic' className={styles.arabic}>{arabic}</p>
			</div>
		</div>
	)
}