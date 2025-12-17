//ボタンを押すごとに画面が切り替わる関数
  $(function () {

    const questions = [
    { id:"q1", text:"何かを作ったり、アイデアを形にするのが好きだ。"},
    { id:"q2", text:"ゲームやアプリがどう動いているか気になる。" },
    { id:"q3", text:"絵、デザイン、見た目の工夫をするのが好きだ。"},
    { id:"q4", text:"パズルや謎解き、論理的な問題を解くのが得意だ。" },  
    { id:"q5", text:"新しいガジェットやPCを見るとワクワクする。 " },
    { id: "q6", text: "人の相談にのったりサポートするのが好きだ。" },
    { id: "q7", text: "友達同士の話し合いで、まとめ役になることが多い。" },
    { id: "q8", text: "みんなでワイワイ話すより、人と1対1で話す方が好きだ。" },
    { id: "q9", text: "誰かにわかりやすく教えるのが得意だ。" },
    { id: "q10", text: "新しいことを調べて知識を深めるのが好きだ。" },
    { id: "q11", text: "1つの作業に集中して取り組むのが向いていると思う。" },
    { id: "q12", text: "チームで何かを作り上げるのが好きだ。" },
    { id: "q13", text: "自分で考え工夫して、よりよいやり方を見つけるのが好きだ。" },
    { id: "q14", text: "人の役に立てると嬉しいと感じる。" },
    { id: "q15", text: "形のないもの（サービス・仕組み）を作ることに興味がある。" }
    ];

    // ];
    const newQuestions = {
      q1: { // 何かを作ったり、アイデアを形にするのが好き
    ノリノリペンギン: 1.0,
    ゲームマスターキツネ: 0.5,
    クリエイティブアルパカ: 0.5,
    ロジカルシマウマ: 0.0,
    テックコアラ: 0.0,
    サポートハリネズミ: 0.0,
    ノリノリイルカ: 0.0,
    チームリーダーライオン: 0.1,
    ハッピーパンダ: 0.1
  },
    q2: { // ゲームやアプリがどう動いているか気になる
    ノリノリペンギン: 1.0,
    ゲームマスターキツネ: 1.0,
    クリエイティブアルパカ: 0.3,
    ロジカルシマウマ: 0.3,
    テックコアラ: 0.5,
    サポートハリネズミ: 0.3,
    ノリノリイルカ: 0.0,
    チームリーダーライオン: 0.1,
    ハッピーパンダ: 0.1
  },

  q3: { // 絵・デザイン・見た目の工夫
    ノリノリペンギン: 0.3,
    ゲームマスターキツネ: 0.3,
    クリエイティブアルパカ: 1.0,
    ロジカルシマウマ: 0.0,
    テックコアラ: 0.0,
    サポートハリネズミ: 0.0,
    ノリノリイルカ: 0.3,
    チームリーダーライオン: 0.1,
    ハッピーパンダ: 0.1
  },

  q4: { // パズル・論理的思考
    ノリノリペンギン: 0.8,
    ゲームマスターキツネ: 0.8,
    クリエイティブアルパカ: 0.2,
    ロジカルシマウマ: 1.0,
    テックコアラ: 0.5,
    サポートハリネズミ: 0.3,
    ノリノリイルカ: 0.0,
    チームリーダーライオン: 0.3,
    ハッピーパンダ: 0.1
  },

  q5: { // ガジェット・PC好き
    ノリノリペンギン: 0.5,
    ゲームマスターキツネ: 0.5,
    クリエイティブアルパカ: 0.1,
    ロジカルシマウマ: 0.0,
    テックコアラ: 1.0,
    サポートハリネズミ: 0.5,
    ノリノリイルカ: 0.0,
    チームリーダーライオン: 0.1,
    ハッピーパンダ: 0.1
  },

  q6: { // 人の相談にのる
    ノリノリペンギン: 0.1,
    ゲームマスターキツネ: 0.1,
    クリエイティブアルパカ: 0.3,
    ロジカルシマウマ: 0.3,
    テックコアラ: 0.5,
    サポートハリネズミ: 1.0,
    ノリノリイルカ: 0.8,
    チームリーダーライオン: 0.5,
    ハッピーパンダ: 1.0
  },

  q7: { // まとめ役
    ノリノリペンギン: 0.1,
    ゲームマスターキツネ: 0.1,
    クリエイティブアルパカ: 0.1,
    ロジカルシマウマ: 0.5,
    テックコアラ: 0.3,
    サポートハリネズミ: 0.3,
    ノリノリイルカ: 0.5,
    チームリーダーライオン: 1.0,
    ハッピーパンダ: 0.5
  },

  q8: { // 1対1が好き
    ノリノリペンギン: 0.3,
    ゲームマスターキツネ: 0.3,
    クリエイティブアルパカ: 0.3,
    ロジカルシマウマ: 0.5,
    テックコアラ: 0.5,
    サポートハリネズミ: 0.8,
    ノリノリイルカ: 0.1,
    チームリーダーライオン: 0.1,
    ハッピーパンダ: 0.8
  },

  q9: { // 教えるのが得意
    ノリノリペンギン: 0.3,
    ゲームマスターキツネ: 0.3,
    クリエイティブアルパカ: 0.3,
    ロジカルシマウマ: 0.5,
    テックコアラ: 0.5,
    サポートハリネズミ: 1.0,
    ノリノリイルカ: 0.3,
    チームリーダーライオン: 0.5,
    ハッピーパンダ: 1.0
  },

  q10: { // 調べて知識を深める
    ノリノリペンギン: 0.8,
    ゲームマスターキツネ: 0.8,
    クリエイティブアルパカ: 0.5,
    ロジカルシマウマ: 1.0,
    テックコアラ: 0.8,
    サポートハリネズミ: 0.5,
    ノリノリイルカ: 0.1,
    チームリーダーライオン: 0.5,
    ハッピーパンダ: 0.5
  },

  q11: { // 集中作業
    ノリノリペンギン: 1.0,
    ゲームマスターキツネ: 0.8,
    クリエイティブアルパカ: 0.8,
    ロジカルシマウマ: 0.8,
    テックコアラ: 0.5,
    サポートハリネズミ: 0.3,
    ノリノリイルカ: 0.0,
    チームリーダーライオン: 0.3,
    ハッピーパンダ: 0.3
  },

  q12: { // チームで作る
    ノリノリペンギン: 0.8,
    ゲームマスターキツネ: 0.8,
    クリエイティブアルパカ: 0.8,
    ロジカルシマウマ: 0.5,
    テックコアラ: 0.5,
    サポートハリネズミ: 0.5,
    ノリノリイルカ: 0.8,
    チームリーダーライオン: 1.0,
    ハッピーパンダ: 0.8
  },

  q13: { // 改善・工夫
    ノリノリペンギン: 1.0,
    ゲームマスターキツネ: 0.8,
    クリエイティブアルパカ: 0.8,
    ロジカルシマウマ: 1.0,
    テックコアラ: 0.8,
    サポートハリネズミ: 0.5,
    ノリノリイルカ: 0.3,
    チームリーダーライオン: 0.8,
    ハッピーパンダ: 0.5
  },

  q14: { // 人の役に立つ
    ノリノリペンギン: 0.3,
    ゲームマスターキツネ: 0.3,
    クリエイティブアルパカ: 0.3,
    ロジカルシマウマ: 0.5,
    テックコアラ: 0.8,
    サポートハリネズミ: 1.0,
    ノリノリイルカ: 0.8,
    チームリーダーライオン: 0.8,
    ハッピーパンダ: 1.0
  },

  q15: { // 形のないものを作る
    ノリノリペンギン: 1.0,
    ゲームマスターキツネ: 0.8,
    クリエイティブアルパカ: 0.8,
    ロジカルシマウマ: 1.0,
    テックコアラ: 0.3,
    サポートハリネズミ: 0.3,
    ノリノリイルカ: 0.5,
    チームリーダーライオン: 0.8,
    ハッピーパンダ: 0.5
  }


};
const totalScores = {};


      // 回答結果を格納する配列
  let userAnswers = [];

  let currentIndex = 0;
  const container = $("#question-container");

  // 質問を表示する関数
  function showQuestion(index) {
    const question = questions[index];
    // if (!question) {
    //   // 全質問終了時の結果表示
    //   showResults();
    //   return;
    // }


  const html = `
      <div class="question-box active">
        <p>質問${index + 1}: ${question.text}</p>


        <div class="slider-wrapper">
          <input
            type="range"
            min="0"
            max="3"
            step="1"
            value="1"
            class="diagnosis-slider"
            id="questionRangeInput"
          >

          <div class="labels">
            <span>あてはまらない</span>
            <span>あまり<br>あてはまらない</span>
            <span>やや<br>あてはまる</span>
            <span>あてはまる</span>
          </div>
        </div>
        <div class="button-container">
            ${index === questions.length - 1 
          ? '<button id="seeResultBtn" class="result-btn">結果を見る</button>'
          : '<button id="nextBtn" class="next-btn">次へ</button>'}
        </div>

      </div>
    `;

    container.hide().html(html).fadeIn("slow");
  }


  // 初回質問表示
  showQuestion(currentIndex);

  // 回答クリックイベント
  $(document).on("click", ".btn", function () {
    const value = $(this).data("value");
    const question = questions[currentIndex];

    // 回答保存
    userAnswers.push({ question, value });

    // 次の質問へ
    currentIndex++;
    showQuestion(currentIndex);
  });

  // 「次へ」ボタン押下イベント
  $(document).on("click", "#nextBtn", function () {
    const value = $("#rangeInput").val();
    const question = questions[currentIndex];
    const answerValue =  $("#questionRangeInput").val();
    // answerQuestion(question,value)
    calculateValue(question,answerValue)
    // if(value == 2) {
    //   answerYes(question)
    // }

    // 次の質問へ
    currentIndex++;
    showQuestion(currentIndex);
  });
 

    $(document).on("click", "#seeResultBtn", function () {
       // saveAnswer(); // 念のため最新回答も保存
        topTestResult = calculateTopResult();

        // sessionStorage に保存
        sessionStorage.setItem("careerQuizAnswers_v1", topTestResult);
        sessionStorage.setItem("careerQuizMeta_v1", JSON.stringify({
        version: "1.0.0",
        timestamp: Date.now()
        }));

        // 結果ページへ遷移
        window.location.href = "result.html";
  });

function answerQuestion(questionId,isYes) {
  const questionNo = questionId.id;
  const scoreMap = newQuestions[questionNo];
    Object.entries(scoreMap).forEach(([character, score]) => {
     // 初期化
      if (totalScores[character] === undefined) {
        totalScores[character] = 0;
      }

    // Yes → 加算 / No → 減算
      // Yes → 加算 / No → 減算
    if(isYes == 2) {
          totalScores[character] +=  score;
    } else {
       totalScores[character] -=  score;
    }
  

  });
};
function calculateValue(questionId,value) {
  const questionNo = questionId.id;
  const scoreMap = newQuestions[questionNo];
    Object.entries(scoreMap).forEach(([character, score]) => {
     // 初期化
      if (totalScores[character] === undefined) {
        totalScores[character] = 0;
      }

  
      if(value == 3) {
          totalScores[character] +=  score;
    } else if ( value == 2) {
        totalScores[character] +=  score / 2
    } else if ( value == 1) {
        totalScores[character] -=  score / 2
    } 
    else {
      totalScores[character] -=  score;
    }

  });
};
function answerYes(questionId) {
  const questionNo = questionId.id;
  const scoreMap = newQuestions[questionNo];
  if(scoreMap) {
    Object.entries(scoreMap).forEach(([character, score]) => {
      // 初期化
      if (!totalScores[character]) {
        totalScores[character] = 0;
      }
      // 加算
      totalScores[character] += score;
    
    });
  }

}
function  calculateTopResult() {
  const result = Object.entries(totalScores)
  .sort((a, b) => b[1] - a[1])[0];

  return result[0]

};


})
