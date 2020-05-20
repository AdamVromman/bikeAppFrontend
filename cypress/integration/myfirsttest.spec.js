describe('My First Test', function(){
    it('does not do much', function(){
        expect(true).to.equal(true);
    });
    it('doenst do much', function()
    {
        cy.visit('http://localhost:4200');
    });
});