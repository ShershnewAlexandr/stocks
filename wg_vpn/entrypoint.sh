#!/bin/bash

# Запускаем WireGuard
wg-quick up wg0

# Поддерживаем контейнер в рабочем состоянии
tail -f /dev/null