export type IRole = 'cook' | 'waiter' | 'driver' | 'none'

export interface IEmployee {
    id: number;
    name: string;
    isArchive: boolean;
    role: string;
    phone: string;
    birthday: string;
}