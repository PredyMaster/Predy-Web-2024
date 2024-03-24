import { Disco } from "@/types/Disco"

interface AllDiskInfoProps {
  disk: Disco
  colorTexto: string
  colorFondo: string
}

export default function AllDiskInfo({
  disk,
  colorTexto,
  colorFondo,
}: AllDiskInfoProps) {
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

  console.log(colorFondo, " ColorFondo ")
  const fechaSalidaString =
    fechaSalida instanceof Date ? fechaSalida.toLocaleDateString() : fechaSalida

  return (
    <div className="max-w-[40rem] text-center mx-auto sticky top-0 mt-20">
      <h1
        className="text-6xl p-2 rounded-md font-bold uppercase"
        style={{
          color: colorTexto,
          background: colorFondo,
        }}
      >
        {nombre}
      </h1>
      <h4 className="text-sm mt-4">{fechaSalidaString}</h4>

      <div className="flex flex-col my-12">
        <div className="flex flex-row gap-6 mx-auto pb-10">
          <img className="rounded-sm max-w-64" src={portada} />
          <img className="rounded-sm max-w-64" src={contraportada} />
        </div>
        <p className="text-left">{descripcion}</p>
      </div>

      <div className="flex justify-around">
        <span className="flex items-center gap-x-3">
          Descargas:{" "}
          <strong
            className="text-xl mt-0.5 py-0.5 px-1.5  rounded-sm"
            style={{
              color: colorTexto,
              backgroundColor: colorFondo,
            }}
          >
            {descargas}
          </strong>
        </span>
        <span className="flex items-center gap-3">
          Puntos HHG:{" "}
          <strong
            className="text-xl mt-0.5 py-0.5 px-1.5  rounded-sm"
            style={{
              color: colorTexto,
              backgroundColor: colorFondo,
            }}
          >
            {points}
          </strong>
        </span>
      </div>
    </div>
  )
}
