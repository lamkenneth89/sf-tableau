/**
 *
 * Available reports
 * "messages_labels_last30days","messages_labels_last7days","messages_labels_last1day","messages_labellist-last30days","messages_labellist-last7days","messages_labellist-last1day","account_audiencesize_timeseries_last1day","account_audiencesize_timeseries_last7days","account_audiencesize_timeseries_last30days","account_list","messages_allchannels_last30days","messages_allchannels_last1day","messages_allchannels_last7days","messages_linkedin_last30days","messages_linkedin_last7days","messages_linkedin_last1day","messages_twitter_last7days","messages_twitter_last30days","messages_twitter_last1day","messages_googleplus_last30days","messages_googleplus_last1day","messages_googleplus_last7days","messages_facebook_last30days","messages_facebook_last1day","messages_facebook_last7days","messages_pinterest_last30days","messages_pinterest_last7days","messages_pinterest_last1day","messages_youtube_last1day","messages_youtube_last7days","messages_youtube_last30days","account_audiencesize_timeseries_unfiltered","messages_allchannels_unfiltered","messages_facebook_reactions_last30days","messages_facebook_reactions_last1day","messages_facebook_reactions_last7days"
 messages_labels_last30days
 messages_labels_last7days
 messages_labels_last1day
 messages_labellist-last30days
 messages_labellist-last7days
 messages_labellist-last1day
 account_audiencesize_timeseries_last1day - "Channel","Account","Channel Account ID","Metric","Audience Size"
 account_audiencesize_timeseries_last7days
 account_audiencesize_timeseries_last30days
 account_list
 messages_allchannels_last30days - "Date","Time","Date Time","Channel","Labels","Channel Account ID","Account","User","Title","Channel ID","Image","Text (Click to drill to Message Detail)","Engagement","FB Reactions","FB Comment Stories","FB Share Stories","Twitter Retweets","Twitter Replies","Twitter Likes","Twitter Retweet Audience","Clicks","Web Conversions","IG Comments","IG Likes","LI Likes","LI Shares","LI Comments"
 messages_allchannels_last1day
 messages_allchannels_last7days
 messages_linkedin_last30days, - "Date","Time","Date Time","Labels","Account","User","Title","Channel ID","Image","Text (Click to drill to Message Detail)","Channel Account ID","# of Messages","Engagement","Likes","Comments","Clicks","Web Conversions","Impressions","LI Link Clicks","Shares"
 messages_linkedin_last7days
 messages_linkedin_last1day
 messages_twitter_last7days - "Date","Time","Date Time","Labels","Channel Account ID","Account","User","Title","Channel ID","Image","Text (Click to drill to Message Detail)","Twitter Engagement","Clicks","Twitter Replies","Twitter Likes","Twitter Retweets","Twitter Retweet Audience","Web Conversions"
 messages_twitter_last30days
 messages_twitter_last1day
 messages_googleplus_last30days - "Date","Time","Date Time","Labels","Account","User Name","Title","Channel ID","Image","Text (Click to drill to Message Detail)","Channel Account ID","# of Messages","+1s","Comments","Engagement","Reshares","Clicks","Web Conversions"
 messages_googleplus_last1day
 messages_googleplus_last7days
 messages_facebook_last30days - "Date","Time","Date Time","Labels","Channel Account ID","Account","User","Title","Channel ID","Image","Dark","Text (Click to drill to Message Detail)","Organic Impressions","Paid Impressions","Viral Impressions","Engagement Rate","Engaged Users","Reach","Paid Reach","Storytellers","Engagement","Clicks","Reactions","Comment Stories","Share Stories","Link Clicks","Photo Views","Video Plays","Other Clicks","Negative Feedback","Web Conversions"
 messages_facebook_last1day
 messages_facebook_last7days
 messages_pinterest_last30days - "Date","Time","Date Time","Labels","Board","User","Title","Channel ID","Image","Text (Click to Drill to Pin Details)","Channel Account ID","Published Pins","Engagement","Repins","Comments","Likes"
 messages_pinterest_last7days
 messages_pinterest_last1day
 messages_youtube_last1day - "Date","Time","Date Time","Labels","User","Title","Video ID","Video","Text(Click to drill to Video Detail)","Channel Account ID","Account Name","Views","Engagement","Comments","Likes","Dislikes"
 messages_youtube_last7days
 messages_youtube_last30days
 account_audiencesize_timeseries_unfiltered - "Channel","Account","Channel Account ID","Metric","Audience Size"
 messages_allchannels_unfiltered - "Date","Time","Date Time","Channel","Labels","Channel Account ID","Account","User","Title","Channel ID","Image","Text (Click to drill to Message Detail)","Engagement","FB Reactions","FB Comment Stories","FB Share Stories","Twitter Retweets","Twitter Replies","Twitter Likes","Twitter Retweet Audience","Clicks","Web Conversions","IG Comments","IG Likes","LI Likes","LI Shares","LI Comments"
 messages_facebook_reactions_last30days - "Date","Time","Date Time","Labels","Channel Account ID","Account","User","Title","Channel ID","Image","Dark","Text (Click to drill to Message Detail)","Like","Love","Haha","Wow","Sad","Angry"
 messages_facebook_reactions_last1day
 messages_facebook_reactions_last7days
 *
 *
 *
 *  account_audiencesize_timeseries_custom_short_fb - "Channel","Account","Channel Account ID","Account unique_id (hash)","Metric","Audience Size"
 account_audiencesize_timeseries_custom_full_fb - "Channel","Account","Channel Account ID","Account unique_id (hash)","Metric","Audience Size"
 account_audiencesize_timeseries_custom_short_tw - "Channel","Account","Channel Account ID","Account unique_id (hash)","Metric","Audience Size"
 account_audiencesize_timeseries_custom_full_tw - "Channel","Account","Channel Account ID","Account unique_id (hash)","Metric","Audience Size"
 account_audiencesize_timeseries_custom_short_ig - "Channel","Account","Channel Account ID","Account unique_id (hash)","Metric","Audience Size"
 account_audiencesize_timeseries_custom_full_ig - "Channel","Account","Channel Account ID","Account unique_id (hash)","Metric","Audience Size"
 messages_custom_long_fb
 messages_custom_full_fb
 messages_custom_long_tw
 messages_custom_full_tw
 messages_custom_long_ig
 messages_custom_full_ig
 account_list_custom
 messages_labels_custom_long
 messages_labels_custom_full
 */

