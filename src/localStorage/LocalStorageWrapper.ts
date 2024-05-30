import { observable, action, makeObservable } from 'mobx';
import Product from '../models/Product';

const setLocalStorageData = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getLocalStorageData = (key: string): any => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

class LocalStorageWrapper {
  data: Product[] | null = null;
  users: { username: string, password: string }[] | null = null; 

  constructor() {
    makeObservable(this, {
      data: observable,
      setData: action,
      loadDataFromLocalStorage: action,
    });
    this.loadDataFromLocalStorage();
  }

  setData(newData: Product[]) {
    this.data = newData;
    setLocalStorageData('products', newData);
  }

  async loadDataFromLocalStorage() {
    const storedData = getLocalStorageData('products');
    const storedUsers = getLocalStorageData('users'); 

    if (!storedData) {
      const initialData: Product[] = [
        {
            name: "Produs 1",
            model: "Model 1",
            description: "Descriere produs 1",
            imageUrl: "url1",
            price: 10,
            quantity: 5
          },
          {
            name: "Produs 2",
            model: "Model 2",
            description: "Descriere produs 2",
            imageUrl: "url2",
            price: 20,
            quantity: 3
          },
          {
            name: "Produs 3",
            model: "Model 3",
            description: "Descriere produs 3",
            imageUrl: "url3",
            price: 30,
            quantity: 8
          }
      ]; 
      setLocalStorageData('products', initialData);
      this.data = initialData;
    } else {
      this.data = storedData;
    }

    if (!storedUsers) { 
      const initialUsers = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
      ];
      setLocalStorageData('users', initialUsers);
      this.users = initialUsers;
    } else {
      this.users = storedUsers;
    }
  }
}

const localStorageWrapper = new LocalStorageWrapper();
export default localStorageWrapper;
