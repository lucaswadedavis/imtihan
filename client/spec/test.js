describe("x()",function(){
  it("should adhere to the shadow pact.",function(){
    expect(x(42)).to.be.a('string');
   });
});
