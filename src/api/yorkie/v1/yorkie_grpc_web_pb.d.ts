import * as grpcWeb from 'grpc-web';

import * as yorkie_v1_yorkie_pb from '../../yorkie/v1/yorkie_pb';


export class YorkieServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  activateClient(
    request: yorkie_v1_yorkie_pb.ActivateClientRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: yorkie_v1_yorkie_pb.ActivateClientResponse) => void
  ): grpcWeb.ClientReadableStream<yorkie_v1_yorkie_pb.ActivateClientResponse>;

  deactivateClient(
    request: yorkie_v1_yorkie_pb.DeactivateClientRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: yorkie_v1_yorkie_pb.DeactivateClientResponse) => void
  ): grpcWeb.ClientReadableStream<yorkie_v1_yorkie_pb.DeactivateClientResponse>;

  updatePresence(
    request: yorkie_v1_yorkie_pb.UpdatePresenceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: yorkie_v1_yorkie_pb.UpdatePresenceResponse) => void
  ): grpcWeb.ClientReadableStream<yorkie_v1_yorkie_pb.UpdatePresenceResponse>;

  attachDocument(
    request: yorkie_v1_yorkie_pb.AttachDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: yorkie_v1_yorkie_pb.AttachDocumentResponse) => void
  ): grpcWeb.ClientReadableStream<yorkie_v1_yorkie_pb.AttachDocumentResponse>;

  detachDocument(
    request: yorkie_v1_yorkie_pb.DetachDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: yorkie_v1_yorkie_pb.DetachDocumentResponse) => void
  ): grpcWeb.ClientReadableStream<yorkie_v1_yorkie_pb.DetachDocumentResponse>;

  removeDocument(
    request: yorkie_v1_yorkie_pb.RemoveDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: yorkie_v1_yorkie_pb.RemoveDocumentResponse) => void
  ): grpcWeb.ClientReadableStream<yorkie_v1_yorkie_pb.RemoveDocumentResponse>;

  pushPullChanges(
    request: yorkie_v1_yorkie_pb.PushPullChangesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: yorkie_v1_yorkie_pb.PushPullChangesResponse) => void
  ): grpcWeb.ClientReadableStream<yorkie_v1_yorkie_pb.PushPullChangesResponse>;

  watchDocuments(
    request: yorkie_v1_yorkie_pb.WatchDocumentsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<yorkie_v1_yorkie_pb.WatchDocumentsResponse>;

}

export class YorkieServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  activateClient(
    request: yorkie_v1_yorkie_pb.ActivateClientRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<yorkie_v1_yorkie_pb.ActivateClientResponse>;

  deactivateClient(
    request: yorkie_v1_yorkie_pb.DeactivateClientRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<yorkie_v1_yorkie_pb.DeactivateClientResponse>;

  updatePresence(
    request: yorkie_v1_yorkie_pb.UpdatePresenceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<yorkie_v1_yorkie_pb.UpdatePresenceResponse>;

  attachDocument(
    request: yorkie_v1_yorkie_pb.AttachDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<yorkie_v1_yorkie_pb.AttachDocumentResponse>;

  detachDocument(
    request: yorkie_v1_yorkie_pb.DetachDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<yorkie_v1_yorkie_pb.DetachDocumentResponse>;

  removeDocument(
    request: yorkie_v1_yorkie_pb.RemoveDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<yorkie_v1_yorkie_pb.RemoveDocumentResponse>;

  pushPullChanges(
    request: yorkie_v1_yorkie_pb.PushPullChangesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<yorkie_v1_yorkie_pb.PushPullChangesResponse>;

  watchDocuments(
    request: yorkie_v1_yorkie_pb.WatchDocumentsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<yorkie_v1_yorkie_pb.WatchDocumentsResponse>;

}

