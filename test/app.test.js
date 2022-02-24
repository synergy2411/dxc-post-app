// Test Suite : describe("", () => {})
// Test specs : it("", () => {})
// Setup & Tear Down : beforeEach(), afterEach(), beforeAll(), afterAll()
// const asset = require("assert");
// asset.equal(add(2,4), 9, "Not Equal as expected")
const { add } = require("../src/utils/maths");

const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/app");
const PostModel = require("../src/model/post.model");

chai.use(chaiHttp);

describe("Posts App", () => {

    beforeEach(async () => {
        await PostModel.deleteMany()
    })

    describe('to test add', () => {
        it("Testing add function", () => {
            chai.expect(add(3,4)).to.equal(7);
        })
    });

    describe("/GET post/:postId ", () => {
        it("Should fetch single post", () => {
            const post = new PostModel({title : "insurance", body: "...", author:"jenny@test.com"})
            post.save()
                .then(result => {
                    chai.request(app)
                        .get("/posts/"+result._id)
                        .end((err, response) => {
                            chai.expect(response.body).not.to.be.undefined;
                            chai.expect(response.body.title).to.be.equal("insurance")
                        })
                })
        })
    })

    describe("/POST posts", () => {
        it("Should create one record", () => {
            const postData = new PostModel({title : "planting", body : "to pot plants", author : "john@test.com"})
            chai.request(app)
                .post("/posts")
                .send(postData)
                .end((err, response) => {
                    chai.expect(response.body).not.to.be.undefined;
                    chai.expect(response.body._id).not.to.be.undefined;
                })
        })
    })

    describe('/GET Posts', () => {
        it("Should return all posts", () => {
            chai.request(app)
                .get("/posts")
                .end((err,response) => {
                    chai.expect(response.body).not.to.be.undefined;
                })
        })
        it("Should return status for posts", () => {
            chai.request(app)
                .get("/posts")
                .end((err,response) => {
                    chai.expect(response.status).to.be.equal(200);
                    chai.expect(response.body).to.be.an("Array");
                    chai.expect(response.body.length).to.have.length.equal(0)
                })
        })
    });

})



// GET, DELETE, PATCH




// describe('Math Suite', () => {

//     it("Should return addition of two numbers", () => {
//         chai.expect(add(3,5)).to.equal(9);
//     })

// });