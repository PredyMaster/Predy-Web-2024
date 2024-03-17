export interface Cancion {
  titulo: string
  link: string
  tieneVideoclip: boolean
  urlVideoclip?: string
}

export interface Disco {
  nombre: string
  fechaSalida: Date | string
  colaboradores: string[]
  descargas: number
  canciones: Cancion[]
}
