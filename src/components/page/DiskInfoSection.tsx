interface AllDiskInfoProps {
  disk: any
}

export default function AllDiskInfo({ disk }: AllDiskInfoProps) {
  const {
    nombre,
    fechaSalida,
    portada,
    contraportada,
    descripcion,
    descargas,
    points,
    canciones,
  } = disk

  return (
    <div className="max-w-[40rem] text-center mx-auto sticky top-0">
      <h1 className="text-6xl font-bold text-pink-600 uppercase">{nombre}</h1>
      <h4 className="text-sm">{fechaSalida}</h4>

      <div className="flex flex-col my-12">
        <div className="flex flex-row gap-6 mx-auto pb-10">
          <img className="rounded-sm max-w-32" src={portada} />
          <img className="rounded-sm max-w-32" src={contraportada} />
        </div>
        <p className="text-left">{descripcion}</p>
      </div>

      <div className="flex justify-around">
        <span className="flex items-center gap-3">
          Descargas:{" "}
          <strong className="text-pink-600 text-xl mt-0.5">{descargas}</strong>
        </span>
        <span className="flex items-center gap-3">
          Puntos HHG:{" "}
          <strong className="text-pink-600 text-xl mt-0.5">{points}</strong>
        </span>
      </div>
    </div>
  )
}
