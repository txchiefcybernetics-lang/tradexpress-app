const API_URL = "http://localhost:8000/api/classifier";

export async function fetchClassifierStatus() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Tunnel or backend unavailable:", error);
    return null;
  }
}
