export const baseUrl = process.env.REACT_APP_BACKEND_URL;
if (!baseUrl) throw new Error('baseUrl not found');

export async function myFetch(url, method = 'GET', body = null) {
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    options.method = method === 'POST' ? 'POST' : 'GET';
    options.body = body ? JSON.stringify(body) : null;

    // console.log('options ===', options);
    // return;

    const resp = await fetch(url, options);
    // console.log('resp ===', resp);
    const dataInJs = await resp.json();
    // console.log('dataInJs ===', dataInJs);
    return dataInJs;
  } catch (error) {
    console.log('MyFetch error ===', error);
  }
}

export async function myFetchAuth(url, token, method = 'GET', body = null) {
  // console.log('token ===', token);
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    options.method = method === 'POST' ? 'POST' : 'GET';
    options.body = body ? JSON.stringify(body) : null;

    const resp = await fetch(url, options);
    // console.log('resp ===', resp);
    const dataInJs = await resp.json();
    return dataInJs;
  } catch (error) {
    console.log('MyFetchAuth error ===', error);
  }
}
