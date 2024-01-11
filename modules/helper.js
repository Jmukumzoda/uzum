import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getData = async (resource) => {
    try {
        const res = await axios.get(baseUrl + resource)

        return res
    } catch (e) {
        console.log(e);
    }
}

export const postData = async (resource, body) => {
    try {
        const res = await axios.post(baseUrl + resource, body)

        return res
    } catch (e) {
        console.log(e);
    }
}

export const patchData = async (resource, body) => {
    try {
        const res = await axios.patch(baseUrl + resource, body)

        return res
    } catch (e) {
        console.log(e);
    }
}

export const deleteData = async (resource) => {
    try {
        const res = await axios.delete(baseUrl + resource)

        return res
    } catch (e) {
        console.log(e);
    }
}