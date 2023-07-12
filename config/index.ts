interface Config {
  baseURL: string;
}

const createConfig: () => Config = () => {
  return {
    baseURL: 'http://localhost:8088'
  };
};

export default createConfig();
