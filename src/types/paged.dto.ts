export default interface PagedList<T> {
    page: number,
    total: number,
    size: number,
    hasNext: boolean,
    data: T[]
}
