<?php

require_once("twitteroauth.php");

$consumerKey = "v88CKkp50ix3PczZhedSdHGz3";
$consumerSecret = "O1E8ut2cgtIaTJ09SW6soef6Hgr2HTDYDzFqCe04tDKcHcwz2V";
$accessToken = "206281884-pDgTpQ0wDYvNAvOabqyK3xIAO4dx0FaVx5FY79xw";
$accessTokenSecret = "bhefawgqyVznl1J6otXuRR6nVQL2C6Gv3IPX9IHW6HRPQ";

$twObj = new TwitterOAuth($consumerKey,$consumerSecret,$accessToken,$accessTokenSecret);

$andkey = "#教室のこと";
$options = array('q'=>$andkey,'count'=>'30');

$json = $twObj->OAuthRequest(
    'https://api.twitter.com/1.1/search/tweets.json',
    'GET',
    $options
);

$jset = json_decode($json, true);

foreach ($jset['statuses'] as $result){
    $name = $result['user']['name'];
    $link = $result['user']['profile_image_url'];
    $content = $result['text'];
    $updated = $result['created_at'];
    $time = $time = date("Y-m-d H:i:s",strtotime($updated));

    echo "<img src='".$link."''>"." | ".$name." | ".$content." | ".$time;
	echo '<br>';
}
?>