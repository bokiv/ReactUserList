const mainEndPoint = 'https://randomuser.me/api/?results=15';

export const getUsers = () => {
  return fetch(mainEndPoint)
  .then((result)=>result.json())
  .then((users)=> users.results)

}