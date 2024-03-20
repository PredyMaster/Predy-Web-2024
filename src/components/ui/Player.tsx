import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

interface PlayerProps {
  disco: string
  song: string
  className?: string
}
export default function Player({ disco, song, className }: PlayerProps) {
  return (
    <>
      {/*     <AudioPlayer
      autoPlay
      src={`${
        import.meta.env.PUBLIC_BASE_PATH
      }music/pruebas/09 - What what.mp3`}
      onPlay={(e) => console.log("onPlay")}
      className={className}
    /> */}

      <AudioPlayer
        src={`${
          import.meta.env.PUBLIC_BASE_PATH
        }music/discos/${disco}/${song}.mp3`}
        onPlay={(e) => console.log("onPlay")}
        className={className}
      />
    </>
  )
}
