# Bitácora - Laboratorio gRPC (NestJS)

## Reflexión gRPC en NestJS vs REST
Comparado con la creación de servicios REST de la semana 2, escribir gRPC en NestJS fue más rápido y estructurado gracias al archivo `.proto`, que define claramente el contrato y los tipos de datos desde el inicio. Sin embargo, puede ser ligeramente más complejo de depurar cuando los mensajes de error de los esquemas protobuf (como los de `@grpc/proto-loader`) no son muy descriptivos, o al configurar correctamente la carga del archivo `.proto` en el compilador. 

## Sobre el método BuscarPorPrecioMaximo
El método `BuscarPorPrecioMaximo` es un excelente candidato para *server streaming* porque la cantidad de resultados devueltos es variable y potencialmente grande. Si fuera *unary*, el servidor tendría que cargar todos los productos que cumplen la condición en un solo arreglo (consumiendo más memoria y demorando la respuesta hasta que termine de buscar) y enviarlos de golpe. Con *streaming*, el cliente empieza a recibir los resultados a medida que se van encontrando o procesando, sin tener que esperar por toda la colección.

### Declaración de uso de IA
- Herramienta(s): Antigravity IDE (Gemini 3.1 Pro)
- Nivel de uso: Nivel 2-3 (borrador / revisor guiado)
- Qué se le pidió: Guía paso a paso, solución para adaptar `main.ts` a un entorno ESM (`type: module`), y la implementación del método server streaming.
- Qué se modificó/verificó manualmente: Se verificaron todos los pasos uno a uno compilando y probando la ejecución de `cliente.cjs` contra el servidor activo.
