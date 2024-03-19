import { Comentario } from "@/types/Disco"

export default function getComents(): Comentario[] {
  const Comentarios: Comentario[] = [
    {
      workId: "0c0d8655-2682-43c5-8eb8-ea27ec1af7f9",
      order: 24,
      nick: "MiNombreEsNico",
      fecha: "2014-03-16",
      texto:
        "Predy me encanta tu trabajo! La verdad que desde el año pasado que le di download! Ja pero ahora me acabo de registrar! xD Exelente el PredyFlip360!",
      avatar: "",
      godBoy: true,
    },

    {
      workId: "0c0d8655-2682-43c5-8eb8-ea27ec1af7f9",
      order: 23,
      nick: "AnTidOtEMaN",
      fecha: "2011-10-10",
      texto:
        "yaaaaaaaaaaah!que wapooo Predy,buen stilo man,buena voz...punToooos brooOOh!!",
      avatar: "",
      godBoy: true,
    },
  ]

  return Comentarios
}
