import axios from 'axios';

const fetchShow = () => {
  console.log('2');
  return axios.get(
    'https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes'
  );
};

export default fetchShow;
