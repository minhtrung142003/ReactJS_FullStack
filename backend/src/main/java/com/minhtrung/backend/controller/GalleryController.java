package com.minhtrung.backend.controller;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.minhtrung.backend.service.GalleryService;

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

import com.minhtrung.backend.entity.Gallery;
// import com.minhtrung.backend.repository.GalleryRepository;

@RestController
@AllArgsConstructor
@RequestMapping("api/galleries")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"}, exposedHeaders = "Content-Range")

public class GalleryController {
    private GalleryService galleryService;

    // create gallery REST API
    @PostMapping
    public ResponseEntity<Gallery> createGallery(@RequestBody Gallery gallery){
        Gallery savedGallery = galleryService.createGallery(gallery);
        return new ResponseEntity<>(savedGallery, HttpStatus.CREATED);
    }

    // GET CATEGORY BY id REST API
    // http://localhost:8080/api/gallerys/1
    @GetMapping("{id}")
    public ResponseEntity<Gallery> getGalleryById(@PathVariable("id") Long galleryId) {
        Gallery Gallery = galleryService.getGalleryById(galleryId);
        return new ResponseEntity<>(Gallery, HttpStatus.OK);
    } 

    // get all gallery REST API
     // http://localhost:8080/api/gallerys
    @GetMapping
    public ResponseEntity<List<Gallery>> getAllGallery() {
        List<Gallery> galleries = galleryService.getAllGalleries();
         HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + galleries.size() +"/" + galleries.size());
        return ResponseEntity.ok().headers(headers).body(galleries);
    }

    // update Gallery REST API
    @PutMapping("{id}")
         // http://localhost:8080/api/gallerys/1
    public ResponseEntity<Gallery> updateGallery(@PathVariable("id") Long galleryId, @RequestBody Gallery Gallery) {
        Gallery.setId(galleryId);
        Gallery updateGallery = galleryService.updateGallery(Gallery);
        return new ResponseEntity<>(updateGallery, HttpStatus.OK);
    }
    // delete gallery REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteGallery(@PathVariable("id") Long galleryId) {
        galleryService.deleteGallery(galleryId);
        return new ResponseEntity<>("Gallery successfully deleted!", HttpStatus.OK);
    }
}
