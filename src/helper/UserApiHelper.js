let API_HOST = "https://dummyjson.com/users"

export async function getAllUsersdata() {

    return fetch(`${API_HOST}`)
        .then((res) => res.json())
        .then((json) => {
            return json;
        })
        .catch((ere) => {
            return ere;
        })
}

export default {
    getAllUsersdata,
}