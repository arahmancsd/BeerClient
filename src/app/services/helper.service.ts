import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class HelperService {

  constructor() { }
  setLocallStorageItem(key: string, value: string): void {
    if (key && value) {
        localStorage.setItem(key, value);
    }
}
readFromLocalStorage(key: string): string {
    if (localStorage.getItem(key)) {
        return localStorage.getItem(key);
    }
    return null;
}
removeFromLocalStorage(keys: string[]) {
    keys.forEach(element => {
        if (this.readFromLocalStorage(element) != null) {
            localStorage.removeItem(element);
        }
    });
}
setPagging(pagination: any, totalItems: number, numberOfPages: number, pageNumber: number) {
    pagination.totalItems = totalItems;
    if (totalItems > 0 && numberOfPages > 0) {
        pagination.itemsPerPage = Math.round(totalItems / numberOfPages) + 1;
    } // just add one to remove the last extra page
    pagination.currentPage = pageNumber;
}
}
