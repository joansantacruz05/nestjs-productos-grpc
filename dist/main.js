import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { AppModule } from './app.module.js';
const __dirname = dirname(fileURLToPath(import.meta.url));
async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.GRPC,
        options: {
            package: 'productos',
            protoPath: join(__dirname, 'productos.proto'),
            url: '0.0.0.0:5000',
        },
    });
    await app.listen();
    console.log('Microservicio gRPC escuchando en 0.0.0.0:5000');
}
bootstrap();
//# sourceMappingURL=main.js.map