var myConnector = tableau.makeConnector();
(function () {
    /**
     *
     * We're loading our schema based on the filename, which is the same file name as the Analytics API.
     * Tableau does not like spaces or special characters in the ID so we're stripping those out after the csv
     * is parsed into JSON.
     * @param schemaCallback
     */
    myConnector.getSchema = function (schemaCallback) {
        var path = window.location.pathname.split('/');
        var schema = path[path.length -1];
        if(schema.search('account_audiencesize_timeseries') === 0) {
            var cols = [
                {id: "Channel", alias: "Channel", dataType: tableau.dataTypeEnum.string},
                {id: "Account", alias: "Account", dataType: tableau.dataTypeEnum.string},
                {id: "ChannelAccountID", alias: "Channel Account ID", dataType: tableau.dataTypeEnum.int},
                {id: "Metric", alias: "Date", columnRole: "dimension", dataType: tableau.dataTypeEnum.date},
                {
                    id: "AudienceSize",
                    alias: "Audience Size",
                    columnRole: "measure",
                    dataType: tableau.dataTypeEnum.int
                }
            ];

            var tableInfo = {
                id: "spredfastAudience",
                alias: "Spredfast Audience Size",
                columns: cols
            };
        } else if(schema.search('messages_labels_last') === 0){
            var cols = [
                {id: "Date", alias: "Date", dataType: tableau.dataTypeEnum.date},
                {id: "Time", alias: "Time", dataType: tableau.dataTypeEnum.datetime},
                {id: "DateTime", alias: "Date Time", dataType: tableau.dataTypeEnum.datetime},
                {id: "Channel", alias: "Channel", dataType: tableau.dataTypeEnum.string},
                {id: "Account", alias: "Account", dataType: tableau.dataTypeEnum.string},
                {id: "ChannelAccountID", alias: "Channel Account ID", dataType: tableau.dataTypeEnum.string},
                {id: "ChannelID", alias: "Channel ID", dataType: tableau.dataTypeEnum.string},
                {id: "LabelID", alias: "Label ID", dataType: tableau.dataTypeEnum.string},
                {id: "Labels", alias: "Labels", dataType: tableau.dataTypeEnum.string},
                {id: "numofMessages", alias: "# of Messages", dataType: tableau.dataTypeEnum.int, columnRole:"measure"}
            ];

            var tableInfo = {
                id: "spredfastMessageLabel",
                alias: "Spredfast Message Labels",
                columns: cols
            };
        } else if(schema.search('messages_allchannels') === 0){
            var cols = [
                {id: "Date", dataType: tableau.dataTypeEnum.date},
                {id: "Time", dataType: tableau.dataTypeEnum.datetime},
                {id: "DateTime", alias: "Date Time", dataType: tableau.dataTypeEnum.datetime},
                {id: "Channel", dataType: tableau.dataTypeEnum.string},
                {id: "Labels", dataType: tableau.dataTypeEnum.string},
                {id: "ChannelAccountID",alias: "Channel Account ID", dataType: tableau.dataTypeEnum.int},
                {id: "Account", dataType: tableau.dataTypeEnum.string},
                {id: "User", dataType: tableau.dataTypeEnum.string},
                {id: "Title", dataType: tableau.dataTypeEnum.string},
                {id: "ChannelID",alias: "Channel ID", dataType: tableau.dataTypeEnum.int},
                {id: "Image", dataType: tableau.dataTypeEnum.string},
                {id: "TextClicktodrilltoMessageDetail", alias: "Text", dataType: tableau.dataTypeEnum.string},
                {id: "Engagement", dataType: tableau.dataTypeEnum.int},
                {id: "FBReactions", dataType: tableau.dataTypeEnum.int},
                {id: "FBCommentStories", dataType: tableau.dataTypeEnum.int},
                {id: "FBShareStories", dataType: tableau.dataTypeEnum.int},
                {id: "TwitterRetweets", dataType: tableau.dataTypeEnum.int},
                {id: "TwitterReplies", dataType: tableau.dataTypeEnum.int},
                {id: "TwitterLikes", dataType: tableau.dataTypeEnum.int},
                {id: "TwitterRetweetAudience", dataType: tableau.dataTypeEnum.int},
                {id: "Clicks", dataType: tableau.dataTypeEnum.int},
                {id: "WebConversions", dataType: tableau.dataTypeEnum.int},
                {id: "IGComments", dataType: tableau.dataTypeEnum.int},
                {id: "IGLikes", dataType: tableau.dataTypeEnum.int},
                {id: "LILikes", dataType: tableau.dataTypeEnum.int},
                {id: "LIShares", dataType: tableau.dataTypeEnum.int},
                {id: "LIComments", dataType: tableau.dataTypeEnum.int}
            ];

            var tableInfo = {
                id: "spredfastMessageAllChannels",
                alias: "Spredfast Messages All Channels",
                columns: cols
            };
           } else if(schema.search('messages_linkedin_last') === 0){
            var cols = [
                {id: "Date", dataType: tableau.dataTypeEnum.date},
                {id: "Time", dataType: tableau.dataTypeEnum.datetime},
                {id: "DateTime", dataType: tableau.dataTypeEnum.date},
                {id: "Labels", dataType: tableau.dataTypeEnum.string},
                {id: "Account", dataType: tableau.dataTypeEnum.string},
                {id: "User", dataType: tableau.dataTypeEnum.string},
                {id: "Title", dataType: tableau.dataTypeEnum.string},
                {id: "Channel ID", dataType: tableau.dataTypeEnum.string},
                {id: "Image", dataType: tableau.dataTypeEnum.string},
                {id: "TextClicktodrilltoMessageDetail", alias: "Text", dataType: tableau.dataTypeEnum.string},
                {id: "ChannelAccountID", dataType: tableau.dataTypeEnum.string},
                {id: "numofMessages", alias: "# of Messages", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Engagement", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Likes", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Comments", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Clicks", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "WebConversions", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Impressions", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "LI Link Clicks", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Shares", dataType: tableau.dataTypeEnum.int, columnRole:"measure"}
            ];

            var tableInfo = {
                id: "spredfastMessageAllChannels",
                alias: "Spredfast Messages All Channels",
                columns: cols
            };
           } else if(schema.search('messages_twitter_last') === 0){
            var cols = [
                {id: "Date", dataType: tableau.dataTypeEnum.date},
                {id: "Time", dataType: tableau.dataTypeEnum.datetime},
                {id: "DateTime", dataType: tableau.dataTypeEnum.datetime},
                {id: "Labels", dataType: tableau.dataTypeEnum.string},
                {id: "ChannelAccountID", dataType: tableau.dataTypeEnum.string},
                {id: "Account", dataType: tableau.dataTypeEnum.string},
                {id: "User", dataType: tableau.dataTypeEnum.string},
                {id: "Title", dataType: tableau.dataTypeEnum.string},
                {id: "ChannelID", dataType: tableau.dataTypeEnum.string},
                {id: "Image", dataType: tableau.dataTypeEnum.string},
                {id: "TextClicktodrilltoMessageDetail", alias: "Text", dataType: tableau.dataTypeEnum.string},
                {id: "TwitterEngagement", dataType: tableau.dataTypeEnum.string},
                {id: "Clicks", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "TwitterReplies", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "TwitterLikes", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "TwitterRetweets", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "TwitterRetweetAudience", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "WebConversions", dataType: tableau.dataTypeEnum.int, columnRole:"measure"}
            ];

            var tableInfo = {
                id: "spredfastMessagesTwitter",
                alias: "Spredfast Messages Twitter",
                columns: cols
            };
           } else if(schema.search('messages_googleplus_last') === 0){
            var cols = [
                {id: "Date", dataType: tableau.dataTypeEnum.date},
                {id: "Time", dataType: tableau.dataTypeEnum.datetime},
                {id: "DateTime", dataType: tableau.dataTypeEnum.datetime},
                {id: "Labels", dataType: tableau.dataTypeEnum.string},
                {id: "Account", dataType: tableau.dataTypeEnum.string},
                {id: "UserName", dataType: tableau.dataTypeEnum.string},
                {id: "Title", dataType: tableau.dataTypeEnum.string},
                {id: "ChannelID", dataType: tableau.dataTypeEnum.string},
                {id: "Image", dataType: tableau.dataTypeEnum.string},
                {id: "TextClicktodrilltoMessageDetail", alias: "Text", dataType: tableau.dataTypeEnum.string},
                {id: "ChannelAccountID", dataType: tableau.dataTypeEnum.string},
                {id: "numofMessages", alias: "# of Messages", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "plus1s", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Comments", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Engagement", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Reshares", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Clicks", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "WebConversions", dataType: tableau.dataTypeEnum.int, columnRole:"measure"}
            ];

            var tableInfo = {
                id: "spredfastMessagesGoogleplus",
                alias: "Spredfast Messages Google Plus",
                columns: cols
            };
           } else if(schema.search('messages_facebook_last') === 0){
            var cols = [
                {id: "Date", dataType: tableau.dataTypeEnum.date},
                {id: "Time", dataType: tableau.dataTypeEnum.datetime},
                {id: "DateTime", dataType: tableau.dataTypeEnum.datetime},
                {id: "Labels", dataType: tableau.dataTypeEnum.string},
                {id: "ChannelAccountID", dataType: tableau.dataTypeEnum.string},
                {id: "Account", dataType: tableau.dataTypeEnum.string},
                {id: "User", dataType: tableau.dataTypeEnum.string},
                {id: "Title", dataType: tableau.dataTypeEnum.string},
                {id: "ChannelID", dataType: tableau.dataTypeEnum.string},
                {id: "Image", dataType: tableau.dataTypeEnum.string},
                {id: "Dark", dataType: tableau.dataTypeEnum.string},
                {id: "TextClicktodrilltoMessageDetail", alias: "Text", dataType: tableau.dataTypeEnum.string},
                {id: "OrganicImpressions", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "PaidImpressions", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "ViralImpressions", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "EngagementRate", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "EngagedUsers", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Reach", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "PaidReach", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Storytellers", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Engagement", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Clicks", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Reactions", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "CommentStories", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "ShareStories", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "LinkClicks", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "PhotoViews", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "VideoPlays", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "OtherClicks", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "NegativeFeedback", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "WebConversions", dataType: tableau.dataTypeEnum.int, columnRole:"measure"}
            ];

            var tableInfo = {
                id: "spredfastMessagesFacebook",
                alias: "Spredfast Messages Facebook",
                columns: cols
            };
           } else if(schema.search('messages_pinterest_last') === 0){
            var cols = [
                {id: "Date",dataType: tableau.dataTypeEnum.date},
                {id: "Time",dataType: tableau.dataTypeEnum.datetime},
                {id: "DateTime",dataType: tableau.dataTypeEnum.datetime},
                {id: "Labels",dataType: tableau.dataTypeEnum.string},
                {id: "Board",dataType: tableau.dataTypeEnum.string},
                {id: "User",dataType: tableau.dataTypeEnum.string},
                {id: "Title",dataType: tableau.dataTypeEnum.string},
                {id: "ChannelID",dataType: tableau.dataTypeEnum.string},
                {id: "Image",dataType: tableau.dataTypeEnum.string},
                {id: "TextClicktoDrilltoPinDetails", alias:"Text (Click to Drill to Pin Details)",dataType: tableau.dataTypeEnum.string},
                {id: "ChannelAccountID",dataType: tableau.dataTypeEnum.string},
                {id: "PublishedPins",dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Engagement",dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Repins",dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Comments",dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Likes",dataType: tableau.dataTypeEnum.int, columnRole:"measure"}
            ];

            var tableInfo = {
                id: "spredfastMessagesPinterest",
                alias: "Spredfast Messages Pinterest",
                columns: cols
            };
           } else if(schema.search('messages_youtube_last') === 0){
            var cols = [
                {id: "Date", dataType: tableau.dataTypeEnum.date},
                {id: "Time", dataType: tableau.dataTypeEnum.datetime},
                {id: "DateTime", dataType: tableau.dataTypeEnum.datetime},
                {id: "Labels", dataType: tableau.dataTypeEnum.string},
                {id: "User", dataType: tableau.dataTypeEnum.string},
                {id: "Title", dataType: tableau.dataTypeEnum.string},
                {id: "VideoID", dataType: tableau.dataTypeEnum.string},
                {id: "Video", dataType: tableau.dataTypeEnum.string},
                {id: "TextClicktodrilltoVideoDetail", alias:"Text(Click to drill to Video Detail)", dataType: tableau.dataTypeEnum.string},
                {id: "ChannelAccountID", dataType: tableau.dataTypeEnum.string},
                {id: "AccountName", dataType: tableau.dataTypeEnum.string},
                {id: "Views", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Engagement", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Comments", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Likes", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Dislikes", dataType: tableau.dataTypeEnum.int, columnRole:"measure"}
            ];

            var tableInfo = {
                id: "spredfastMessagesYoutube",
                alias: "Spredfast Messages Youtube",
                columns: cols
            };
           } else if(schema.search('messages_facebook_reactions') === 0){
            var cols = [
                {id: "Date", dataType: tableau.dataTypeEnum.date},
                {id: "Time", dataType: tableau.dataTypeEnum.datetime},
                {id: "DateTime", dataType: tableau.dataTypeEnum.datetime},
                {id: "Labels", dataType: tableau.dataTypeEnum.string},
                {id: "ChannelAccountID", dataType: tableau.dataTypeEnum.string},
                {id: "Account", dataType: tableau.dataTypeEnum.string},
                {id: "User", dataType: tableau.dataTypeEnum.string},
                {id: "Title", dataType: tableau.dataTypeEnum.string},
                {id: "ChannelID", dataType: tableau.dataTypeEnum.string},
                {id: "Image", dataType: tableau.dataTypeEnum.string},
                {id: "Dark", dataType: tableau.dataTypeEnum.string},
                {id: "TextClicktodrilltoMessageDetail", alias: "Text", dataType: tableau.dataTypeEnum.string},
                {id: "Like", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Love", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Haha", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Wow", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Sad", dataType: tableau.dataTypeEnum.int, columnRole:"measure"},
                {id: "Angry", dataType: tableau.dataTypeEnum.int, columnRole:"measure"}
            ];

            var tableInfo = {
                id: "spredfastMessagesFacebookReactions",
                alias: "Spredfast Messages Facebook Reactions",
                columns: cols
            };

        }

        tableau.log("getSchema complete.");
        schemaCallback([tableInfo]);
    };

    myConnector.getData = function (table, doneCallback) {
/*        $.getJSON('http://localhost:3000'+tableau.connectionData, function (res) {
            "use strict";
            var audience = res,
                tableData = [];

            for (var i = 0; i < audience.length; i++) {
                tableData.push({
                    "Channel": audience[i].Channel,
                    "Account": audience[i].Account,
                    "ChannelAccountId": audience[i]["Channel Account ID"],
                    "Date": audience[i].Metric,
                    "AudienceSize": audience[i]["Audience Size"]
                })
            }

            tableau.log("getData complete.");
            table.appendRows(tableData);
            doneCallback();
        });*/

        var path = window.location.pathname.split('/');
        var schema = path[path.length -1];
        var newURL = window.location.protocol + "//" + window.location.host + "/reports/retrieve/" + schema;
        $.getJSON(tableau.connectionData, function (res) {
            var report = res,
                tableData = [];

            //Since we have spaces and other characters in our columns names, let's replace them.
            for (var i = 0; i < report.length; i++) {
                if (typeof report[i] === 'object') {
                    var keys = Object.keys(report[i]);
                    var newRow = {};
                    for (id in keys) {
                        var newKey = keys[id].replace(/[\s()]/g, "").replace(/[#]/g,"num").replace(/[+]/g,"plus");
                        var newRes = report[i][keys[id]];
                        newRow[newKey] = newRes;
                    }
                    tableData.push(newRow);
                }
            }

            tableau.log("getData complete.");
            tableau.log(tableData);
            table.appendRows(tableData);

            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);
})();

$(document).ready(function () {
/*    var path = window.location.pathname.split('/');
    var schema = path[path.length -1];
    var newURL = window.location.protocol + "//" + window.location.host + '/spredfast/report/retrieve/' + schema;

    $.ajax({url: newURL, dataType: 'json', accepts:{json:'application/json'}}).done(function (res) {
        "use strict";

        tableau.connectionData = res;
        tableau.connectionName = "Spredfast Analytics - " + window.location.pathname;
        tableau.submit();
    });*/
    // tableau.connectionName = "Spredfast Analytics - " + window.location.pathname;
    // tableau.submit();

    $("a").click(function (e) {
        e.preventDefault();

        var path = window.location.pathname.split('/');
        var schema = path[path.length -1];
        var newURL = window.location.protocol + "//" + window.location.host + "/reports/retrieve/" + schema;

            tableau.connectionData = newURL;
            tableau.connectionName = "Spredfast Analytics - " + window.location.pathname;
            tableau.submit();


        // tableau.connectionData = window.location.pathname;
        // tableau.connectionName = "Spredfast Analytics - Audience";
        // tableau.getData();
        tableau.submit();

    });
});