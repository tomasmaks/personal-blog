interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  stack: string[],
  notes?: string
}

const workData: Project[] = [
  {
    title: 'Sprocket Android',
    description: `Sprocket is the worlds first bicycle marketplace app where you can find cycling deals, buy and sell bikes, parts and identify tech specs.`,
    imgSrc: '/static/images/projects/image_sprocket_android.jpg',
    href: 'https://play.google.com/store/apps/details?id=com.retrographic.sprocket',
    stack: ['Android', 'Java', 'Kotlin', 'Firebase'],
    notes: ''
  },
  {
    title: 'Sprocket Web',
    description: `Sprocket is the worlds first bicycle marketplace app where you can find cycling deals, buy and sell bikes, parts and identify tech specs.`,
    imgSrc: '/static/images/projects/image_sprocket_web.jpg',
    href: 'https://www.sprocket.bike/',
    stack: ['Web', 'Ruby', 'RubyOnRails', 'Postgres', 'Firebase'],
    notes: ''
  },
  {
    title: 'Stixex',
    description: `STIXEX was a web app that allows users to place bets on the color of the next candlestick in the price chart and earn 80% profit on winning trades. All you have to do is pick red or green`,
    imgSrc: '/static/images/projects/image_stixex.jpg',
    href: 'https://dappradar.com/dapp/stixex/',
    stack: ['Web', 'Ethereum', 'VueJS', 'Firebase'],
    notes: ''
  },
  {
    title: 'Bulbee',
    description: `Bulbee was to web app where Residential Electricity Consumers could calculate their home energy consumtion and get suggestions of how to reduce it by 50%.`,
    imgSrc: '/static/images/projects/image_bulbee.jpg',
    href: '',
    stack: ['Web', 'VueJS', 'Firebase', 'Bootstrap'],
    notes: ''
  },
  {
    title: 'FromX',
    description: `FromX was all around Android productivity app to manage notes, bookmarks and apps`,
    imgSrc: '/static/images/projects/image_fromx.jpg',
    href: '',
    stack: ['Android', 'Java', 'Firebase'],
    notes: ''
  }
]

// Group 2: Technology Projects
const sideProjectData: Project[] = [
  {
    title: 'Influpress',
    description: `A platform that allows artists submit their artwork on 100s of print-on-demand products and sell it on 100s of marketplaces (like Ebay, Etsy, Walmart and many more) from one place.`,
    imgSrc: '/static/images/projects/image_influpress.jpg',
    href: '',
    stack: ['Web', 'VueJS', 'Firebase', 'Bootstrap'],
    notes: 'The project had a big demand from artists, but most marketplaces had restrictions and didn`t want 10000s of relatively similair products.'
  },
  {
    title: 'Inkfit',
    description: `A marketplace that allows artists submit their artwork on unique print-on-demand products such as phone cases with personalization elements, t-shirts for couples or special events.`,
    imgSrc: '/static/images/projects/image_inkfit.jpg',
    href: '',
    stack: ['Web', 'Shopify', 'VueJS', 'Firebase', 'Bootstrap'],
    notes: 'I had somewhat demand from artists, but it was hard to get growth because of a chicken and egg problem, where you need more artists to get more sales and get more sales to get more artists. I still believe this project could reach 10M+ revenue with lots of marketing, but I eventually came up with something better.'
  },
]

// Export both groups
export { workData, sideProjectData }