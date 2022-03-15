/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const endpoint = `https://collectionapi.metmuseum.org`;
// get all: https://collectionapi.metmuseum.org/public/collection/v1/objects

export const getDetailedInfo = (id) => {
    const path = `${endpoint}/public/collection/v1/objects/${id}`;
    return axios.get(path)
}

export const getArtObjects = (searchCriteria) => {
    let path = "";
    if (!searchCriteria)
        path = `${endpoint}/public/collection/v1/objects`;
    else path = `${endpoint}/public/collection/v1/search?q=${searchCriteria}`
    
    return axios.get(path)
}