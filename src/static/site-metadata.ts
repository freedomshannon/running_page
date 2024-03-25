interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Shannon Running',
  siteUrl: 'https://run.shannonwang.top',
  logo: 'https://wx3.sinaimg.cn/mw690/008aLysvly1ho36ynr9kgj31181101kx.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://blog.shannonwang.top',
    },
    {
      name: 'About',
      url: 'https://blog.shannonwang.top',
    },
  ],
};

export default data;
