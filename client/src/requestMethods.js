import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "51KAQRRKJeqLBuCJ7mSxZVA9HbfPQtyq1IjSLeQi01JJ7y9V2FHLJTLysj7vQLnckksex6U2gIxul7QF1193GiL6I00xI5003wy";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${TOKEN}`},
});

