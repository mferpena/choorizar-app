export const localStorageService = {
  get<T>(key: string): T {
    const item = localStorage.getItem(key);
    if (!item) {
      throw new Error(
        `No se encontró el valor en localStorage para la clave "${key}"`
      );
    }
    return JSON.parse(item) as T;
  },

  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  },

  remove(key: string): void {
    localStorage.removeItem(key);
  },
};
