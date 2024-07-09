#!/bin/bash

# Включаем пересылку пакетов
sysctl -w net.ipv4.ip_forward=1

# Запускаем WireGuard
wg-quick up wg0

# Поддерживаем контейнер в рабочем состоянии
tail -f /dev/null