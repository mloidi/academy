import { GET, POST, PATCH, DELETE, setRequestOptions } from './service.util.js';

const baseURL = process.env.REACT_APP_BACKEND_URL + '/academicYear';

export const AcademicYearService = {
  get: async token => {
    const url = baseURL + '/';
    const response = await fetch(
      new Request(url, setRequestOptions({ method: GET, token }))
    );
    const academicYears = await response.json();
    return academicYears.map(item => {
      item.showActions = false;
      item.isAdded = false;
      item.isEdited = false;
      item.isDeleted = false;
      return item;
    });
  },
  save: async (token, academicYearToSave, isNew) => {
    const url = baseURL + '/';
    const response = await fetch(
      new Request(
        url,
        setRequestOptions({
          method: isNew ? POST : PATCH,
          token,
          body: { academicYearToSave }
        })
      )
    );
    return await response.json();
  },
  delete: async (token, id) => {
    const url = baseURL + '/' + id;
    const req = new Request(url, setRequestOptions({ method: DELETE, token }));
    const response = await fetch(req);
    return await response.json();
  }
};
