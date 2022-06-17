import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWEyYTI4MjQxZmE1MTQ0MDk0MmViNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTM5NDQwMywiZXhwIjoxNjU1NjUzNjAzfQ.JVj53KIzcH6UWmxQvUKR4NqlzO56L2lIvk-EukiOn3g";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { Authorization: `Bearer ${TOKEN}` },
});
