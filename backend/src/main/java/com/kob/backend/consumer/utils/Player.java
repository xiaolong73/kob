package com.kob.backend.consumer.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Player {
    private Integer id;
    private Integer sx;
    private Integer sy;
    private List<Integer> steps;

    private boolean check_tail_increasing(int steps){   // 检测当前回合，蛇的长度是否增加
        if (steps <= 10) return true;
        if (steps % 3 == 1) return true;
        else return false;
    }

    public List<Cell> getCells(){
        List<Cell> res = new ArrayList<>();

        int[] dx = {-1, 0, 1, 0}, dy = {0, 1, 0, -1};
        int x = sx, y = sy;
        res.add(new Cell(x, y));
        int step = 0;
        for(int d : steps){
            x += dx[d];
            y += dy[d];
            res.add(new Cell(x, y));
            if( check_tail_increasing(++ step)){
                res.remove(0);
            }
        }
        return res;
    }

    public String getString(){
        StringBuilder res = new StringBuilder();
        for(int step:steps){
            res.append(step);
        }
        return res.toString();
    }
}
