import Transaction from '../models/Transaction';

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  private balance: Balance;

  constructor() {
    this.transactions = [];
    this.balance = { income: 0, outcome: 0, total: 0 };
  }

  public all(): {} {
    return { transactions: this.transactions, balance: this.balance };
  }

  public getBalance(): Balance {
    return this.balance;
  }

  private setBalance(transactions: Transaction[]): Balance {
    const balance: Balance = { income: 0, outcome: 0, total: 0 };

    Object.values(transactions).reduce((arrBalance, arrTransaction) => {
      if (arrTransaction.type === 'income') {
        balance.income += arrTransaction.value;
      } else {
        balance.outcome += arrTransaction.value;
      }

      return arrBalance;
    }, 1);

    balance.total = balance.income - balance.outcome;

    this.balance = balance;

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    this.setBalance(this.transactions);

    return transaction;
  }
}

export default TransactionsRepository;
