import { BlogStructure } from "./TypesDeclarations/BlogContentTypes";

export const temporalInitialBlog: BlogStructure = {
  type: "Blog",
  backgroundColor: "#00041c",
  content: [
    {
      type: "Banner",
      children:
        "https://i.pinimg.com/originals/f0/5b/6b/f05b6b90abb9f3cd5b9ad42085955e7a.gif",
    },
    {
      type: "Header",
      profile: "Angel Franco",
      categorie: "Personal",
      date: "03/11/2024",
      description: "Hola",
      profilePhoto:
        "https://media.istockphoto.com/id/1388253782/es/foto/positivo-exitoso-hombre-de-negocios-profesional-de-negocios-del-milenio-retrato-de-la-cabeza.jpg?s=612x612&w=0&k=20&c=gDMgYu50FUOTQhCZwYM6deYTzHvKkKAK9e945a21hZ8=",
      title: "Prueba de Edición: ",
    },
  ],
};
