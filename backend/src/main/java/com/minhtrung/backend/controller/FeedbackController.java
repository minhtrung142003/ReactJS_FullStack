package com.minhtrung.backend.controller;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.minhtrung.backend.service.FeedbackService;

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

// import com.minhtrung.backend.entity.Category;
import com.minhtrung.backend.entity.Feedback;

// import com.minhtrung.backend.repository.FeedbackRepository;

@RestController
@AllArgsConstructor
@RequestMapping("api/feedbacks")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"}, exposedHeaders = "Content-Range")

public class FeedbackController {
    private FeedbackService feedbackService;

    // create feedback REST API
    @PostMapping
    public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback feedback){
        Feedback savedFeedback = feedbackService.createFeedback(feedback);
        return new ResponseEntity<>(savedFeedback, HttpStatus.CREATED);
    }

    // GET CATEGORY BY id REST API
    // http://localhost:8080/api/feedbacks/1
    @GetMapping("{id}")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable("id") Long feedbackId) {
        Feedback Feedback = feedbackService.getFeedbackById(feedbackId);
        return new ResponseEntity<>(Feedback, HttpStatus.OK);
    } 

    // get all feedback REST API
     // http://localhost:8080/api/feedbacks
    @GetMapping
    public ResponseEntity<List<Feedback>> getAllFeedback() {
        List<Feedback> feedbacks = feedbackService.getAllFeedbacks();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + feedbacks.size() +"/" + feedbacks.size());

        return ResponseEntity.ok().headers(headers).body(feedbacks);
    }

    // update Feedback REST API
    @PutMapping("{id}")
         // http://localhost:8080/api/feedbacks/1
    public ResponseEntity<Feedback> updateFeedback(@PathVariable("id") Long feedbackId, @RequestBody Feedback Feedback) {
        Feedback.setId(feedbackId);
        Feedback updateFeedback = feedbackService.updateFeedback(Feedback);
        return new ResponseEntity<>(updateFeedback, HttpStatus.OK);
    }
    // delete feedback REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteFeedback(@PathVariable("id") Long feedbackId) {
        feedbackService.deleteFeedback(feedbackId);
        return new ResponseEntity<>("Feedback successfully deleted!", HttpStatus.OK);
    }
}
