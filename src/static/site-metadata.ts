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
  logo: 'https://s2.loli.net/2024/03/25/5GPghXebHCqJFRZ.png',
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
