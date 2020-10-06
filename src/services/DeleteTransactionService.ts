import { isUuid } from 'uuidv4';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(id: string) {
    if (!isUuid(id)) {
      throw new Error('ID invalid!');
    }

    this.transactionsRepository.delete(id);
  }
}

export default DeleteTransactionService;
