import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

interface PlayerProps {
  className: string
}
export default function Player({ className }: PlayerProps) {
  return (
    <AudioPlayer
      autoPlay
      src={`${
        import.meta.env.PUBLIC_BASE_PATH
      }music/pruebas/09 - What what.mp3`}
      onPlay={(e) => console.log("onPlay")}
      className={className}
    />
  )
}
