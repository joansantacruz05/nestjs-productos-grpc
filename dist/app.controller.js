var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Controller } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';
import { Observable } from 'rxjs';
let AppController = class AppController {
    productos = [
        { id: 1, nombre: 'Teclado mecánico', precio: 45.90 },
        { id: 2, nombre: 'Mouse inalámbrico', precio: 19.50 },
        { id: 3, nombre: 'Monitor 24"', precio: 129.99 },
    ];
    obtenerProducto(data) {
        const producto = this.productos.find((p) => p.id === data.id);
        if (!producto) {
            throw new RpcException({ code: status.NOT_FOUND, message: `Producto ${data.id} no existe` });
        }
        return producto;
    }
    listarProductos() {
        return new Observable((subscriber) => {
            let i = 0;
            const interval = setInterval(() => {
                subscriber.next(this.productos[i]);
                i++;
                if (i >= this.productos.length) {
                    clearInterval(interval);
                    subscriber.complete();
                }
            }, 300);
        });
    }
    buscarPorPrecioMaximo(data) {
        return new Observable((subscriber) => {
            const filtrados = this.productos.filter((p) => p.precio <= data.precioMaximo);
            let i = 0;
            const interval = setInterval(() => {
                if (i < filtrados.length) {
                    subscriber.next(filtrados[i]);
                    i++;
                }
                else {
                    clearInterval(interval);
                    subscriber.complete();
                }
            }, 300);
        });
    }
};
__decorate([
    GrpcMethod('ProductoService', 'ObtenerProducto'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "obtenerProducto", null);
__decorate([
    GrpcMethod('ProductoService', 'ListarProductos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], AppController.prototype, "listarProductos", null);
__decorate([
    GrpcMethod('ProductoService', 'BuscarPorPrecioMaximo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Observable)
], AppController.prototype, "buscarPorPrecioMaximo", null);
AppController = __decorate([
    Controller()
], AppController);
export { AppController };
//# sourceMappingURL=app.controller.js.map