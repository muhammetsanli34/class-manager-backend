export default class CreateUserDto {
    readonly username: string;
    readonly password_hash: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly email: string;
    readonly profile_picture?: string;
    readonly role: string;
};
    