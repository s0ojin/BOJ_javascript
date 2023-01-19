const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");

const Recursion = (repeat) => {
  if (repeat === input + 1) return;

  console.log(`${"____".repeat(repeat)}"재귀함수가 뭔가요?"`);

  if (repeat === input) {
    console.log(
      `${"____".repeat(repeat)}"재귀함수는 자기 자신을 호출하는 함수라네"`
    );
    Recursion2(input);
  } else {
    console.log(
      `${"____".repeat(
        repeat
      )}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.
${"____".repeat(
  repeat
)}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.
${"____".repeat(
  repeat
)}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`
    );
  }

  return Recursion(repeat + 1);
};

const Recursion2 = (repeat) => {
  if (repeat === -1) return;
  console.log(`${"____".repeat(repeat)}라고 답변하였지.`);
  return Recursion2(repeat - 1);
};

Recursion(0);
