// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ExchangeInfoMessage_pb = require('./ExchangeInfoMessage_pb.js');
var Header_pb = require('./Header_pb.js');
var Request_pb = require('./Request_pb.js');
var Response_pb = require('./Response_pb.js');
var Event_pb = require('./Event_pb.js');

function serialize_ru_sovcombank_hackaton_proto_ExchangeInfoMessage(arg) {
  if (!(arg instanceof ExchangeInfoMessage_pb.ExchangeInfoMessage)) {
    throw new Error('Expected argument of type ru.sovcombank.hackaton.proto.ExchangeInfoMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ru_sovcombank_hackaton_proto_ExchangeInfoMessage(buffer_arg) {
  return ExchangeInfoMessage_pb.ExchangeInfoMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExchangeServiceService = exports.ExchangeServiceService = {
  // Метод для обработки запроса
exchangeRequest: {
    path: '/ru.sovcombank.hackaton.proto.ExchangeService/ExchangeRequest',
    requestStream: false,
    responseStream: false,
    requestType: ExchangeInfoMessage_pb.ExchangeInfoMessage,
    responseType: ExchangeInfoMessage_pb.ExchangeInfoMessage,
    requestSerialize: serialize_ru_sovcombank_hackaton_proto_ExchangeInfoMessage,
    requestDeserialize: deserialize_ru_sovcombank_hackaton_proto_ExchangeInfoMessage,
    responseSerialize: serialize_ru_sovcombank_hackaton_proto_ExchangeInfoMessage,
    responseDeserialize: deserialize_ru_sovcombank_hackaton_proto_ExchangeInfoMessage,
  },
  // Метод для обработки ответа
exchangeResponse: {
    path: '/ru.sovcombank.hackaton.proto.ExchangeService/ExchangeResponse',
    requestStream: false,
    responseStream: false,
    requestType: ExchangeInfoMessage_pb.ExchangeInfoMessage,
    responseType: ExchangeInfoMessage_pb.ExchangeInfoMessage,
    requestSerialize: serialize_ru_sovcombank_hackaton_proto_ExchangeInfoMessage,
    requestDeserialize: deserialize_ru_sovcombank_hackaton_proto_ExchangeInfoMessage,
    responseSerialize: serialize_ru_sovcombank_hackaton_proto_ExchangeInfoMessage,
    responseDeserialize: deserialize_ru_sovcombank_hackaton_proto_ExchangeInfoMessage,
  },
  // Метод для обработки события
exchangeEvent: {
    path: '/ru.sovcombank.hackaton.proto.ExchangeService/ExchangeEvent',
    requestStream: false,
    responseStream: false,
    requestType: ExchangeInfoMessage_pb.ExchangeInfoMessage,
    responseType: ExchangeInfoMessage_pb.ExchangeInfoMessage,
    requestSerialize: serialize_ru_sovcombank_hackaton_proto_ExchangeInfoMessage,
    requestDeserialize: deserialize_ru_sovcombank_hackaton_proto_ExchangeInfoMessage,
    responseSerialize: serialize_ru_sovcombank_hackaton_proto_ExchangeInfoMessage,
    responseDeserialize: deserialize_ru_sovcombank_hackaton_proto_ExchangeInfoMessage,
  },
};

exports.ExchangeServiceClient = grpc.makeGenericClientConstructor(ExchangeServiceService);
