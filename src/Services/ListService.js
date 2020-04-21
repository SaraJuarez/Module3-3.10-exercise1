const ENDPOINT = 'https://randomuser.me/api/?results=50';

const fetchList = () => fetch(ENDPOINT).then(response => response.json());

export { fetchList };