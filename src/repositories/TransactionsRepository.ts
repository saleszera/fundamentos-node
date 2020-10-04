import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
  }

  public getBalance(): Balance {
    // TODO
  }

  public create({ title, value, type }: Omit<Transaction, 'id'>): Transaction {
    const transaction = new Transaction({ title, value, type });

    if (type !== 'income' && type !== 'outcome') {
      throw Error("Type must be 'income' or 'outcome'!");
    }
    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
