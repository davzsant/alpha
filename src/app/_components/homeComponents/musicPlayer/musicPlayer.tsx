import Image from "next/image"

export default function musicPlayer(){
    const musicOptions = {
        thumbnail: "https://via.placeholder.com/150/771796",
        name: "Campo de morango",
        lengh: 3.14,
        isPlaying: false,
        musicUrl: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3"
    }
    return(
        <div>
            <p>Music Player</p>
            <p>{musicOptions.name}</p>
            <Image src={musicOptions.thumbnail} alt={`${musicOptions.name} album image`}/>
            <div>
                <button>Previou</button>
                <button>Play</button>
                <button>Pause</button>
                <button>Reset</button>
                <button>Next</button>
            </div>
        </div>
    )
}