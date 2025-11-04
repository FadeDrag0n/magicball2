window.onload = function () {
  //бекграунд
  document.body.style.margin = "0";
  document.body.style.height = "100vh";
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  document.body.style.alignItems = "center";
  document.body.style.justifyContent = "center";
  document.body.style.background =
    "radial-gradient(circle at center, #020024, #090979, #000)";
  document.body.style.fontFamily = "Arial, sans-serif";
  document.body.style.overflow = "hidden";

  //тайтл
  const title = document.createElement("h2");
  title.textContent = "Магічна куля";
  title.style.color = "#fff";
  title.style.marginBottom = "10px";
  document.body.appendChild(title);

  //инпут
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Введіть своє питання...";
  input.style.padding = "10px 20px";
  input.style.borderRadius = "20px";
  input.style.border = "none";
  input.style.outline = "none";
  input.style.fontSize = "16px";
  input.style.width = "250px";
  input.style.textAlign = "center";
  input.style.marginBottom = "25px";
  document.body.appendChild(input);

  //Контейнер кулі
  const ballContainer = document.createElement("div");
  ballContainer.style.position = "relative";
  ballContainer.style.display = "flex";
  ballContainer.style.alignItems = "center";
  ballContainer.style.justifyContent = "center";
  ballContainer.style.width = "300px";
  ballContainer.style.height = "300px";
  ballContainer.style.border = "3px solid #00ffcc";
  ballContainer.style.borderRadius = "50%";
  ballContainer.style.boxShadow = "0 0 50px #00ff88";
  ballContainer.style.overflow = "hidden";
  ballContainer.style.cursor = "pointer";
  ballContainer.style.background = "black";
  ballContainer.style.transition = "transform 0.1s";
  document.body.appendChild(ballContainer);

  // куля
  const img = document.createElement("img");
  img.src = "Untitled-1.png";
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  img.style.borderRadius = "50%";
  ballContainer.appendChild(img);

  // текст від
  const answer = document.createElement("div");
  answer.textContent = "";
  answer.style.position = "absolute";
  answer.style.color = "#f3ccff";
  answer.style.fontSize = "26px";
  answer.style.fontWeight = "bold";
  answer.style.textShadow = "0 0 15px #fff";
  answer.style.textAlign = "center";
  answer.style.transition = "opacity 0.4s";
  ballContainer.appendChild(answer);

  const answers = [
    "Так",
    "Ні",
    "Можливо",
    "Спробуй пізніше",
    "Без сумніву!",
    "Доля каже — так",
    "Не розраховуй на це",
  ];

  // тряска
  function shakeBall() {
    ballContainer.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: "translate(-5px, 0)" },
        { transform: "translate(5px, 0)" },
        { transform: "translate(-5px, 0)" },
        { transform: "translate(5px, 0)" },
        { transform: "translate(0, 0)" },
      ],
      {
        duration: 500,
        iterations: 1,
      }
    );
  }

  // на клик
  ballContainer.addEventListener("click", () => {
    const question = input.value.trim();

    if (question === "") {
      alert("Будь ласка, введіть питання!");
      return;
    }
    if (!question.includes("?")) {
      alert("Питання повинно містити знак питання (?)");
      return;
    }

    shakeBall();

    // Після тряски
    setTimeout(() => {
      const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      answer.style.opacity = "0";
      setTimeout(() => {
        answer.textContent = randomAnswer;
        answer.style.opacity = "1";
      }, 200);
    }, 400);
  });
};
