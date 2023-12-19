const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

//⊙ 전위 순회(preorder traverse) : 뿌리(root)를 먼저 방문
// 뿌리->왼쪽 자식->오른쪽 자식 순
//⊙ 중위 순회(inorder traverse) : 왼쪽 하위 트리를 방문 후 뿌리(root)를 방문
// 왼쪽자식-> 뿌리-> 오른쪽 자식
//⊙ 후위 순회(postorder traverse) : 하위 트리 모두 방문 후 뿌리(root)를 방문
// 왼쪽자식->오른쪽 자식-> 뿌리

input.shift();

const tree = {};
let result = "";

input.forEach((v) => {
  const [node, left, right] = v.split(" ");
  tree[node] = [left, right];
});

function preorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  result += node;
  preorder(left);
  preorder(right);
}
function inorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  inorder(left);
  result += node;
  inorder(right);
}
function postorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  postorder(left);
  postorder(right);
  result += node;
}

preorder("A");
result += "\n";
inorder("A");
result += "\n";
postorder("A");

console.log(result);
