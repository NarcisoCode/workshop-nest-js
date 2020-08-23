import { IsNotEmpty, IsString } from "class-validator";
export class MessageDto {
    @IsString()
    @IsNotEmpty({ "message": "Nick no debe estar vacío." })
    readonly nick: string;
    @IsString()
    @IsNotEmpty({ "message": "El mensaje no debe estar vacío." })
    readonly message: string;
}

// @IsEmpty({ message: (args: ValidationArguments) => {
//     if (args.value.includes("Sander")) {
//         return "Bienvenido Sander"
//     }
// } })
