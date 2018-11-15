describe('sample test 101', () => {
  it("Works as expected", () => {
    var age = 100;
    expect(1).toEqual(1);
    expect(age).toEqual(100);
  });
  it('Handles ranges just fine', () => {
    const age = 200;
    expect(age).toBeGreaterThan(100);
  });
  it('Makes a list of dogs name', () => {
    const dogs = ['Snickers', 'hugo'];
    expect(dogs).toEqual(dogs);
    expect(dogs).toContain('Snickers');
  })
})
