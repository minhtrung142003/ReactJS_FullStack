package com.minhtrung.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private int price;
    private int discount;
    private String thumbnail;
    private String description;
    private Date created_at;
    private Date updated_at;
    private String thumbnail1;
        private String thumbnail2;
    private String thumbnail3;
    private String thumbnail4;

    private int deleted;


    @ManyToOne
    private Category category;
    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<Gallery> galleries;
    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<OrderDetail> orderDetails;

}
