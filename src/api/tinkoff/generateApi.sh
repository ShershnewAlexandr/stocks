#!/bin/bash

PROTO_DIR=./src/api/tinkoff/proto
PROTO_DIR2=./src/api/tinkoff/proto/google/api
PROTO_DIR_TYPES=./src/api/tinkoff/@types/proto

# Generate JavaScript code
grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --grpc_out=${PROTO_DIR} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ${PROTO_DIR} \
    ${PROTO_DIR}/*.proto

# Generate TypeScript code (d.ts)
grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${PROTO_DIR} \
    -I ${PROTO_DIR} \
    ${PROTO_DIR}/*.proto

# Generate JavaScript code
grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR2} \
    --grpc_out=${PROTO_DIR2} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ${PROTO_DIR2} \
    ${PROTO_DIR2}/*.proto

# Generate TypeScript code (d.ts)
grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${PROTO_DIR2} \
    -I ${PROTO_DIR2} \
    ${PROTO_DIR2}/*.proto
