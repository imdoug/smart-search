export const socials = [
  { id: 1, social: "linkedin", link: "https://www.linkedin.com/in/imdoug/" },
  { id: 2, social: "github", link: "https://github.com/imdoug" },
  { id: 3, social: "instagram", link: "https://www.instagram.com/i.mdoug/" },
];
export const api = [
  { id: 4, title: "Star Wars: Episode I - The Phantom Menace", release: 1999 },
  { id: 5,title: "Star Wars: Episode II - Atack Of Clones", release: 2002 },
  { id: 6,title: "Star Wars: Episode III - Revenge Of The Sith", release: 2005 },
  { id: 10,title: "Solo - A Star Wars Story", release: 2018 },
  { id: 8,title: "Rogue - A Star Wars Story", release: 2016 },
  { id: 1,title: "Star Wars: Episode IV - New Hope", release: 1977 },
  { id: 2,title: "Star Wars: Episode V - Empire Strikes Back", release: 1980 },
  { id: 3,title: "Star Wars: Episode VI - Return Of Jedi", release: 1983 },
  { id: 7,title: "Star Wars: The Force Awakens", release: 2015 },
  { id: 9,title: "Star Wars: The Last Jedi", release: 2017 },
  { id: 11,title: "Star Wars: The Rise Of Skywalker", release: 2019 },
];
export const getData = (index) =>{
  for(let i = 0; i < api.length; i++){
    if(api[i].id === index){
      return api[i]
    }
  }
}
