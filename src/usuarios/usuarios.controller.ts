import { Controller,Get } from '@nestjs/common';

@Controller('usuarios')
export class UsuariosController {
    @Get()
    ejemplo(){
        return "ejemplo de endpoint"
    }

}
