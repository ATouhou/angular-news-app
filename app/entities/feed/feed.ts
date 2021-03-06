 export const enum FeedType {
      _680NewsLocal,
      _680News,
      GoogleNews,
      CBCNews,
      ReutersTopNews
  }

export class Feed {
    name: string;
    serviceUrl: string;
    feedType: FeedType;
    isEnabled: boolean;
    constructor(name: string, serviceUrl:string, feedType: FeedType, isEnabled: boolean) {
        this.name = name;
        this.serviceUrl = serviceUrl;
        this.feedType = feedType;
        this.isEnabled = isEnabled;
    }
}

export class Feeds {
    
    static feeds = [
        new Feed("680 News Local", "/feed/toJson?feedType=" + FeedType._680NewsLocal +"&url=http://www.680news.com/feed/metrolinx/local/",
         FeedType._680NewsLocal, false),
        // new Feed("680 News All", "/feed/toJson?feedType=" + FeedType._680News +"&url=http://www.680news.com/feed/", FeedType._680News, false),
        new Feed("Google News", "/feed/google-news", FeedType.GoogleNews, false),
        new Feed("CBC News", "/feed/toJson?feedType=" + FeedType.CBCNews + "&url=http://www.cbc.ca/cmlink/rss-topstories", FeedType.CBCNews, true),
        new Feed("Reuters Top Stories", "/feed/toJson?feedType=" + FeedType.ReutersTopNews + "&url=http://feeds.reuters.com/reuters/topNews", FeedType.ReutersTopNews, false)
    ];
    
    public static get enabledFeeds() : Feed[] {
        return Feeds.feeds.filter(feed=> feed.isEnabled);
    }
    public static Get(filterList: FeedType[]) : Feed[] {
        return Feeds.feeds.filter(feed=> filterList.findIndex(f=>f == feed.feedType) > -1);
    }
          
} 