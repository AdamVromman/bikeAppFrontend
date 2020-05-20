describe('test the partComponent/model', function(){
    it('tests ik the appropiate number of Imagecomponents is generated', function(){
        cy.server();
        cy.route({
            method:'GET',
            url: 'http://localhost:4200/api/bikes/fixie',
            status: 200,
            response:'fixture:bikes.json'
        });
        cy.route({
            method:'GET',
            url: 'http://localhost:4200/api/parts',
            status: 200,
            response:'fixture:parts.json'
        })

        cy.visit('http://localhost:4200/bike/fixie');
        cy.get(['bikeApp']).should('be.visible');
    });
});