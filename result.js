const TYPES = {
    ノリノリペンギン: { 
      about: "新しいものを作るのが大好き！ワクワクしながらコツコツ作る職人タイプ。",
      detail: "スマホアプリやWebサイトを「実際に動く形」で作るエンジニア。アイデアをプログラムに変えて、みんなが使える便利なサービスを生み出す“クリエイター寄りの技術者”。目の前の画面がどんどん完成していくのが楽しく、コツコツ作るのが好きな人には超向いてる。「こんな機能あったら便利じゃない？」を形にできる仕事で、世の中の生活を少しずつ良くしていける。 " ,
      examples: ["Web","アプリエンジニア"],
      image:'image/ペンギン.png'
    },
    ゲームマスターキツネ: { 
      about: "発想がユニークでゲームの仕組みを考えるのが得意！",
      detail: "ゲームのキャラクターがどう動くか、戦闘の仕組み、ストーリーの進み方など“ゲームの裏側”を作る仕事。プログラムでゲーム世界を組み立てて、プレイヤーが「お、楽しい！」と感じる仕掛けをつくっていく。発想力とロジックの両方が必要で、頭の中の世界がそのまま遊べる形になっていく瞬間は最高のやりがい。ゲーム好きなら一度は憧れる「夢を現実に変えるお仕事」。 " ,
      examples: ["データエンジニア"],
      image:'image/キツネ.png' },
    クリエイティブアルパカ: {
        about: "やわらかい感性とセンス。みんなが使いやすい形に整える天才。",
        detail: "「かわいい」「使いやすい」「迷わない」画面をつくるために、色・形・動きなどを細かく工夫していく仕事。センスや発想力はもちろん、“使う人の気持ちを考える力”がとても大切。自分が作ったデザインが多くの人にとっての“便利”になる、クリエイティブで影響力のある職種。",
        examples: ["UIデザイナー", "UXデザイナー"],
        image: "image/アルパカ.png"
    },  
    ロジカルシマウマ: {
      about: "問題や謎をスッと整理して、白黒ハッキリ決める論理派。",
      detail: "企業の課題を見つけて「こうすればうまくいきますよ」とITで解決策を提案する仕事。パズルを解くように問題を整理し、最適なシステムや仕組みを考えて会社の働き方そのものを変えていく。論理的に考えるのが得意な人や、改善アイデアを考えるのが好きな人にピッタリで、いろんな業界の裏側を知れるのも魅力。",
      examples: ["ITコンサルタント"],
      image: "image/シマウマ.png"
    },
    テックコアラ: {
      about: "機械やガジェットが大好き。困っている人を見ると助けちゃうお助けマン。",
      detail: "「パソコンが動かない」「Wi-Fiにつながらない」といったトラブルを解決したり、新しいツールを導入して働きやすい環境を整える仕事。ガジェット好き・機械好きにはたまらない職種で、社員全員から頼られる存在。裏方から会社を支える、縁の下の力持ち。",
      examples: ["情シス", "社内IT"],
      image: "image/コアラ.png"
    },
    サポートハリネズミ: {
      about: "優しく寄り添って、ていねいにサポートする癒し担当。",
      detail: "ITの操作に困っている人に寄り添い、分かりやすく説明しながら問題を解決する仕事。技術力も使うが、それ以上に“優しさ”や“聞く力”が活きる職種。相手の不安を取り除き、何度も「ありがとう」と言われる現場の癒やし系サポーター。",
      examples: ["ITサポート", "ヘルプデスク"],
      image: "image/ハリネズミ.png"
    },
    ノリノリイルカ: {
      about: "人と話すのが好きで、明るく元気に価値を伝えるコミュ力王。",
      detail: "お客様と話しながら困りごとや課題を見つけ、ぴったりのサービスや商品を提案する仕事。明るさやコミュニケーション力を活かしたい人に向いている。ただ売るだけでなく、“お客様の未来を良くする手伝いをする”のが営業の大きな役割。",
      examples: ["営業"],
      image: "image/イルカ.png"
    },
    チームリーダーライオン: {
      about: "チームをまとめるのが得意な、頼れるまとめ役。",
      detail: "仕事を円滑に進めるためにメンバーの役割分担やスケジュールを調整する仕事。文化祭の実行委員長のように、みんなが力を発揮できる環境を整えるのが役割。強いリーダーシップよりも、気遣いや調整力が活きる職種で、チームで成果を出す達成感を味わえる。",
      examples: ["プロジェクトマネージャー"],
      image: "image/ライオン.png"
    },
    ハッピーパンダ: {
      about: "ゆっくり丁寧に教えるのがうまい、人を笑顔にするサポート役。",
      detail: "サービスを使い始めたお客様が成果を出せるよう、操作説明や活用方法を一緒に考えながら寄り添う仕事。やさしくて面倒見のいいタイプが活躍できる職種で、お客様の成長を間近で見られる“伴走型サポーター”。",
      examples: ["カスタマーサクセス"],
      image: "image/パンダ.png"
    }
}

// sessionStorage から回答を取得
const answersJSON = sessionStorage.getItem("careerQuizAnswers_v1");
const metaJSON = sessionStorage.getItem("careerQuizMeta_v1");

const container = document.getElementById("answers-list");

if (!answersJSON) {
  container.innerHTML = "<p>回答が見つかりません。</p>";
} else {

  const animal = TYPES[answersJSON];

  console.log(animal);
  const resultBox = document.getElementById("result1");

  resultBox.querySelector(".type-name").textContent = answersJSON;
  resultBox.querySelector(".type-about").textContent = animal.about;
  resultBox.querySelector(".type-job-detail").textContent = animal.detail;
  resultBox.querySelector(".type-examples").textContent = animal.examples;
    const imageElement = resultBox.querySelector(".type-image");
        if (imageElement && animal.image) {
            imageElement.src = animal.image;
            imageElement.alt = animal.name;
        }



}

// DOM読み込み後に処理する場合
document.addEventListener("DOMContentLoaded", function() {

  const restartBtn = document.getElementById("toAllJobsBtn");

  restartBtn.addEventListener("click", function() {
    // ここにボタン押下時の処理を記述
    // 例：ページをリロードして最初からテスト
    window.location.href = "overview.html"; // 最初の質問ページに戻す
  });

});