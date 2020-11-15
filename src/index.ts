import { Server, Request, ResponseToolkit } from "@hapi/hapi";

const init = async () => {
    const server: Server = new Server({
        port: 3000,
        host: 'localhost'
    });
    server.route({
        method: 'GET',
        path: '/',
        handler: (request: Request, h: ResponseToolkit) => {
            return { message: 'Hello world' };
        }
    });
    await server.start();
    console.log('server running on %s', server.info.uri);
};
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();