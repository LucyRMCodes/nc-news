import axios from "axios";

const newsApi = axios.create({
	baseURL: "https://lucy-nc-news.onrender.com/api",
});

export const fetchArticles = () => {
	return axios.get("/articles").then(({ data }) => {
		return data.articles;
	});
};

export const fetchComments = (articleId) => {
	return axios.get(`/articles/${articleId}/comments`).then(({ data }) => {
		return data.articles;
	});
};
