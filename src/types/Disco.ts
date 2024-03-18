export interface Cancion {
  order: number
  titulo: string
  producedBy: string
  link: string // Podría ser el link para escuchar la canción
  featuring?: string
  tieneVideoclip: boolean
  urlVideoclip?: string // La URL del videoclip, opcional dependiendo de si tieneVideoclip es true
  duracion?: string // Opcional: Formato HH:MM:SS
}

export interface Disco {
  nombre: string
  portada: string // URL de la imagen de la portada
  fechaSalida: Date | string // Soporta tanto un objeto Date como una cadena de texto para la fecha
  colaboradores: string[] // Lista de nombres de colaboradores en el disco
  descargas: number
  canciones: Cancion[]
  descripcion: string
  points: number
}

/* const miDisco: Disco = {
  nombre: "Nombre del Disco",
  portada: "https://example.com/portada.jpg",
  fechaSalida: new Date("2024-01-01"), // O simplemente "2024-01-01" si prefieres usar un string
  colaboradores: ["Artista 1", "Artista 2"],
  descargas: 1500,
  canciones: [
    {
      titulo: "Canción 1",
      link: "https://example.com/cancion1.mp3",
      tieneVideoclip: true,
      urlVideoclip: "https://youtu.be/videoclip1",
      duracion: "03:45",
    },
    {
      titulo: "Canción 2",
      link: "https://example.com/cancion2.mp3",
      tieneVideoclip: false,
      // No se proporciona urlVideoclip ya que tieneVideoclip es false
      duracion: "04:30",
    },
  ],
} */
