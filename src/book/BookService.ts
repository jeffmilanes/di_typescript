import { autoInjectable } from 'tsyringe';
import BookRepository from './BookRepository';

@autoInjectable()
export default class BookService {
  bookRepository: BookRepository;

  constructor(bookRepository: BookRepository) {
    this.bookRepository = bookRepository;
  }

  getBooks() {
    return this.bookRepository.getBooks();
  }
}
