<?php

require_once 'TwistOAuth/build/TwistOAuth.phar'

$consumer_key = 'v88CKkp50ix3PczZhedSdHGz3';
$consumer_secret = 'O1E8ut2cgtIaTJ09SW6soef6Hgr2HTDYDzFqCe04tDKcHcwz2V';
$access_token = '206281884-pDgTpQ0wDYvNAvOabqyK3xIAO4dx0FaVx5FY79xw';
$access_token_secret = 'bhefawgqyVznl1J6otXuRR6nVQL2C6Gv3IPX9IHW6HRPQ';

$connection = new TwistOAuth($consumer_key, $consumer_secret, $access_token, $access_token_secret);

// ニックネームからユーザ情報を取得
$users_params = ['screen_name' => 'KYO_SHITSU'];
$users = $connection->get('users/show', $users_params);

// foreach ($tweets as $value) {
//     $text = htmlspecialchars($value->text, ENT_QUOTES, 'UTF-8', false);
//     // 検索キーワードをマーキング
//     $keywords = preg_split('/,|\sOR\s/', $tweets_params['q']); //配列化
//     foreach ($keywords as $key) {
//         $text = str_ireplace($key, '<span class="keyword">'.$key.'</span>', $text);
//     }
//     // ツイート表示のHTML生成
//     disp_tweet($value, $text);
// }

function disp_tweet($value, $text){
    $icon_url = $value->user->profile_image_url;
    $screen_name = $value->user->screen_name;
    $updated = date('Y/m/d H:i', strtotime($value->created_at));
    $tweet_id = $value->id_str;
    $url = 'https://twitter.com/' . $screen_name . '/status/' . $tweet_id;

    echo '<div class="tweetbox">' . PHP_EOL;
    echo '<div class="thumb">' . '<img alt="" src="' . $icon_url . '">' . '</div>' . PHP_EOL;
    echo '<div class="meta"><a target="_blank" href="' . $url . '">' . $updated . '</a>' . '<br>@' . $screen_name .'</div>' . PHP_EOL;
    echo '<div class="tweet">' . $text . '</div>' . PHP_EOL;
    echo '</div>' . PHP_EOL;
}

?>