package com.example.job_search_platform.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class BookmarkedJob {

    @Id
    @Column(name = "bkd_job_id", updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "bkd_job_seq")
    @SequenceGenerator(name = "bkd_job_seq", sequenceName = "bkd_job_seq", allocationSize = 1)
    private Long id;

//    @OneToOne(targetEntity = Skill.class, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
//    @OnDelete(action = OnDeleteAction.CASCADE)
//    @JoinColumn(name = "skill_id")
//    private Skill skill;

    @ManyToOne(targetEntity = JobPosting.class, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "job_id")
    private JobPosting jobPosting;

    @OneToOne(targetEntity = JobSeeker.class, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "freelancer_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private JobSeeker jobSeeker;

    @Override
    public String toString() {
        return "BookmarkedJob{" +
                "id=" + id +
                ", jobPosting=" + jobPosting +
                ", jobSeeker=" + jobSeeker +
                '}';
    }
}
