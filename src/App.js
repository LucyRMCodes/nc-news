import axios from "axios";

const url = "https://lucy-nc-news.onrender.com/api";

export const fetchArticles = () => {
	return axios.get(`${url}/articles`).then(({ data }) => {
		return data.articles;
	});
};

export const fetchArticle = (articleId) => {
	return axios.get(`${url}/articles/${articleId}`).then(({ data }) => {
		return data.article;
	});
};
