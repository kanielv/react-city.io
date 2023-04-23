type HudProps = {

}

const Header = () => {
    return (
        <>
            <div className="relative mb-1 inset-x-0 top-0 h-24 w-full bg-slate-300">
                Header
            </div>
        </>
    )
}

const BuildBar = () => {
    return (
        <>
            <div className="absolute inset-y-48 left-3 w-24 bg-slate-300">
                Build Bar
            </div>
        </>
    )
}

const InfoAside = () => {
    return (
        <>
            <div className="absolute inset-y-36 right-3 w-80 bg-slate-300">
                InfoAside
            </div>
        </>
    )
}

const Hud = () => {
    return (
        <>
            <BuildBar />
            <Header />
            <InfoAside />
        </>

    )
}

export default Hud