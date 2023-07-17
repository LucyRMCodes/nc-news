import axios from "axios";

const newsApi = axios.create({
	baseURL: "https://lucy-nc-news.onrender.com/api",
});

export const fetchArticles = () => {
	return newsApi.get("/articles").then(({ data }) => {
		console.log(data);
		return data.articles;
	});
};

export const fetchArticle = (articleId) => {
	return newsApi.get(`/articles/${articleId}`).then(({ data }) => {
		return data.article;
	});
};
