import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  save(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data))
  }

  fetch(key: string): any {
    const content = localStorage.getItem(key)

    if (content) {
      return JSON.parse(content)
    } else {
      return content
    }
  }

  getStorage<Type>(type: Type): Storage<Type> {
    return new Storage<typeof type>();
  }

  deleteCountries(): void {
    let keysToRemove = []

    for (let i = 0; i < localStorage.length; i++) {
      let currentKey = localStorage.key(i)

      if (currentKey != null && currentKey.startsWith("countr")) {
        keysToRemove.push(currentKey)
      }
    }

    keysToRemove.forEach(key => localStorage.removeItem(key))
  }
}

export class Storage<Type> {
  constructor() {
  }

  save(key: string, data: Type) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  fetch(key: string): Type | undefined {
    const content = localStorage.getItem(key)

    if (content) {
      return JSON.parse(content) as Type
    } else {
      return undefined;
    }
  }
}
