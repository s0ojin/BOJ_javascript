function solution(maps) {
    const [N, M] = [maps.length, maps[0].length];
    
    // 모든 요소를 숫자로 변환하여 타입 일치시킴
    maps = maps.map(row => row.map(cell => +cell));
    
    const inRange = (i,j) => {
        return 0 <= i && i < N && 0 <= j && j < M;
    }
    
    const bfs = (x,y) => {
        
        if (maps[x][y] === 0) return -1
        const visited = Array.from({length:N}, ()=>Array(M).fill(0));
        const queue = [];
        queue.push([x,y]);        
        visited[x][y] = 1;
        
        while (queue.length > 0) {
            const [cx, cy] = queue.shift();
            
            for (let [dx, dy] of [[-1,0],[1,0],[0,-1],[0,1]]) {
                const [nx, ny] = [cx+dx, cy+dy];
                if (inRange(nx,ny) && !visited[nx][ny] && maps[nx][ny] != 0) {
                    visited[nx][ny] = visited[cx][cy] + 1;
                    queue.push([nx,ny]);
                }
            }
        }
        
        return visited[N-1][M-1] ? visited[N-1][M-1] : -1;
    }

    return bfs(0,0);
}
