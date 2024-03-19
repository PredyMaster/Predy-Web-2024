import { Disco } from "@/types/Disco"
import Player from "../ui/Player"

interface infoDiskProps {
  disk: Disco
}

export default function InfoDisk({ disk }: infoDiskProps) {
  const formatDate = (date: string | Date) => {
    if (date instanceof Date) return date.toLocaleDateString()
    return date
  }

  return (
    <section className="text-white flex justify-start flex-col text-start mb-10">
      <h2 className=" text-4xl uppercase">{disk.nombre}</h2>
      <img src={disk.portada} alt={disk.nombre} className=" w-36 rounded-sm" />
      <h3>{formatDate(disk.fechaSalida)}</h3>
      <p>Canciones:</p>
      <ul>
        {disk.canciones.map((song, index) => {
          return (
            <>
              <li
                key={song.titulo + index}
                className="text-sm"
              >{`${song.order} - ${song.titulo}`}</li>
              <Player disco="inestable" song={song.audio} />
            </>
          )
        })}
      </ul>
    </section>
  )
}
