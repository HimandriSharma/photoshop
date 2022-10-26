import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModalClass, payload, id, requestType) {
    payload = { list: payload };
    console.log(payload);
    return super.normalizeResponse(store, primaryModalClass, payload, id, requestType);
  }
}