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
  logo: 'https://drive.usercontent.google.com/download?id=1neD6LC10HH-zVSR3O04pBlsjj8REkS5D&export=view&authuser=0',
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
