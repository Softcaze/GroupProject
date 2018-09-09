export interface IUser {
    id?: number;
    facebookId?: number;
    firstName?: string;
    lastName?: string;
    displayName?: string;
    profilPicture?: string;
    email?: string;
    password?: string;
    creationDate?: Date;
    lastConnection?: Date;
    lastConnectionIp?: string;
    homeAdress?: string;
    lastGpsLocation?: string;
}