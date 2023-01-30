package com.kob.matchingsystem.service;

public interface MatchingService {
    public String addPlayer(Integer userId, Integer rating, Integer botId);
    public String removePlayer(Integer userId);
}
