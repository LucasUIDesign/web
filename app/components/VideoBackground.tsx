'use client'

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Video de YouTube embebido */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute inset-0 w-full h-full object-cover scale-150"
          src="https://www.youtube.com/embed/iNi63csDsWk?autoplay=1&mute=1&loop=1&playlist=iNi63csDsWk&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="VALORANT Gameplay"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ 
            pointerEvents: 'none',
            opacity: 0.08
          }}
        />
      </div>
      
      {/* Overlay con gradiente profesional */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary/98 to-dark" />
      
      {/* Grid pattern sutil */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b5cf6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  )
}