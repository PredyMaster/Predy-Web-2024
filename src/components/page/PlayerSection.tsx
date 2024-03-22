import Player from "../ui/Player"

interface Cancion {
  order: number
  titulo: string
  producedBy: string
  link: string
  tieneVideoclip: boolean
  urlVideoclip: string
  duracion: string
  audio: string
  videoAudio: string
  featuring?: string
}

interface PlayerSectionProps {
  disco: string
  canciones: any[]
}

export default function PlayerSection({
  disco,
  canciones,
}: PlayerSectionProps) {
  return (
    <div className="max-w-[40rem] mx-auto w-full my-10">
      <div className="flex flex-col justify-start">
        <h2 className="text-2xl text-pink-600 pb-6">Canciones:</h2>
        <ul>
          {canciones.map((cancion: any, index) => {
            return (
              <li key={index}>
                <span>
                  <span className="text-pink-600 text-xl">{cancion.order}</span>
                  <span className="mx-2">-</span>
                  <span className="text-xl">{cancion.titulo}</span>
                </span>

                <Player
                  disco={disco}
                  song={cancion.audio}
                  className="my-4 rounded-md"
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
