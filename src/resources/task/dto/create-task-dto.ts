import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator"

export class CreateTasksDTO {
    @IsNotEmpty()
    @MaxLength(20)
    @IsString()
    title: string

    @IsOptional()
    @MaxLength(500)
    @IsString()
    description: string
}