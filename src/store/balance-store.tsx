import { create } from 'zustand';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

interface UserBalanceStore {
  balance: number;
  getUserBalance: (
    publicKey: PublicKey,
    connection: Connection
  ) => Promise<void>;
}

const useUserBalanceStore = create<UserBalanceStore>((set, _get) => ({
  balance: 0,
  getUserBalance: async (publicKey, connection) => {
    let balance = 0;
    try {
      balance = await connection.getBalance(publicKey, 'confirmed');
      balance = balance / LAMPORTS_PER_SOL;
      console.log(balance)
    } catch (e) {
      console.log(`Error getting balance: `, e);
    }
    set((s) => {
      return { ...s, balance };
    });
  },
}));

export default useUserBalanceStore;
