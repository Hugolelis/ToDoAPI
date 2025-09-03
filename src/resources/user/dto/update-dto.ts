import { Transform } from "class-transformer"
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"

export class UpdateDTO {
        @IsNotEmpty()
        @IsString()
        name: string

        @IsNotEmpty()
        @IsEmail()
        @IsString()
        email: string

        @IsOptional()
        @Transform(({ value }) => value === '' ? undefined : value)
        @IsString()
        @MinLength(5)
        newPassword?: string

        @IsNotEmpty()
        @IsString()
        @MinLength(5)
        password: string

        @IsNotEmpty()
        @IsString()
        confirmPassword: string
}