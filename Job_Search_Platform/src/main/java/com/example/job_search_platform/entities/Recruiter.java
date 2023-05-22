package com.example.job_search_platform.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Recruiter {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(nullable = false)
    private long recruiter_id;
    @Column(nullable = false)
    private String first_name;
    @Column(nullable = false)
    private String last_name;
    @Column(nullable = false)
    private String contact_number;
//    @Column(nullable = false, unique = true)
//    private String company_name;
//    @Column(nullable = false)
//    private String company_desc;
//    @Column(nullable = false)
//    private String website_url;
    @OneToOne(cascade = CascadeType.ALL)
    private Company company;

    @Override
    public String toString() {
        return "Recruiter{" +
                "recruiter_id=" + recruiter_id +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", contact_number='" + contact_number + '\'' +
                ", company=" + company +
                '}';
    }
}
