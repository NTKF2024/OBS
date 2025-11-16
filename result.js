const TYPES = {
    INN: { name: "イノベーター型（創造・企画）", about: "新しい発想で価値を生み出すことに喜びを感じ、未知の領域で試行錯誤できます。変化を好み、ビジョンを描いて周囲を巻き込みます。", examples: ["新規事業企画", "プロダクトマネージャー", "UX/UIデザイナー", "リサーチ＆R&D"],image:'image/dog.png' },
    ANA: { name: "アナリスト型（分析・戦略）", about: "情報を収集・整理し、論理的に結論を導くのが得意。仮説検証・再現性・精度に価値を置きます。", examples: ["データアナリスト", "BI/アナリティクス", "経営企画", "リサーチャー"],image:'image/dog.png' },
    COO: { name: "コーディネーター型（運営・推進）", about: "関係者を束ね、計画に沿って物事を前進させるのが得意。段取り・品質・リスク管理を重視します。", examples: ["プロジェクトマネージャー", "BizOps/バックオフィス", "スクラムマスター", "カスタマーオペレーション"],image:'image/dog.png' },
    CAR: { name: "ケアサポーター型（支援・奉仕）", about: "相手の立場に立って考え、丁寧に寄り添う支援が強み。信頼関係を築き、長期的な満足を重視します。", examples: ["教育/研修", "看護・福祉", "カスタマーサクセス", "人事（育成）"],image:'image/dog.png' }, 
    MAK: { name: "メーカー/クラフター型（実務・職人）", about: "手を動かし、確かな品質のアウトプットを作ることに喜び。仕組み・構造を理解し、地道な改善を続けられます。", examples: ["製造/現場", "エンジニアリング", "品質管理", "クラフト/施工"],image:'image/dog.png' }, 
    CHA: { name: "チャレンジャー型（営業・起業）", about: "目標達成に向けて行動量を惜しまず、交渉や説得に強み。不確実性を恐れず、チャンスを掴みにいきます。", examples: ["法人営業", "起業/事業開発", "アカウントマネージャー", "プロモーション/広報"],image:'image/dog.png' } 
};

// sessionStorage から回答を取得
const answersJSON = sessionStorage.getItem("careerQuizAnswers_v1");
const metaJSON = sessionStorage.getItem("careerQuizMeta_v1");

const container = document.getElementById("answers-list");

if (!answersJSON) {
  container.innerHTML = "<p>回答が見つかりません。</p>";
} else {
  const answers = JSON.parse(answersJSON);
  const meta = metaJSON ? JSON.parse(metaJSON) : {};
    // 上位3件を抽出
    const top3 = Object.entries(answers)
        .sort((a, b) => b[1] - a[1]) // スコア降順
        .slice(0, 3);                // 上位3件

    top3.forEach(([id, value], index) => {
        const type = TYPES[value[0]];
        console.log(type)
        if (!type) return;

    // 対応するボックスを取得（id="type1" "type2" "type3"）
    const box = document.getElementById(`result${index + 1}`);
      console.log(`index=${index}`, `result${index + 1}`);

    if (box) {
        box.querySelector(".type-name").textContent = `${type.name}`;
        box.querySelector(".type-about").textContent = type.about;
         // ▼ 画像設定ロジック追加
        const imageElement = box.querySelector(".type-image");
        if (imageElement && type.image) {
            imageElement.src = type.image;
            imageElement.alt = type.name;
        }

        const examplesList = box.querySelector(".type-examples");
        examplesList.innerHTML = ""; // 初期化
        type.examples.forEach(job => {
            const li = document.createElement("li");
            li.textContent = job;
            examplesList.appendChild(li);
        });
    }
    });

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