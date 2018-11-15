function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}

Person.prototype.fetchFavFoods = function () {
  return new Promise((resolve, reject) => {
    // Simulate an API
    setTimeout(() => resolve(this.foods), 2000);
  });

}

describe('mocking learning', () => {
  it('mocking a reg learning', () => {
    const fetchDogs = jest.fn();
    fetchDogs('snickers');
    expect(fetchDogs).toHaveBeenCalled();
    expect(fetchDogs).toHaveBeenCalledWith('snickers');
    fetchDogs('hugo');
    expect(fetchDogs).toHaveBeenCalledTimes(2);
  });

  it('cna create a person', () => {
    const me = new Person('Tiago', ['Pizza', ' Churrasco']);
    expect(me.name).toBe('Tiago');
  });

  it('can fetch foods', async () => {
    const me = new Person('Tiago', ['Pizza', ' Churrasco']);
    // mock the favFoods function
    me.fetchFavFoods = jest.fn().mockResolvedValue(['Pizza', 'Churrasco']);
    const favFoods = await me.fetchFavFoods();
    console.log(favFoods);
    expect(favFoods).toContain('Pizza');
  });


});
