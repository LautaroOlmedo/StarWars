export const config = {
    server: {
        port: process.env.PORT || 8000,
    },
    rabbitmq: {
        host: process.env.RABBITMQ_HOST || "localhost:5672",
        vhost: process.env.VHOST || "dollar",
        username: process.env.USERNAME || "lautaro",
        password: process.env.USERNAME || "secret",
        heartbeat: 10
    }
};