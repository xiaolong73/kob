package com.kob.backend.service.impl.pk;

import com.kob.backend.consumer.WebSocketServer;
import com.kob.backend.service.pk.StartGameService;
import org.springframework.stereotype.Service;

@Service
public class StartGameServiceImpl implements StartGameService {
    @Override
    public String StartGame(Integer aId, Integer bId) {
        System.out.println("start game: " + aId +" " + bId);
        WebSocketServer.StartGame(aId, bId);
        return "Start game success";
    }
}
