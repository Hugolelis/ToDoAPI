import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDTO {
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string
}