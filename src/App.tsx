import { useState } from "react";
import { CategoryPills } from "./components/CategoryPills";
import { categories, videos } from "./Data/home";
import { PageHeader } from "./layouts/PageHeader";
import { VideoGridItem } from "./components/VideoGridItem";
import { Sidebar } from "./layouts/SideBar";
import { SidebarProvider } from "./contexts/SidebarContext";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar />
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 bg-white z-10 pb-4">
              <CategoryPills
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {videos.map((video) => (
                <VideoGridItem key={video.id} {...video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

// El div que contiene el PageHeader tiene una clase de 'max-h-screen' que limita la altura
// del PageHeader a la altura de la pantalla.
// Esto significa que el PageHeader no se expandirá más allá de la altura de la pantalla.
// Esto es útil cuando se desea que el PageHeader ocupe toda la altura de la pantalla.

// La clase 'flex' se utiliza para hacer que el contenedor sea un contenedor flexible.
// Esto significa que los elementos dentro del contenedor se pueden organizar en filas o columnas.
// En este caso, los elementos se organizan en una columna.

// La clase 'flex-col' se utiliza para organizar los elementos en una columna.

// La clase 'grid' se utiliza para crear una cuadrícula. En este caso, se crea una cuadrícula con dos columnas.
// La primera columna tiene un ancho automático y la segunda columna tiene un ancho de 1fr.
// Esto significa que la primera columna se ajustará automáticamente al contenido y la segunda columna ocupará el resto del espacio disponible.
// La clase 'flex-grow-1' se utiliza para hacer que el elemento ocupe todo el espacio disponible en la dirección principal.
// En este caso, el elemento ocupa todo el espacio disponible en la dirección vertical.
// La clase 'overflow-auto' se utiliza para agregar barras de desplazamiento cuando el contenido es demasiado grande para caber en el contenedor.

// El primer div dentro del grid contiene el sidebar.
// El segundo div contiene la barra de categorías.
// La clase 'sticky' se utiliza para hacer que el elemento se pegue a la parte superior de la pantalla cuando se desplaza hacia abajo.
// La clase 'top-0' se utiliza para colocar el elemento en la parte superior del contenedor.
// La clase 'bg-white' se utiliza para establecer el color de fondo del elemento en blanco.
// La clase 'pd-4' se utiliza para agregar relleno alrededor del elemento.
// La clase 'z-10' se utiliza para establecer la posición z del elemento.
