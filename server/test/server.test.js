let app = require('../server'); 

let testServer = require('supertest'); 

describe('Test the root path', () => {
    test('It should respond 200 to the logout route', async() => {
    const response = await testServer(app).post('/api/user/logout'); 
    expect(response.statusCode).toBe(200); 

    })

    test ('Should respond 200 to the vendor router', async() => {
    const response = await testServer(app).get('/api/vendor');
    expect(response.statusCode).toBe(200)
    console.log(response)

    })
    test('Should respond 200 to the location router ', async() => {
    const response = await testServer(app).get('/api/location'); 
    expect(response.statusCode).toBe(200)
    console.log(response)

    })


    test('It should return user info when logged in', async() => {
        let agent = testServer.agent(app); 
        const response = await agent
                                .post('/api/user/login')
                                .send({username: 'troy', password:'1234'});
        expect(response.statusCode).toBe(401)
        const userResponse = await testServer(app).get('/api/user/')
        expect(userResponse.statusCode).toBe(403);
        console.log(userResponse); 
    })


    test('Should respond with locations  ', async() => {
        let agent = testServer.agent(app); 
        const response = await agent
                                    .post('/api/location')
                                    .send({latitude: '45', longitude: '-93.25'});
        expect(response.statusCode).toBe(401)
        const locationResponse = await testServer(app).get('/api/location');
        expect(locationResponse.statusCode).toBe(403); 

    })



})