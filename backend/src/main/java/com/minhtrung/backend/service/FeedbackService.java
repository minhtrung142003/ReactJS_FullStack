package com.minhtrung.backend.service;


import com.minhtrung.backend.entity.Feedback;
import java.util.List;
public interface FeedbackService {
    public Feedback createFeedback(Feedback feedback);
    public Feedback getFeedbackById(Long feedbackId);  
    public List<Feedback> getAllFeedbacks();
    public Feedback updateFeedback(Feedback feedback);
    public void deleteFeedback(Long feedbackId);
}
