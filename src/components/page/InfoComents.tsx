import { Comentario } from "@/types/Disco"
import Player from "../ui/Player"

interface InfoComentsProps {
  comment: Comentario
}

export default function InfoComents({ comment }: InfoComentsProps) {
  const formatDate = (date: string | Date) => {
    if (date instanceof Date) return date.toLocaleDateString()
    return date
  }

  return (
    <div className="text-white flex justify-start flex-col text-start mb-10">
      <h2 className=" text-4xl uppercase">{comment.nick}</h2>
      <h3>{formatDate(comment.fecha)}</h3>
      <p>{comment.texto}</p>
    </div>
  )
}
