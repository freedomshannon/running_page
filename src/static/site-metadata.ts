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
  logo: 'https://postimg.cc/n9xBSD0n',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'blog.shannonwang.top',
    },
    {
      name: 'About',
      url: 'blog.shannonwang.top',
    },
  ],
};

export default data;
