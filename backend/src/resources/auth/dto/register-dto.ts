import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDTO {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    password: string

    @IsNotEmpty()
    @IsString()
    confirmPassword: string
}