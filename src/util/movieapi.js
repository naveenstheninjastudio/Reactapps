import axios from "axios";

export async function fetchMovie(moviename) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${moviename}&api_key=63d23a5c28917a140fd7257ad4c5dcc6&language=en-US&page=1`
    );
    return response.data;
  } catch (err) {
    throw new Error(`Error fetching movie data ${err.status}`);
  }
}
