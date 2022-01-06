const API = "https://api.themoviedb.org/3/";

export function get(path) {
  return fetch(API + path, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNWFiYWFkNDgyZDdkNDJlYWRmOTJiYjdmYTM5ZTViYiIsInN1YiI6IjYxY2Y5YjAyOTQ0YTU3MDAxZjgzYjFkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LroIp1Wixb98e4ebYNNp6PP0liRfL2iDn7EuRcE0dI4",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then(result => result.json());
}