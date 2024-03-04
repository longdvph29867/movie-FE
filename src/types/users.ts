export interface Updateuser{
    name?: string;
    email?: string;
    role?: string;
    password?: string;
}
export interface Createuser{
    name: string;
    email: string;
    role: string;
    password: string;
}
export interface User {
    name: string,
    email: string,
    role: string,
    isEmailVerified: boolean,
    active: boolean,
    id: string
}