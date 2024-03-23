import { Video } from "@/types/Video"

export function getConciertos(): Video[] {
  const conciertos: Video[] = [
    {
      id: "c1d2e3f4-g5h6-i7j8-k9l0-m1n2o3p4q5r",
      titulo: "Concierto El último titán, Rambla prim.",
      thumbnail: "",
      fechaSalida: "2009-06-14",
      visualizacionesYoutube: 614,
      descripcion:
        "Concierto de Predy, de el tema El ultimo titan, en Rambla prim, junto a palay.",
      descripcionSugerida:
        "El 'Concierto El último titán, Rambla prim' captura la esencia viva de 'El Último Titán' en acción. Junto a Palay, este concierto es una pieza clave de nuestro viaje musical.",
      featuring: "",
      beat: "",
      mezcla: "",
      originalLikes: 3,
      material: "",
      idYoutube: "oNNgdmP7K8M",
    },
  ]

  return conciertos
}
