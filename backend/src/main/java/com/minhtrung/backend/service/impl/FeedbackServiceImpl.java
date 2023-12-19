package com.minhtrung.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.minhtrung.backend.repository.FeedbackRepository;
import com.minhtrung.backend.entity.Feedback;
import com.minhtrung.backend.service.FeedbackService;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class FeedbackServiceImpl implements FeedbackService{

    private FeedbackRepository feedbackRepository;
    @Override
    public Feedback createFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    @Override
    public Feedback getFeedbackById(Long feedbackId){
        Optional<Feedback> optionalFeedback = feedbackRepository.findById(feedbackId);
        return optionalFeedback.get();
    }

    @Override
    public List<Feedback> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }

    @Override
    public Feedback updateFeedback(Feedback feedback){
        Feedback existingFeedback = feedbackRepository.findById(feedback.getId()).get();
        existingFeedback.setFirstname(feedback.getFirstname());
        existingFeedback.setLastname(feedback.getLastname());
        existingFeedback.setEmail(feedback.getEmail());
        existingFeedback.setPhone_number(feedback.getPhone_number());
        existingFeedback.setSubject_name(feedback.getSubject_name());
        existingFeedback.setNote(feedback.getNote());
        existingFeedback.setStatus(feedback.getStatus());
        existingFeedback.setCreated_at(feedback.getCreated_at());
        existingFeedback.setUpdated_at(feedback.getUpdated_at());
        Feedback updateFeedback = feedbackRepository.save(existingFeedback);
        return updateFeedback;
    }

    @Override
    public void deleteFeedback(Long feedbackId){
        feedbackRepository.deleteById(feedbackId);
    }

}