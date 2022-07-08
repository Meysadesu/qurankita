import Navigation from "../navbar/navbar"

export default function Layout({children}) {
    return (
		<div id='container-app'>
            <Navigation/>
            {children}
        </div>
    )
}