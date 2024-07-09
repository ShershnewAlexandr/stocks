FROM alpine:latest

# Обновляем список пакетов и устанавливаем необходимые зависимости
RUN apk update && apk add --no-cache \
    wireguard-tools \
    iproute2 \
    iptables

# Включаем пересылку пакетов внутри Docker-образа
RUN echo "net.ipv4.ip_forward = 1" > /etc/sysctl.conf

# Создаем рабочую директорию
WORKDIR /etc/wireguard

COPY ./configs/wg0.conf ./wg0.conf

# Открываем порт WireGuard
EXPOSE 53011/udp

# Скрипт для запуска WireGuard сервера
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Устанавливаем точку входа для запуска WireGuard
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
