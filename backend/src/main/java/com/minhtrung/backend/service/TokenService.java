package com.minhtrung.backend.service;


import com.minhtrung.backend.entity.Token;
import java.util.List;
public interface TokenService {
    public Token createToken(Token Token);
    public Token getTokenById(Long TokenId);  
    public List<Token> getAllTokens();
    public Token updateToken(Token Token);
    public void deleteToken(Long TokenId);
}
