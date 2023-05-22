package com.example.job_search_platform.entities;

import java.io.Serializable;
import java.time.LocalDateTime;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Table(uniqueConstraints=@UniqueConstraint(columnNames = {"job_app_id", "seeker_id"}))
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JobApplication {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	@Column(name = "job_app_id", unique = true, nullable = false)
	private Long id;

	@ManyToOne(targetEntity = JobPosting.class, cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH,
			CascadeType.DETACH })
	@JoinColumn(name = "job_id")
	private JobPosting jobPosting;
	
	@ManyToOne(targetEntity = JobSeeker.class, cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH,
			CascadeType.DETACH })
	@JoinColumn(name="seeker_id")
	private JobSeeker jobSeeker;

	private LocalDateTime appliedDate = LocalDateTime.now();

	private String skills;

	private int experience;

	@Override
	public String toString() {
		return "JobApplication{" +
				"id=" + id +
				", job=" + jobPosting +
				", jobSeeker=" + jobSeeker +
				", appliedDate=" + appliedDate +
				'}';
	}
}
