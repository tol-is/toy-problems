/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.tweets = [];
    this.follows = {};
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.tweets.unshift([userId, tweetId]);
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    if (!this.follows[userId]) this.follows[userId] = new Set();
    const followees = this.follows[userId];
    const results = [];
    for (let i = 0; i < this.tweets.length && results.length < 10; i++) {
        const [posterId, tweetId] = this.tweets[i];
        if (userId === posterId || followees.has(posterId)) results.push(tweetId);
    }
    return results;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (!this.follows[followerId]) this.follows[followerId] = new Set();
    this.follows[followerId].add(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (this.follows[followerId]) this.follows[followerId].delete(followeeId);
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = Object.create(Twitter).createNew()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
 