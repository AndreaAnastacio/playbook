const repo = {
  name: "LaunchX Back-end",
  author: "AndreaAnastacio",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
};

console.log("Nombre del repo:" + repo.name);
console.log("Autor:" + repo.author);
console.log("Commits:" + repo.numberOfCommits);
console.log("Lenguaje:" + repo.language);
console.log("Stars:" + repo.stars);
console.log("Forks:" + repo.forks);
console.log("issues open:" + repo.issues_open);
console.log("issues close:" + repo.issues_close);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());
