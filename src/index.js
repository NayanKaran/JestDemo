const getShowsInfo = async () => {
    const response = await fetch(`https://api.tvmaze.com/schedule/web?date=${new Date().toISOString().substring(0, 10)}&country=US`);
    const movies = await response.json();
    return movies;
};

export default getShowsInfo;