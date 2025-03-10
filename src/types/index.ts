export interface HomepageData {
  article: {
    id: string;
    body: string;
    frontmatter: {
      title: string;
      displayTitle: string;
      subTitle: string;
      description: string;
      learnLinkText: string;
      beginnerGuideHeaderText: string;
      beginnerGuideBodyText: string;
      doMoreWithNodeHeaderText: string;
      doMoreWithNodeBodyText: string;
      nodeFeatureHeader1: string;
      nodeFeatureHeader2: string;
      nodeFeatureHeader3: string;
      nodeFeature1: string;
      nodeFeature2: string;
      nodeFeature3: string;
      nodeFeatureAltText: string;
    };
  };
}

export interface LearnPageContext {
  slug: string;
  relativePath: string;
  next: PaginationInfo;
  previous: PaginationInfo;
  navigationData: NavigationSectionData;
}

export interface TableOfContents {
  items: {
    title: string;
    url: string;
  }[];
}

export interface LearnPageData {
  article: {
    id: string;
    body: string;
    tableOfContents: TableOfContents;
    frontmatter: { title: string; description: string };
    fields: { authors: string[] };
  };
}

export interface PaginationInfo {
  slug: string;
  title: string;
}

export interface BlogCategory {
  name: string;
  slug: string;
  description?: string;
}

export interface NavigationSectionItem {
  slug: string;
  title: string;
  section: string;
  category: string;
}

export interface NavigationSectionData {
  [index: string]: { category: string; data: NavigationSectionItem[] };
}

/**
 * Payload on the `stickychange` custom event
 */
export interface StickyChange {
  stuck: boolean;
  target: HTMLElement;
}

export interface SentinelObserverSetupOptions {
  container: HTMLElement;
  stickyElementsClassName: string;
  root?: HTMLElement | null;
  headerRootMargin?: string;
  footerRootMargin?: string;
}

declare global {
  interface Window {
    previousPath: string;
  }
}

export interface ArticleData {
  body: string;
  tableOfContents: TableOfContents;
  frontmatter: {
    title: string;
    description: string;
    displayTitle?: string;
  };
  fields: { authors: string[]; slug?: string };
}

export interface ArticleProps {
  editPath?: string;
  data: {
    articleCurrentLanguage?: ArticleData;
    articleDefaultLanguage?: ArticleData;
  };
  location?: Location;
}

export interface CommunityNavigationSection {
  title: string;
  sections: string[];
}

export interface BlogPostAuthor {
  id?: string;
  name: string;
  website: string;
}

export interface BlogMetaData {
  node: {
    frontmatter: {
      title: string;
      blogAuthors: BlogPostAuthor[];
      category: BlogCategory;
    };
    fields: { date: string; slug: string; categoryName: string };
  };
}

export interface BlogPostsList {
  blogs: {
    edges: BlogMetaData[];
  };
}

export interface BlogPageData {
  blog: {
    body: string;
    excerpt: string;
    frontmatter: { title: string; blogAuthors: BlogPostAuthor[] };
    fields: { slug: string; date: string };
  };
  recent: {
    edges: BlogMetaData[];
  };
}

export interface BlogPageContext {
  slug: string;
  relativePath: string;
  next: PaginationInfo;
  previous: PaginationInfo;
  navigationData: NavigationSectionData;
}

export interface SideNavBarItem {
  title: string;
  slug: string;
}

// eslint-disable-next-line no-shadow
export enum ReleaseTypes {
  current = 'Current',
  lts = 'LTS',
  maintenance = 'Maintenance',
  endoflife = 'End-of-life',
}

export interface UpcomingReleaseData {
  releaseDate: string;
  releaseType: ReleaseTypes;
  alreadyReleased: boolean;
}

export interface UpcomingRelease {
  title: string;
  releases: UpcomingReleaseData[];
}

export interface NodeReleaseDataDetail {
  date: string;
  version: string;
  files: string[];
  lts: string;
  v8: string;
  npm?: string;
  modules?: string;
  openssl?: string;
  security?: boolean;
  uv?: string;
  zlib?: string;
}

export interface NodeReleaseData {
  release: string;
  status: string;
  codename: string;
  initialRelease: string;
  activeLTSStart: string;
  maintenanceLTSStart: string;
  endOfLife: string;
}

export type NodeReleaseLTSVersion = Pick<
  NodeReleaseDataDetail,
  'version' | 'lts'
>;

export type NodeReleaseLTSNPMVersion = Pick<
  NodeReleaseDataDetail,
  'lts' | 'npm' | 'version'
>;

export interface BannersIndex {
  endDate: string;
  link: string;
  text?: string;
  html?: string;
  startDate: string;
}

export interface BannersBLM {
  link: string;
  text: string;
  visible: boolean;
}

export interface Banners {
  banners: {
    index: BannersIndex;
    blacklivesmatter: BannersBLM;
  };
}

export type SearchResult = {
  id: React.Key | null | undefined;
  slug: string;
  title: string;
};
