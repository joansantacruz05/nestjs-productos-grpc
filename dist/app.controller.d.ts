import { Observable } from 'rxjs';
interface ProductoRequest {
    id: number;
}
interface ProductoResponse {
    id: number;
    nombre: string;
    precio: number;
}
export declare class AppController {
    private readonly productos;
    obtenerProducto(data: ProductoRequest): ProductoResponse;
    listarProductos(): Observable<ProductoResponse>;
    buscarPorPrecioMaximo(data: {
        precioMaximo: number;
    }): Observable<ProductoResponse>;
}
export {};
