'use strict'
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');
assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    console.log(userName)
    if (userName.length === 0) {
        return;
    }
    // 診断機能の開発
    removaAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
    // tewwt機能の開発
    removaAllChildren(tweetDivided);
    const a = document.createElement('a');
    const href = 'https://twitter.com/intent/tweet?button_hashtag=' +encodeURIComponent('あなたのいいところ') + '&ref_src=twsrc%5Etfw';

    a.setAttribute('href', href);
    a.className = 'twitter-hashtag-button';
    a.setAttribute('data-text', result);
    a.innerText = 'Tweet # あなたのいいところ';
    tweetDivided.appendChild(a);


    const script = document.createElement('script');
    script.setAttribute('src', "https://platform.twitter.com/widgets.js")
    tweetDivided.appendChild(script);
    

}

userNameInput.onkeydown = event => {
    if (event.key === 'Enter') {
        assessmentButton.onclick();
    }
}
/**
 * 
 * @param {HTMLelement} element 
 */
function removaAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

const answers = [
    '{userName} のいいところは声です。{userName} の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
    '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
    '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
    '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
    '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
    '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
    '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
    '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
    '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
    '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
    '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
    '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
    '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
    '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
    '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から,評価されています。',
    '{userName}のいいところは優しさです。あなたの優しい雰囲気や,立ち振る舞いに多くの人が癒やされています。',
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
    var userNameNumber = 0;
    for (let i = 0; i < userName.length; i++){
        userNameNumber += userName.charCodeAt(i);
    }
    
    var answerNumber = userNameNumber % answers.length;
    var result = answers[answerNumber];
    result = result.replace(/\{userName\}/g, userName);
    return result;
}
console.log(assessment('郎'));
console.assert(assessment('郎') === '郎のいいところはその全てです。ありのままの郎自身がいいところなのです。', '診断結果の文言の特定の部分を名前に書き換える処理が正しくありません' )
