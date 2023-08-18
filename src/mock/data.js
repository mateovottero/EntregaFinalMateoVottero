export const list = [
  {
    category: "teclado",
    name: "HyperX Alloy Elite 2",
    stock: 5,
    price: 92000,
    description: 'Teclado 100% con switches red, con panel numerico, software de rgb y macros, teclas de volumen y reproduccion de musica, chasis de aluminio',
    img: 'https://i.postimg.cc/8kYWWCDy/teclado-hyper-X-alloy-elite-2.jpg',
  },
  {
    name: 'Corsair Virtuosos',
    category: "auriculares",
    stock: 2,
    price: 103000,
    description: 'Auriculares inalambricos ideal para produccion audio 7.1 de la mejor calidad, ',
    img: 'https://i.postimg.cc/fLBc17GZ/auriculares-corsair-virtuoso.png',
  },
  {
    name: 'HyperX Pulsefire Surge',
    category: "mouse",
    stock: 10,
    price: 16000,
    description: 'Mouse hergonomico para diestros, ideal para gaming con 15000DPI luces rgb y software de configuracion',
    img: 'https://i.postimg.cc/T3JJrXtp/mouse-hyper-X-pulsefire-surge.jpg',
  },
  {
    name: 'HyperX Alloy Origins',
    category: "teclado",
    stock: 6,
    price: 52000,
    description: 'Teclado Ideal para Gaming usado en todo tipo de juegos a nivel profecional, 60% hecho para jugar sobre las demas cosas, chasis de aluminio, rgb con su respectivo software',
    img: 'https://i.postimg.cc/50RHwPcH/teclado-Hyper-X-alloy-origins.jpg',
  },
  {
    name: 'HyperX Pulsefire Core',
    category: "mouse",
    stock: 13,
    price: 8300,
    description: 'Mouse ideal para iniciarse en el Gaming, por su modico precio ya ofrece 8000DPI, RGB, Software de configuracion para RGB y macros',
    img: 'https://i.postimg.cc/3wLjcF5h/mouse-hyper-X-pulsefire-core.jpg',
  },
  {
    name: 'Redragon Scylla black',
    category: "auriculares",
    stock: 20,
    price: 32000,
    description: 'Auriculares con 7.1 con cable mallado y RGB',
    img: 'https://i.postimg.cc/5NHBkCnd/auriculares-redragon-scylla-black.png',
  },

];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      if (error) {
        reject("no hay data");
      } else resolve(list);
    }, 2000);
  });
};
 export const getItem = (id) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(list.find((item)=> item.id === id))
        },2000)
    })
 }