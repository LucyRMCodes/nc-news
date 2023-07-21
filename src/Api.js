import axios from "axios";

const newsApi = axios.create({
	baseURL: "https://lucy-nc-news.onrender.com/api",
});

export const fetchArticles = (topic, order, sort_by, author) => {
	return newsApi
		.get("/articles", { params: { topic, order, sort_by, author } })
		.then(({ data }) => {
			return data.articles;
		});
};

export const fetchArticle = (articleId) => {
	return newsApi.get(`/articles/${articleId}`).then(({ data }) => {
		return data.article;
	});
};

export const fetchComments = (articleId) => {
	return newsApi.get(`/articles/${articleId}/comments`).then(({ data }) => {
		return data.comments;
	});
};
export const fetchTopics = () => {
	return newsApi.get("/topics").then(({ data }) => {
		return data.topics;
	});
};
export const fetchUsers = () => {
	return newsApi.get("/users").then(({ data }) => {
		return data.users;
	});
};
export const patchArticleVotes = (articleId, inc_votes) => {
	return newsApi.patch(`/articles/${articleId}`, { inc_votes });
};

export const patchCommentVotes = (commentId, inc_votes) => {
	return newsApi.patch(`/comments/${commentId}`, { inc_votes });
};

export const postComment = (articleId, username, body) => {
	return newsApi.post(`/articles/${articleId}/comments`, { username, body });
};

export const deleteComment = (commentId) => {
	return newsApi.delete(`/comments/${commentId}`);
};
