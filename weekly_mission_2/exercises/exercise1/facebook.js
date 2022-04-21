const FacebookUser = {
  username: "Andrea A",
  bio: "Hello there, welcome to my profile",
  contact_info: {
    mobile: 5500000000,
    email: "hi@email.com",
  },
  basic_info: {
    gender: "femenino",
    birthday: "30 Noviembre de 19--",
    interestedIn: "Hombres",
    Languages: "Español, Inglés",
  },
  posts: [
    { date: "03 de abril de 2022", body: "Holaaa" },
    { date: "10 de abril de 2022", body: "Adiooos" },
  ],
};

console.log("Perfil");
console.log(FacebookUser.username);
console.log(FacebookUser.bio);
console.log("Información");
console.log(" Información de contacto ");
console.log("  Celular " + FacebookUser.contact_info.mobile);
console.log("  Correo electrónico " + FacebookUser.contact_info.email);
console.log(" Información básica ");
console.log("  Sexo " + FacebookUser.basic_info.gender);
console.log("  Fecha de nacimiento " + FacebookUser.basic_info.birthday);
console.log("  Idiomas " + FacebookUser.basic_info.Languages);
console.log("Publicaciones");
FacebookUser.posts.map((post) => {
  console.log(post);
});
