package com.minhtrung.backend.controller;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.minhtrung.backend.service.TokenService;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.minhtrung.backend.entity.Token;
// import com.minhtrung.backend.repository.TokenRepository;

@RestController
@AllArgsConstructor
@RequestMapping("api/tokens")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"}, exposedHeaders = "Content-Range")
public class TokenController {
    private TokenService tokenService;

    // create token REST API
    @PostMapping
    public ResponseEntity<Token> createToken(@RequestBody Token token){
        Token savedToken = tokenService.createToken(token);
        return new ResponseEntity<>(savedToken, HttpStatus.CREATED);
    }

    // GET CATEGORY BY id REST API
    // http://localhost:8080/api/tokens/1
    @GetMapping("{id}")
    public ResponseEntity<Token> getTokenById(@PathVariable("id") Long tokenId) {
        Token Token = tokenService.getTokenById(tokenId);
        return new ResponseEntity<>(Token, HttpStatus.OK);
    } 

    // get all token REST API
     // http://localhost:8080/api/tokens
    @GetMapping
    public ResponseEntity<List<Token>> getAllToken() {
        List<Token> tokens = tokenService.getAllTokens();
         HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + tokens.size() +"/" + tokens.size());

        return ResponseEntity.ok().headers(headers).body(tokens);
    }

    // update Token REST API
    @PutMapping("{id}")
         // http://localhost:8080/api/tokens/1
    public ResponseEntity<Token> updateToken(@PathVariable("id") Long tokenId, @RequestBody Token Token) {
        Token.setId(tokenId);
        Token updateToken = tokenService.updateToken(Token);
        return new ResponseEntity<>(updateToken, HttpStatus.OK);
    }
    // delete token REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteToken(@PathVariable("id") Long tokenId) {
        tokenService.deleteToken(tokenId);
        return new ResponseEntity<>("Token successfully deleted!", HttpStatus.OK);
    }
}
