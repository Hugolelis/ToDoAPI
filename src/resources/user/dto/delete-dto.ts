import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class DeleteDTO {
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string

    @IsNotEmpty()
    @IsString()
    confirmPassword: string
}