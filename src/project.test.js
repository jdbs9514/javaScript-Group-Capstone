const postLike = require('./index.js');
describe('add a chore', () => {
    test("contains at least one item on the ordered list", () => {
      if (typeof window !== 'undefined') {
      const list = document.querySelector('.chore')
      list.push({
        ID: 1,
        chore: 'run code',
        complete: false,
      })
    
    expect(AddItem('run code')).toEqual(...list);
      expect(list.length).toEqual(1); 
    }
    });
  