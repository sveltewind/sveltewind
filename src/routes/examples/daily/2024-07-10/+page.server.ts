import { THEMOVIEDB_API_TOKEN } from '$env/static/private';

const getMovieInfo = async (id: number) => {
	const urls = [
		`https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&language=en-US`,
		`https://api.themoviedb.org/3/movie/${id}/images`
	];
	const [movieInfo, images] = await Promise.all(
		urls.map(async (url: string) => await fetchAPI(url))
	);
	movieInfo.images = images;
	return movieInfo;
};
const fetchAPI = async (url: string) => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${THEMOVIEDB_API_TOKEN}`
		}
	};
	const response = await fetch(url, options);
	const result = await response.json();
	return result;
};

const getMovies = async () => {
	const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
	const { results } = await fetchAPI(url);
	const movies = (
		await Promise.all(results.map(async (result: { id: number }) => await getMovieInfo(result.id)))
	).reduce((obj, movie) => {
		obj[movie.title] = movie;
		return obj;
	}, {});
	return movies;
};

export const load = async () => {
	const movies = await getMovies();
	return { movies };
};
