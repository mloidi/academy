import { GET, POST, PATCH, DELETE, setRequestOptions } from './service.util.js';

const baseURL = process.env.REACT_APP_BACKEND_URL + '/event';

export const EventService = {
  get: async (token, academicYear) => {
    const url = baseURL + '/' + academicYear;
    const requestOptions = setRequestOptions({
      method: GET,
      token
    });
    const req = new Request(url, requestOptions);
    const response = await fetch(req);
    return await response.json();
  },
  save: async (token, eventToSave, isNew) => {
    console.log(eventToSave);
    const url = baseURL + '/';
    const requestOptions = setRequestOptions({
      method: isNew ? POST : PATCH,
      token: token,
      body: { event: eventToSave }
    });
    const req = new Request(url, requestOptions);
    const response = await fetch(req);
    return await response.json();
  },
  delete: async (token, id) => {
    const url = baseURL + '/' + id;
    const requestOptions = setRequestOptions({
      method: DELETE,
      token
    });
    const req = new Request(url, requestOptions);
    const response = await fetch(req);
    return await response.json();
  }
};
