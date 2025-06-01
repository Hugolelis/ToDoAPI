import { IsOptional, IsString, MaxLength } from "class-validator"

export class UpdateTaskDTO {
    @IsOptional()
    @MaxLength(20)
    @IsString()
    title: string

    @IsOptional()
    @MaxLength(500)
    @IsString()
    description: string
}