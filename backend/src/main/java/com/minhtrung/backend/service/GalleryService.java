package com.minhtrung.backend.service;


import com.minhtrung.backend.entity.Gallery;
import java.util.List;
public interface GalleryService {
    public Gallery createGallery(Gallery Gallery);
    public Gallery getGalleryById(Long GalleryId);  
    public List<Gallery> getAllGalleries();
    public Gallery updateGallery(Gallery Gallery);
    public void deleteGallery(Long GalleryId);
}
