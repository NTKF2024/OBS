//ボタンを押すごとに画面が切り替わる関数
  $(function () {

    const questions = [
    { id:"q1", text:"新しいアイデアを思いつくのが好きだ。", types:["INN"] },
    { id:"q2", text:"データを集めて分析し、根拠ある結論を出すのが得意だ。", types:["ANA"] },
    { id:"q3", text:"物事をスケジュール通りに進めるのが得意だ。", types:["COO"] },
    { id:"q4", text:"人の気持ちに寄り添い、サポートするのが好きだ。", types:["CAR"] },  
    { id:"q5", text:"論理的に筋道立てて物事を説明できる。", types:["ANA","COO"] }

    // { id:"q5", text:"手を動かしてモノや仕組みを作るのが好きだ。", types:["MAK"] },
    // { id:"q6", text:"目標を掲げ、営業や交渉で成果を出すのが好きだ。", types:["CHA"] },
    // { id:"q7", text:"変化の中で素早く試行錯誤するのが苦にならない。", types:["INN","CHA"] },
    // { id:"q8", text:"論理的に筋道立てて物事を説明できる。", types:["ANA","COO"] },
    // { id:"q9", text:"チームや部門間の調整役になることが多い。", types:["COO"] },
    // { id:"q10", text:"誰かの役に立てた実感が原動力になる。", types:["CAR"] },
    // { id:"q11", text:"仕組みや機械の構造を理解するのが楽しい。", types:["MAK","ANA"] },
    // { id:"q12", text:"失敗を恐れず、リスクを取って挑戦できる。", types:["CHA","INN"] },
    // { id:"q13", text:"細かい手順や品質基準を守ることに安心感がある。", types:["MAK","COO"] },
    // { id:"q14", text:"相手の反応を見て、伝え方を柔軟に変えられる。", types:["CHA","CAR"] },
    // { id:"q15", text:"将来のビジョンを描き、周囲を巻き込める。", types:["INN","CHA"] }
    ];



      // 回答結果を格納する配列
  let userAnswers = [];

  let currentIndex = 0;
  const container = $("#question-container");

  // 質問を表示する関数
  function showQuestion(index) {
    const question = questions[index];
    if (!question) {
      // 全質問終了時の結果表示
      showResults();
      return;
    }


  const html = `
      <div class="question-box active">
        <p>質問${index + 1}: ${question.text}</p>

        <div class="slider-container">
          <label class="scale-label">あてはまらない</label>
          <input type="range" min="1" max="2" value="2" class="slider" id="rangeInput">
          <label class="scale-label">あてはまる</label>
        </div>
        <div class="button-container">
            <button id="previousBtn" class="prev-btn">戻る</button>
            ${index === questions.length - 1 
          ? '<button id="seeResultBtn" class="result-btn">結果を見る</button>'
          : '<button id="nextBtn" class="next-btn">次へ</button>'}
        </div>
      </div>
    `;

    container.hide().html(html).fadeIn("slow");
  }

  // 結果表示関数
  function showResults() {
    const total = userAnswers.reduce((sum, a) => sum + Number(a.value), 0);
    const average = (total / userAnswers.length).toFixed(2);

    const html = `
      <div class="question-box active">
        <h2>回答結果</h2>
        <ul>
          ${userAnswers.map((a, i) => `
            <li>
              質問${i + 1}: ${questions[i].text}<br>
              → スコア ${a.value}（タイプ: ${questions[i].types.join(", ")}）
            </li>
          `).join("")}
        </ul>
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

    // 既に同じ question.id の回答が存在するか確認
    const existingIndex = userAnswers.findIndex(ans => ans.id === question.id);

    if (existingIndex !== -1) {
        // 既存の回答を更新
        userAnswers[existingIndex].value = value;
        userAnswers[existingIndex].types = question.types;
    } else {
        // 新しい回答を追加
        userAnswers.push({ id: question.id, value, types: question.types });
    }


    // 次の質問へ
    currentIndex++;
    showQuestion(currentIndex);
  });
  // 「戻る」ボタン押下時
    $(document).on("click", "#previousBtn", function () {
    const value = $("#rangeInput").val();
    // 次の質問へ
    // currentIndex を減らす
    currentIndex--;

    // もし負の値になったら最初に戻らないよう制御
    if (currentIndex < 0) currentIndex = 0;

    // 1つ前の質問を表示
    showQuestion(currentIndex);
    const question = questions[currentIndex];


    // 既に同じ question.id の回答が存在するか確認
    const existingIndex = userAnswers.findIndex(ans => ans.id === question.id);

    if (existingIndex !== -1) {
        // 既存の回答を更新
        userAnswers[existingIndex].value = value;
        userAnswers[existingIndex].types = question.types;
    } else {
        // 新しい回答を追加
        userAnswers.push({ id: question.id, value, types: question.types });
    }

  });

    $(document).on("click", "#seeResultBtn", function () {
        saveAnswer(); // 念のため最新回答も保存
        topresult = calculateResult(userAnswers);

        // 回答をオブジェクト形式に変換
        const answersObj = {};
        userAnswers.forEach(a => {
        answersObj[a.id] = a.value;
        });

        // 未回答がある場合は遷移しない
        const unanswered = Object.values(answersObj).filter(v => v === null || v === undefined).length;
        if (unanswered > 0) return;

        // sessionStorage に保存
        sessionStorage.setItem("careerQuizAnswers_v1", JSON.stringify(topresult));
        sessionStorage.setItem("careerQuizMeta_v1", JSON.stringify({
        version: "1.0.0",
        timestamp: Date.now()
        }));

        // 結果ページへ遷移
        window.location.href = "result.html";
  });
  function saveAnswer() {
    const question = questions[currentIndex];
    const value = $("#rangeInput").val();

    // 既存回答を更新、なければ追加
    const existingIndex = userAnswers.findIndex(a => a.id === question.id);
    if (existingIndex !== -1) {
        userAnswers[existingIndex].value = value;
    } else {
        userAnswers.push({ id: question.id, value: value, types: question.types });
    }

};

function calculateResult(answers) {
    // === 平均スコア集計 ===
    let typeScores = {};
    let typeData = {};
    for( const q of answers) {
        const score = parseInt(q.value)
          if (score === undefined) continue; // 未回答ならスキップ
            typesLength = q.types.length;

            q.types.forEach(type => {
                if (!typeData[type]) {
                typeData[type] = { sum: 0, count: 0 };
                }
                typeData[type].sum += score;
                typeData[type].count += 1;
            });
        }

            // 平均スコアを算出
            let avgScores = {};
            for (const [type, data] of Object.entries(typeData)) {
                avgScores[type] = data.sum / data.count;
            }

            // === 結果ソート ===
            const ranked = Object.entries(avgScores)
            .sort((a, b) => b[1] - a[1]);

            // 上位3タイプを取得
            const top3 = ranked.slice(0, 3);

            // === 表示 ===
            console.log("タイプ別平均スコア：", avgScores);
            console.log("上位3タイプ：", top3);

    return top3
};

})
