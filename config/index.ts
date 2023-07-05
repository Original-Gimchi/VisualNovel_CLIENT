interface Config {
  baseURL: string;
}

const createConfig: () => Config = () => {
  return {
    baseURL: "192.168.10.229:8088",
  };
};

export default createConfig();
