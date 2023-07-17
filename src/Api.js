import axios from "axios";

const newsApi = axios.create({
	baseUrl: "https://lucy-nc-news.onrender.com/api",
});

export const fetchArticles = () => {
	return axios.get("/articles").then(({ data }) => {
		return data.articles;
	});
};
