import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:5000/api/v1/",
    headers:{
        'accept':'application/json'
    }
});

const sheets = {
    getUsers:()=>api.get("user"),
    postLogin:(user) => api.post("login/", user),
    deleteUser:(id) => api.delete("user/"+id ),
    getEventos:()=>api.get("evento"),
    deleteEvento:(id)=>api.delete("evento/"+id),
    createIngresso: (ingresso) => api.post("/ingresso", ingresso),
}

export default sheets;