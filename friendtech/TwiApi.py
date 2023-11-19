from InitProxy import *
from urllib.parse import quote_plus
import requests
import json

http = requests.Session()
http.proxies = proxy

default_features = {"hidden_profile_likes_enabled": True, "hidden_profile_subscriptions_enabled": True, "responsive_web_graphql_exclude_directive_enabled": True, "verified_phone_label_enabled": False, "subscriptions_verification_info_is_identity_verified_enabled": True, "subscriptions_verification_info_verified_since_enabled": True, "highlights_tweets_tab_ui_enabled": True, "creator_subscriptions_tweet_preview_api_enabled": True, "responsive_web_graphql_skip_user_profile_image_extensions_enabled": False, "responsive_web_graphql_timeline_navigation_enabled": True}
features = quote_plus(json.dumps(default_features))
default_fieldToggles = {"withAuxiliaryUserLabels": False}
fieldToggles = quote_plus(json.dumps(default_fieldToggles))

cookie_json = {'email': 'jasmynnmartin@yahoo.com', 'username': 'jasmynnmartin', 'password': '2WboVIcpcxqUx2q', 'guest_token': '1704085021873832216', 'flow_token': 'g;169512050423260594:-1695120504733:ZqpWEHzSFtmzF8TYkztNImwI:13', 'auth_token': 'ee6687bac4c86f4d55aea20de2ea29f4beb40875', 'ct0': '438a9d8547b12b46102dc9075140e3ac', 'kdt': 'emzPrCuzxjmKtJHbIJ3UpH3MIXQDzyiUH3dwASCu', 'twid': '"u=2582711594"'}
headers = {
    'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs=1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
    'cookie': '; '.join(f'{k}={v}' for k, v in cookie_json.items()),
    'referer': 'https://twitter.com/',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
    'x-csrf-token': cookie_json.get("ct0", ""),
    'x-guest-token': cookie_json.get("guest_token", ""),
    'x-twitter-auth-type': 'OAuth2Session',
    'x-twitter-active-user': 'yes',
    'x-twitter-client-language': 'en',
}


def addTwiInfo(ftInfo):
    data1 = {"screen_name": ftInfo["twitterUsername"], "withSafetyModeUserFields": True}
    variables = quote_plus(json.dumps(data1))
    res = http.get(f'https://twitter.com/i/api/graphql/G3KGOASz96M-Qu0nwmGXNg/UserByScreenName?variables={variables}&features={features}&fieldToggles={fieldToggles}', headers=headers).json()
    user = res["data"]["user"]["result"]
    ftInfo["friends_count"] = user["legacy"]["friends_count"]  # ta关注的人数
    ftInfo["followers_count"] = user["legacy"]["followers_count"]  # 关注ta的人数
    ftInfo["statuses_count"] = user["legacy"]["statuses_count"]  # ta的帖子数
    ftInfo["favourites_count"] = user["legacy"]["favourites_count"]  # ta的点赞数
    ftInfo["media_count"] = user["legacy"]["media_count"]  # ta的媒体和照片数
    return ftInfo
