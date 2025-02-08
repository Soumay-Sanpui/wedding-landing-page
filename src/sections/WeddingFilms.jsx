const WeddingFilms = () => {
    const videoLinks = [];
    return (
        <div className={"w-screen h-screen bg-black"}>
            {
                videoLinks.map((video, index) => (
                    <div key={index}>
                        (// TODO: Add video player here)
                    </div>
                ))
            }
        </div>
    )
}

export default WeddingFilms;