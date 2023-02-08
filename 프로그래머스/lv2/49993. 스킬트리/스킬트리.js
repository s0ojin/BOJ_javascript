function solution(skill, skill_trees) {
    let answer = 0;
    const skillArr = skill.split('');

    skill_trees.forEach(skillTree=>{
        skillTree = skillTree.split('').filter((item)=>skillArr.includes(item)).join('');
        if(skillTree === skill.slice(0,skillTree.length)) {
            answer++;
        }            
    })
    return answer;
}