import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = (): JSX.Element => {
  const listProducts = [
    {
      id: 1,
      name: "100ᵗʰ Anniversary Special: Spider-Man (2014) #1",
      summary: "It's 100 years after the wall-crawler's creation, but when the Kingpin has taken Spider-Man's ultra-powerful techno-symbiote suit, Spider-Man will need to prove once again why he is the world's greatest super hero.",
      price: 10000,
      date: "Jul 2014",
      image:
        "https://static.metron.cloud/media/cache/82/af/82afeb91d4449ffeab79b132469f0918.webp", 
      category: "Comics",
      publisher: "Marvel",
      characters: ["Eddie Brock", "Spider-Man", "Kingpin", "Venom"],
    },
    {
      id: 2,
      name: "Absolute Carnage (2019) #1",
      summary: "After turning Venom's world upside down a year ago, DONNY CATES and RYAN STEGMAN are about to put the Sinister Symbiote through hell again, only this time CARNAGE has come calling, and everyone who's ever worn a symbiote is dead in his sights!",
      price: 15000,
      date: "Oct 2019",
      image:
        "https://static.metron.cloud/media/cache/81/28/8128498eee305ff7cf92af33ffd040a2.webp",
      category: "Comics",
      publisher: "Marvel",
      characters : ["Carnage", "Spider-Man", "Wolverine", "Captain America"]
    },
    {
      id: 3,
      name: "Age of Ultron (2013) #9",
      summary: "To save the planet Earth--and maybe the entire galaxy!--the heroes of the Marvel Universe made the most controversial decision of their lives. The results have brought disaster the likes of which they have never seen before. And now, with one final chance...can they make it right?",
      price: 13000,
      date: "Aug 2013",
      image:
        "https://static.metron.cloud/media/cache/59/dd/59ddb1727d925a2312b572cff4bcf83c.webp",
      category: "Comics",
      publisher: "Marvel",
      characters: ["Dragon Man", "Hank Pym", "Iron Man", "Ultron"]
    },
    {
      id: 4,
      name: "Agents of Atlas (2009) #4",
      summary: "What a difference a half-century makes : As the Agents of 1958 find themselves battling deep behind the Iron Curtain, the Agents of today are locked in mortal conflict with Captain America! And if Bob Grayson loses his mind, that may very well be the end for the Agents of today!",
      price: 9400,
      date: "Jul 2009",
      image:
        "https://static.metron.cloud/media/cache/c8/8a/c88a25f1865e2e92d0f3f9cdb2fe8374.webp",
        category: "Comics",
        publisher: "Marvel",
        characters: ["Captain America", "Jade Claw", "Hawkeye"]
        
    },
    {
      id: 5,
      name: "All-New Captain America Special (2015) #1",
      summary: "Red Raven has Spider-Man and the Inhumans right where he wants them !One bird turn deserves another, as the All-New Captain America answers the call to defend New York from the revenge-ready Red Raven!",
      price: 15800,
      date: "Jul 2015",
      image:
        "https://static.metron.cloud/media/cache/4f/8c/4f8c66baae8764f1d58eaf5fbdbbb46c.webp",
      category: "Comics",
      publisher: "Marvel",
      characters: ["Captain Ameica", "Flint", "Gorgon","Inferno"]
    },
    {
      id: 6,
      name: "Batman Estatua Ultimate Premium Masterline Series Cyberpunk Harley Quinn 60 cm",
      summary:  "Estatua de poliresina de Batman, dimensiones aprox. 60 x 36 x 35 cm. Modelo finalizado y pintado a mano. Licencia oficial. Edición limitada. Contenido: - Tamaño de la estatua aprox. H:60cm W:36cm D:35cm - Base estilo Cyberpunk - Iluminación LED en la base - Dos (2) cabezas intercambiables (normal y con lengua) - Un (1) logo trasero intercambiable - Un (1) par de gafas de sol - Un (1) soporte para la cabeza",
      price: 50600,
      date: "",
      image: "https://www.heomedia.com/img/nrm/x_p1supmdc-08.jpg",
      category: "Merchandaising",
      characters: ["Harely Quinn"]
    },
    {
      id: 7,
      name: "DC Comics Estatua 1/4 Throne Legacy Collection Flashpoint Batman Bonus Version 60 cm",
      summary: "Estatua de poliresina de Batman, dimensiones aprox. 60 x 43 x 20 cm. Modelo finalizado y pintado a mano. Licencia oficial.",
      price: 75000,
      date: "",
      image: "https://www.heomedia.com/img/nrm/x_p1stlcdc-06s.jpg",
      category: "Merchandaising",
      characters: ["Batman"]
    },
    {
      id: 8,
      name: "Marvel Estatua Premium Format Fastball Special: Colossus and Wolverine 61 cm",
      summary: "Estatua de poliresina de la línea 'Premium Format', dimensiones aprox. 61 x 40 x 65 cm.",
      price: 68000,
      date: "",
      image: "https://www.heomedia.com/img/nrm/x_ss3008491_c.jpg",
      category: "Merchandaising",
      characters: ["Wolverine", "Colossus"]
    },
    {
      id: 9,
      name: "Deadpool 2 Figura Movie Masterpiece 1/6 Cable 30 cm",
      summary: "Hot Toys Deadpool 2 Movie Masterpiece Action Figure 1/6 Cable 30 cm Figure",
      price: 25000,
      date: "",
      image: "https://www.heomedia.com/img/nrm/x_hot906791_a.jpg",
      category: "Merchandaising",
      characters: ["Cable"]
    },
    {
      id: 10,
      name: "The Falcon and The Winter Soldier Figura 1/6 Winter Soldier 30 cm",
      summary: "Figura The Falcon and The Winter Soldier articulada a escala 1/6 con accesorios, tamaño aprox. 30 x 80 cm.",
      price: 33000,
      date: "",
      image: "https://www.heomedia.com/img/nrm/x_hot908033_b.jpg",
      category: "Merchandaising",
      characters: ["Winter Soldier"]
    },
  ];

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer products={listProducts} />}
        />
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer products={listProducts} />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer products = {listProducts} />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
