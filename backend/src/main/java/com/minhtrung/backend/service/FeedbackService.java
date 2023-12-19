package com.minhtrung.backend.service;


import com.minhtrung.backend.entity.Feedback;
import java.util.List;
public interface FeedbackService {
    public Feedback createFeedback(Feedback Feedback);
    public Feedback getFeedbackById(Long FeedbackId);  
    public List<Feedback> getAllFeedbacks();
    public Feedback updateFeedback(Feedback Feedback);
    public void deleteFeedback(Long FeedbackId);
}
