import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'games-grid',
  styleUrl: 'games-grid.scss',
  shadow: true
})

export class GamesGrid {

  @Prop() showCategoryBar: boolean = false;
  @Prop() categoryName: string = 'Casino';
  @Prop() categoryUrl: string = '/casino';

  getCategoryBar() {
    if (!this.showCategoryBar) return null;

    return (
      <div class="category-name">
        <div>
          <span>{this.categoryName}</span>
          <a href={this.categoryUrl}>View all</a>
        </div>
      </div>
    );
  }

  getGames() {
    const gamesResponse = [
      {
        "createdAt": "2018-10-19T08:00:34.77",
        "firstPublished": "2017-01-17T11:23:12.227",
        "minBet": 0.25,
        "maxBet": 250,
        "minRtp": 96.11,
        "maxRtp": 96.11,
        "wageringContribution": 1,
        "status": "Published",
        "customFields": {
          "bonusRound": "Butterfly Free Spins Bonus,Buried Treasure Bonus",
          "video": "https://www.youtube.com/embed/8UnHghLPOKM",
          "infoPageTitle": "Play Bejeweled Cascades | £10 Free | UK Casino",
          "infoPageDescription": "Cascading reels mean you can win again and again in Bejeweled Cascades slots. Claim your £10 free when you join UK Casino.",
          "infoPageKeywords": "bejeweled cascades, bejeweled cascades slot, bejeweled cascades slot game, play bejeweled cascades, play bejeweled cascades online, play bejeweled cascades slot, online casino, casino, slot, online slot"
        },
        "siteCode": "ukcasino.com",
        "gameId": "365",
        "gameType": "Slot",
        "catalogueGameId": "663691449216409600",
        "catalogueName": "Bejeweled Cascades",
        "demoLaunchUrl": "",
        "realLaunchUrl": "",
        "mostPlayedRanking": 0,
        "mostPlayedProgress": "0",
        "technology": "FlashAndHtml5",
        "numberOfLines": 25,
        "rtp": 96.11,
        "providerId": 12,
        "hasFreeSpinMode": false,
        "tableId": null,
        "isLive": false,
        "isNativeApp": false,
        "isEmbedded": false,
        "currencies": [
          {
            "currencyCode": "EUR"
          },
          {
            "currencyCode": "GBP"
          },
          {
            "currencyCode": "SEK"
          }
        ],
        "providerName": "Blueprint",
        "tags": [
          "all-games",
          "casino",
          "slot"
        ],
        "isPublished": true,
        "channels": [
          {
            "name": "Desktop",
            "channel": "Desktop",
            "width": 0,
            "height": 0,
            "isAvailableForDemoPlay": true
          },
          {
            "name": "Mobile",
            "channel": "Mobile",
            "width": 0,
            "height": 0,
            "isAvailableForDemoPlay": true
          }
        ],
        "categories": [
          {
            "id": "42",
            "name": "slots-ukcasino.com",
            "orderNumber": 10
          }
        ],
        "languageId": 519,
        "languageCode": "en",
        "shortDescription": "Cascading reels mean you can win again and again in Bejeweled Cascades slots. Claim your £10 free when you join UK Casino.",
        "displayName": "Bejeweled Cascades",
        "friendlyUrlName": "v",
        "rules": null,
        "rulesLastUpdated": null,
        "images": [
          {
            "label": "banner",
            "url": "https://4c0aa8c22572fea1c25b-dcb2c52d171c68965595a3f761d319ba.ssl.cf3.rackcdn.com/uk-casino/game-images/bejeweled-cascades/bc-banner-regular.jpg",
            "alt": null
          },
          {
            "label": "largeBanner",
            "url": "https://4c0aa8c22572fea1c25b-dcb2c52d171c68965595a3f761d319ba.ssl.cf3.rackcdn.com/uk-casino/game-images/bejeweled-cascades/bc-banner-large.jpg",
            "alt": null
          },
          {
            "label": "largeThumb",
            "url": "https://4c0aa8c22572fea1c25b-dcb2c52d171c68965595a3f761d319ba.ssl.cf3.rackcdn.com/uk-casino/game-images/bejeweled-cascades/bc-thumb-large.jpg",
            "alt": null
          },
          {
            "label": "mediumThumb",
            "url": "https://4c0aa8c22572fea1c25b-dcb2c52d171c68965595a3f761d319ba.ssl.cf3.rackcdn.com/uk-casino/game-images/bejeweled-cascades/bc-thumb-medium.jpg",
            "alt": null
          },
          {
            "label": "thumb",
            "url": "https://4c0aa8c22572fea1c25b-dcb2c52d171c68965595a3f761d319ba.ssl.cf3.rackcdn.com/uk-casino/game-images/bejeweled-cascades/bc-thumb-small.jpg",
            "alt": null
          }
        ],
        "launchCode": "",
        "jackpotId": "",
        "video": "https://www.youtube.com/embed/8UnHghLPOKM",
        "bonusRound": "Butterfly Free Spins Bonus,Buried Treasure Bonus",
        "metaTitle": "",
        "metaDescription": "",
        "metaKeywords": ""
      },
      {
        "createdAt": "2019-10-02T13:26:01.71",
        "firstPublished": "2019-10-02T13:26:01.71",
        "minBet": null,
        "maxBet": null,
        "minRtp": null,
        "maxRtp": null,
        "wageringContribution": 1,
        "status": "Published",
        "customFields": {},
        "siteCode": "ukcasino.com",
        "gameId": "136289",
        "gameType": "Slot",
        "catalogueGameId": "834077399539912712",
        "catalogueName": "IcyWilds",
        "demoLaunchUrl": "",
        "realLaunchUrl": "",
        "mostPlayedRanking": 0,
        "mostPlayedProgress": "0",
        "technology": "FlashAndHtml5",
        "numberOfLines": 0,
        "rtp": null,
        "providerId": 1,
        "hasFreeSpinMode": false,
        "tableId": null,
        "isLive": false,
        "isNativeApp": false,
        "isEmbedded": false,
        "currencies": [
          {
            "currencyCode": "EUR"
          },
          {
            "currencyCode": "GBP"
          },
          {
            "currencyCode": "HKD"
          }
        ],
        "providerName": "IGT RGSxt",
        "tags": [
          "promo",
          "all-games",
          "casino",
          "igt",
          "slot"
        ],
        "isPublished": true,
        "channels": [
          {
            "name": "Desktop",
            "channel": "Desktop",
            "width": null,
            "height": null,
            "isAvailableForDemoPlay": true
          },
          {
            "name": "Mobile",
            "channel": "Mobile",
            "width": null,
            "height": null,
            "isAvailableForDemoPlay": true
          }
        ],
        "categories": [
          {
            "id": "42",
            "name": "slots-ukcasino.com",
            "orderNumber": 0
          }
        ],
        "languageId": 186534,
        "languageCode": "en",
        "shortDescription": "Icy Wilds",
        "displayName": "Icy Wilds",
        "friendlyUrlName": "icy-wilds",
        "rules": "",
        "rulesLastUpdated": null,
        "images": [
          {
            "label": "Background",
            "url": "sss",
            "alt": ""
          },
          {
            "label": "Thumbnail",
            "url": "Icy Wilds",
            "alt": ""
          },
          {
            "label": "Image",
            "url": "sss",
            "alt": ""
          }
        ],
        "launchCode": "",
        "jackpotId": "",
        "video": "",
        "bonusRound": "",
        "metaTitle": "",
        "metaDescription": "",
        "metaKeywords": ""
      },
      {
        "createdAt": "2018-10-19T08:02:43.547",
        "firstPublished": "2017-12-01T09:06:37.78",
        "minBet": 0,
        "maxBet": 0,
        "minRtp": 0,
        "maxRtp": 0,
        "wageringContribution": 1,
        "status": "Published",
        "customFields": {
          "jackpotId": "Blueprint:6:GBP",
          "bonusRound": "Tombestone Bonus, Ancestor Pick Me Bonus,  Dr. Von Goosewing Free Spins,  Wild Heart Free Spins,  Duckula Big Money Bonus, Jackpot King Progressive",
          "infoPageTitle": "meta title",
          "infoPageDescription": "meta description",
          "infoPageKeywords": "meta keyword"
        },
        "siteCode": "ukcasino.com",
        "gameId": "1341",
        "gameType": "Slot",
        "catalogueGameId": "803268362628108289",
        "catalogueName": "Count Duckula",
        "demoLaunchUrl": "",
        "realLaunchUrl": "",
        "mostPlayedRanking": 0,
        "mostPlayedProgress": "0",
        "technology": "FlashAndHtml5",
        "numberOfLines": 1,
        "rtp": 0,
        "providerId": 12,
        "hasFreeSpinMode": false,
        "tableId": null,
        "isLive": false,
        "isNativeApp": false,
        "isEmbedded": false,
        "currencies": [
          {
            "currencyCode": "EUR"
          },
          {
            "currencyCode": "GBP"
          },
          {
            "currencyCode": "HKD"
          }
        ],
        "providerName": "Blueprint",
        "tags": [
          "new",
          "exclusive",
          "all-games",
          "blueprint",
          "casino",
          "slot"
        ],
        "isPublished": true,
        "channels": [
          {
            "name": "Desktop",
            "channel": "Desktop",
            "width": 0,
            "height": 0,
            "isAvailableForDemoPlay": true
          },
          {
            "name": "Mobile",
            "channel": "Mobile",
            "width": 0,
            "height": 0,
            "isAvailableForDemoPlay": true
          }
        ],
        "categories": [
          {
            "id": "42",
            "name": "slots-ukcasino.com",
            "orderNumber": 43
          }
        ],
        "languageId": 1728,
        "languageCode": "en",
        "shortDescription": "Join Igor, Nanny and Count Duckula in their  fight against Dr. Van Goosewing and the search for big wins in the Online Casino Slot Count Duckula on UK Casino!",
        "displayName": "Count Duckula",
        "friendlyUrlName": "count-duckula",
        "rules": null,
        "rulesLastUpdated": null,
        "images": [
          {
            "label": "Background",
            "url": "https://4c0aa8c22572fea1c25b-dcb2c52d171c68965595a3f761d319ba.ssl.cf3.rackcdn.com/uk-casino/updated-thumbs/duckula-thumb-large.jpg",
            "alt": null
          },
          {
            "label": "banner",
            "url": "https://4c0aa8c22572fea1c25b-dcb2c52d171c68965595a3f761d319ba.ssl.cf3.rackcdn.com/uk-casino/game-images/count-duckula-jk/count-duckula-jk-banner-medium.jpg",
            "alt": null
          },
          {
            "label": "largeBanner",
            "url": "https://4c0aa8c22572fea1c25b-dcb2c52d171c68965595a3f761d319ba.ssl.cf3.rackcdn.com/uk-casino/game-images/count-duckula-jk/count-duckula-jk-banner-large.jpg",
            "alt": null
          },
          {
            "label": "largeThumb",
            "url": "https://4c0aa8c22572fea1c25b-dcb2c52d171c68965595a3f761d319ba.ssl.cf3.rackcdn.com/uk-casino/updated-thumbs/duckula-thumb-large.jpg",
            "alt": null
          },
          {
            "label": "mediumThumb",
            "url": "https://4c0aa8c22572fea1c25b-dcb2c52d171c68965595a3f761d319ba.ssl.cf3.rackcdn.com/uk-casino/updated-thumbs/duckula-thumb-medium.jpg",
            "alt": null
          },
          {
            "label": "Screenshot",
            "url": "z",
            "alt": null
          },
          {
            "label": "thumb",
            "url": "https://4c0aa8c22572fea1c25b-dcb2c52d171c68965595a3f761d319ba.ssl.cf3.rackcdn.com/uk-casino/updated-thumbs/duckula-thumb-small.jpg",
            "alt": null
          },
          {
            "label": "Thumbnail",
            "url": "z",
            "alt": null
          }
        ],
        "launchCode": "",
        "jackpotId": "Blueprint:6:GBP",
        "video": "",
        "bonusRound": "Tombestone Bonus, Ancestor Pick Me Bonus,  Dr. Von Goosewing Free Spins,  Wild Heart Free Spins,  Duckula Big Money Bonus, Jackpot King Progressive",
        "metaTitle": "",
        "metaDescription": "",
        "metaKeywords": ""
      },
      {
        "createdAt": "2018-10-19T08:00:23.557",
        "firstPublished": "2016-09-08T06:54:23.353",
        "minBet": 0.2,
        "maxBet": 500,
        "minRtp": 96.43,
        "maxRtp": 96.43,
        "wageringContribution": 1,
        "status": "Published",
        "customFields": {
          "bonusRound": "Fairy Godmother Bonus,Rumpelstiltskin's Deal Maker,Jack and the Beanstalk,3 Little Pigs Free Spins,Rapunzel Free Spins",
          "video": "https://youtube.com/embed/enylZObyyqw",
          "infoPageTitle": "Play Wish Upon A Jackpot Slot | UK Casino | £10 Completely Free",
          "infoPageDescription": "Make your wish come true in the slot game Wish Upon A Jackpot. Play now at UK Casino and get £10 completely free.",
          "infoPageKeywords": "wish upon a jackpot, wish upon a jackpot slot, wish upon a jackpot slot game, play wish upon a jackpot, play wish upon a jackpot online, online casino, online slots, slots, casino."
        },
        "siteCode": "ukcasino.com",
        "gameId": "281",
        "gameType": "Slot",
        "catalogueGameId": "625612311465435141",
        "catalogueName": "Wish Upon A Jackpot",
        "demoLaunchUrl": "",
        "realLaunchUrl": "",
        "mostPlayedRanking": 0,
        "mostPlayedProgress": "0",
        "technology": "FlashAndHtml5",
        "numberOfLines": 20,
        "rtp": 96.43,
        "providerId": 12,
        "hasFreeSpinMode": false,
        "tableId": null,
        "isLive": false,
        "isNativeApp": false,
        "isEmbedded": false,
        "currencies": [
          {
            "currencyCode": "EUR"
          },
          {
            "currencyCode": "GBP"
          },
          {
            "currencyCode": "HKD"
          },
          {
            "currencyCode": "SEK"
          }
        ],
        "providerName": "Blueprint",
        "tags": [
          "all-games",
          "casino",
          "slot"
        ],
        "isPublished": true,
        "channels": [
          {
            "name": "Desktop",
            "channel": "Desktop",
            "width": 0,
            "height": 0,
            "isAvailableForDemoPlay": true
          },
          {
            "name": "Mobile",
            "channel": "Mobile",
            "width": 0,
            "height": 0,
            "isAvailableForDemoPlay": true
          }
        ],
        "categories": [
          {
            "id": "115",
            "name": "jackpots-ukcasino.com",
            "orderNumber": 2
          },
          {
            "id": "42",
            "name": "slots-ukcasino.com",
            "orderNumber": 38
          }
        ],
        "languageId": 375,
        "languageCode": "en",
        "shortDescription": "Make your wish come true in the slot game Wish Upon A Jackpot. Play now at UK Casino and get £10 completely free.",
        "displayName": "Wish Upon A Jackpot",
        "friendlyUrlName": "wish-upon-a-jackpot",
        "rules": null,
        "rulesLastUpdated": null,
        "images": [
          {
            "label": "banner",
            "url": "https://4c0aa8c22572fea1c25b-dcb2c52d171c68965595a3f761d319ba.ssl.cf3.rackcdn.com/uk-casino/game-images/wish-upon-a-jackpot/wish-upon-a-jackpot-banner-regular.jpg",
            "alt": null
          },
          {
            "label": "largeBanner",
            "url": "https://4c0aa8c22572fea1c25b-dcb2c52d171c68965595a3f761d319ba.ssl.cf3.rackcdn.com/uk-casino/game-images/wish-upon-a-jackpot/wish-upon-a-jackpot-banner-large.jpg",
            "alt": null
          },
          {
            "label": "largeThumb",
            "url": "https://4c0aa8c22572fea1c25b-dcb2c52d171c68965595a3f761d319ba.ssl.cf3.rackcdn.com/uk-casino/game-images/wish-upon-a-jackpot/wish-upon-a-jackpot-thumb-large.jpg",
            "alt": null
          },
          {
            "label": "mediumThumb",
            "url": "https://4c0aa8c22572fea1c25b-dcb2c52d171c68965595a3f761d319ba.ssl.cf3.rackcdn.com/uk-casino/game-images/wish-upon-a-jackpot/wish-upon-a-jackpot-thumb-medium.jpg",
            "alt": null
          },
          {
            "label": "thumb",
            "url": "https://4c0aa8c22572fea1c25b-dcb2c52d171c68965595a3f761d319ba.ssl.cf3.rackcdn.com/uk-casino/game-images/wish-upon-a-jackpot/wish-upon-a-jackpot-thumb-small.jpg",
            "alt": null
          }
        ],
        "launchCode": "",
        "jackpotId": "",
        "video": "https://youtube.com/embed/enylZObyyqw",
        "bonusRound": "Fairy Godmother Bonus,Rumpelstiltskin's Deal Maker,Jack and the Beanstalk,3 Little Pigs Free Spins,Rapunzel Free Spins",
        "metaTitle": "",
        "metaDescription": "",
        "metaKeywords": ""
      }
    ];

    const games = gamesResponse.map(game => {
      const { displayName, friendlyUrlName, images } = game;
      const thumb = images.find(image => image.label === 'thumb')?.url || null;

      return (
        <game-item
          display-name={displayName}
          image={thumb}
          slug={friendlyUrlName}
        >
        </game-item>
      )
    });

    return <div class="games-grid">{games}</div>;
  }

  render() {
    return (
      <Host>
        {this.getCategoryBar()}
        {this.getGames()}
      </Host>
    );
  }

}
