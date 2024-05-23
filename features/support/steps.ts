const { Given, When, Then } = require('@cucumber/cucumber')
const supertest = require('supertest')
const request = supertest('https://jsonplaceholder.typicode.com')
const assert = require('assert')

Given('I am a user', () => {
 // no-op
})

When('I send a GET request to \\/posts', async function () {
 this.response = await request.get('/posts')
})

Then('the API should respond with status code 200', async function () { //Same function for two scenarios 1 and 3
 assert.equal(this.response.status, 200)
})

Then('the response should contain an array of posts', async function () {
 assert.ok(Array.isArray(this.response.body))
})

const PostData = { title: 'title of post', body: 'body of post', userId: 1 }
When('I send a POST request to \\/posts', async function () {
 this.response = await request.post('/posts').send(PostData)
})

Then('the API should respond with status code 201', async function () {
 assert.equal(this.response.status, 201)
})

Then('the response should contain the post object', async function () {
 assert.ok(this.response.body.id)
  assert.equal(this.response.body.title,PostData.title)
})

When('I send a GET request to \\/posts\\/{int}', async function (postId) {
    this.response = await request.get(`/posts/${postId}`);
});

Then('the response should contain the details of the post', async function () {
 assert.ok(this.response.body.id)
})
