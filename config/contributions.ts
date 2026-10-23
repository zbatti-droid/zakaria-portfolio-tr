export interface contributionsInterface { repo: string; contributionDescription: string; repoOwner: string; link: string; }
export const contributionsUnsorted: contributionsInterface[] = [
 { repo: "Zakaria Portfolio", contributionDescription: "Maintained and evolved a production-ready portfolio to document projects, skills and professional work.", repoOwner: "Zakaria Batti", link: "https://github.com/zbatti-droid/portfolio" },
 { repo: "DiploChain", contributionDescription: "Designed a verifiable diploma workflow combining a web interface, API, database, smart contract and IPFS storage.", repoOwner: "Zakaria Batti", link: "https://github.com/zbatti-droid/DiploChain" },
 { repo: "Open source learning", contributionDescription: "Continuously improving frontend quality, accessibility, responsive behavior and deployment practices through public projects.", repoOwner: "Zakaria Batti", link: "https://github.com/zbatti-droid" },
];
export const featuredContributions = contributionsUnsorted;
