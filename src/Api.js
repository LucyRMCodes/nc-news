import axios from "axios";

const newsApi = axios.create({
	baseURL: "https://lucy-nc-news.onrender.com/api",
});

export const fetchArticles = (topic) => {
	return newsApi.get("/articles", { params: { topic } }).then(({ data }) => {
		return data.articles;
	});
};

export const fetchArticle = (articleId) => {
	return newsApi.get(`/articles/${articleId}`).then(({ data }) => {
		return data.article;
	});
};

export const fetchComments = (articleId) => {
	return axios.get(`/articles/${articleId}/comments`).then(({ data }) => {
		return data.comments;
	});
};
export const fetchTopics = () => {
	return newsApi.get("/topics").then(({ data }) => {
		return data.topics;
	});
};
