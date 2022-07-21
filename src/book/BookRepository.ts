export default class BookRepository {
  books = [
    { id: 1, name: 'Test 1' },
    { id: 2, name: 'Test 2' },
  ];

  getBooks() {
    return this.books;
  }
}
