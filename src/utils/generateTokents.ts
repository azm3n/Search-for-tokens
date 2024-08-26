import {Token} from '../interfaces'

const TOKENS = [
  {
    name: 'Near Protocol',
    ticker: 'NEAR',
    icon: 'https://s3-alpha-sig.figma.com/img/a422/8e7f/172c929a3de115b3ce695c16e664b282?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GzPLlv2CB-kPncpDUZN5U~ssa~WUmsIg29nm7aiSXadS8VGhq8eX2~ME80kon-EZw1lrtJQ48htvT~jFfiTJrzwguTlfeX2ydO3WU11OG~RGrnMBPHCHfcPGnfAs9EFh8oJyBpMpEziNMGgf~b8uuEKTDAD6tuGMLQgbBM1FGL11iXkk0ebaXLwhPa0qiCTx2H11VQTNFVpd1padYLFRFfAEe6ebJVw62IAy2g0T2Y3CpQcf~QXIvjhrpKw8NZYgBwhWiINAKzzusRUjZengDgwnsYUuVDCTZilyQglKCrD2msxach8FYkDTMO8YrUas4O2LMGQRKB9hhiJilBeJJw__',
  },
  {
    name: 'USD Coin',
    ticker: 'USDC',
    icon: 'https://s3-alpha-sig.figma.com/img/2654/d0ea/7067f6da4d09a20d5d807a46ea193b8e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KyPOEYCliV0jrKPmoWwR~X8JGwlFgZIKOAoLyQegYhVqF7B6zUci5rF3F9FF~pk2Fg-uiC~udh48QbwcKTIR0AkiYiHSxt78gxOmyMb5b3GywI7l7~IE1zkDiH8owpd9CGcXEOcBumuniq9CyujYukkBXpBhtbqJnvJHZ9KzxwnkStTB3ikXof8HIjkwQvaOOXuxtItb7ItykjUm~7xTNBqJtFnj5HKX42MbkVCraZUuNadz72W-rgdMuNJjoK1SsOj8-F2UhD7~MVYXn-XNrPCnNqOEUJ4eKevlGs9YRyOA8x~c0bvFgZNQjYcNcr8NlNfVUXq6~NnVMDNDDlV87w__',
  },
  {
    name: 'Dodgecoin',
    ticker: 'DOGE',
    icon: 'https://s3-alpha-sig.figma.com/img/6911/94d5/fd843a6d4389228054b56984c65bd5fe?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jWX751tiOrZWF5FybizkmOl5wo5zGmM-KuUEB5q-MbMREEO8O1Du9oBd9PCrXMpE27RcW3jUrL0-NLyT9tF9Ev7AxZLfxHOwvYt6VfMmH5F2nUgZRw1v~toauXWavyJjlN9pXPxX5MuQKkcL4w-tEv9VcjkgvO50X0eQKRvL8NlnyZCcSSlrwQ5kb4nzL2NdHcPT07MNMs5ZP6JPVYhq9ZU7UbprjG9StKN-QIWLP5XkUszglB8d9WoLdLt6~IOtclaT5XOpRaxAHutdw2pU6WKKGU74LPDMDfHhJ8eyPYStYe5OwJOaMBvvA3Mx~aK1vKWJzcfjUR1rQgwtxXydyw__',
  },
  {
    name: 'Solana',
    ticker: 'SOL',
    icon: 'https://s3-alpha-sig.figma.com/img/da2a/9e95/c3cfa9092e047e4dc2fd2243b181e251?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gc9ZHUWSVVVfxgUEgSCbNcTLx7HDKCChGjWVYbEj7xXz-pgZgqsWaG-3VLR4jLUNeRNQ7ODXsuuvNGC-JC61fjlbi~2Zj-PXkDeDB92sQ~N6YUw6i7roYsGxILLzTC9IJEfFKdqSiLoHsD5vJtWum~H1TVUfM9m86YSMFgZ589CS-1awaYf-tOMdsB4LcoU3YkgNDuPk6AEfJNz9f~WHDXMx3-b8mMbv0p4KzV9A~pQCf58aPfxud1grjT3qwpm~1m1upSrXM5iU3HM68eARTH2y8rSHP08d4DoxJvumOAGr3d-u5miIhZ6cfSHreQTZXRaTCUx1jUWm05hboRxwGQ__',
  },
  {
    name: 'Etherum',
    ticker: 'ETH',
    icon: 'https://s3-alpha-sig.figma.com/img/9d63/6e4e/de74b4442a7b709d84c023c572b586d0?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H~c3zXu5tcW9Ktc7pV6oY3LVIMovSpNurhPxhH-7tCE-ApIR197Ryr-yHsyQBNmK9VaG-W6AmeObIQSoGS9xsrSGym70M-v6IKSJSmmdDynRWvzWnh6I-tB9-6dxXd63oZJEszyf6g6AS32rckLKf7Pue-OOLk~9r7jx~6usUpx50UdmghACc8UY2Z8xiFVI9JMYeVpsyRmGM4cLkiXeVzMFwChQM0~llfO0LPGiQjg5JJVZ1lPPN2sW7K2vo357i9reC4NAL6QlyVU7VH7pYMwwQVksbsI1qrMNcyewHQ3OZd3jyOo-~K~X9BACq-GtKzh3jJm2LsI42~0CFWTrng__',
  },
  {
    name: 'Bitcoin',
    ticker: 'BTC',
    icon: 'https://s3-alpha-sig.figma.com/img/b097/89a1/b7875bd176f5ac08a99f018db1a08e58?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RRHFVbNtvYPbGzoFb5ciRM8NPEcAvzslVhhTpNLekhMKZGBLZSP~5rIuor2KdjbrNdk7Gj1jjLzTJiWA9NMJ-v9mIhhZmZKf2VDJjpRNIiIsTE4UoHeverYIdXNwmeFeTL7gDBCdqwdvWjoi4qDIhcFQTMK8rTu8FfalmpLT6zoqsz~0EXAzRR9jWBsI0mLmb5Jz3v~Zy0oA3QsZhZL3EkzNEnJhFYtuI9hDxCupjrtzmkQcTWyqzC6AgJ604GlufnlCBXAbg~9i~ciLvstCPKr5Ap1EuQyrr5Bk19M~0XmPYNFb25kblv9cukIfdPmP12qc65bJxb1UUUP-RDQukg__',
  },
]

export const generateTokens = (amount: number): Token[] => {
  const tokens: Token[] = []

  for (var i = 0; i < amount; i++) {
    const randomIndex = Math.floor(Math.random() * TOKENS.length)
    const randomToken = TOKENS[randomIndex]

    const minChange = -89.9,
      maxChange = 57.15

    tokens.push({
      id: String(i),
      ...randomToken,
      price: Number((Math.random() * 1000001).toFixed(2)),
      change: Number(
        (Math.random() * (maxChange - minChange) + minChange).toFixed(2),
      ),
      plusIcon: Math.floor(Math.random() * 10),
    })
  }

  return tokens
}
