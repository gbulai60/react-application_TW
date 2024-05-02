import { makeObservable, observable, action } from 'mobx';

import Product from '../models/Product';
import localStorageWrapper from '../localStorage/LocalStorageWrapper';

class ProductStore {
  products: Product[] = [];
  loading: boolean = true; 

  constructor() {
    makeObservable(this, {
      products: observable,
      loading: observable,
      addProduct: action,
      removeProduct: action,
      setLoading: action
    });
    this.loadData(); 
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.saveData(); 
  }

  removeProduct(product: Product) {
    this.products = this.products.filter(p => p !== product);
    this.saveData(); 
  }

  async loadData() {
   
    this.setLoading(true);

    
    await new Promise(resolve => setTimeout(resolve, 2000));

    
    this.products = localStorageWrapper.data ? localStorageWrapper.data : [];

    
    this.setLoading(false);
  }

  saveData() {
    localStorageWrapper.setData(this.products);
  }

  setLoading(value: boolean) {
    this.loading = value;
  }

}

const productStore = new ProductStore();
export default productStore;
