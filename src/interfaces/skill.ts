export interface ISKill<T> {
    name: T;
    related?: ISKill<T>[];
}