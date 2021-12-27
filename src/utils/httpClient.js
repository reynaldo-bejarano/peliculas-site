const API ="https://api.themoviedb.org/3"

export function get(path){
   return fetch(API + path,{
        headers:{
            Authorization: 
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDcxNjE2ZTJlMWNlMjQyM2ZlMGU5ODRjNjA0YjgxMyIsInN1YiI6IjYxYzdlZDg1NDgzMzNhMDA0Mjk2M2NhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AjePMgrRqQZ2WeuhWkwR3EmIM0hNsWPhDckLwGOjgUs",
            "Content-Type": "application/json;charset=utf-8"
        },
    }).then( result => result.json())
}