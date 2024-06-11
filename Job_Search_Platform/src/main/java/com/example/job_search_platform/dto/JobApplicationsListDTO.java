package com.example.job_search_platform.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JobApplicationsListDTO {
	private Long id;
	private Long jobId;
	private String jobTitle;
//	private String coverLetter;
	private Long JobseekerId;
	private String first_name;
	private String last_name;
	private String Email;

	@Override
	public String toString() {
		return "JobApplicationsListDTO{" +
				"id=" + id +
				", jobId=" + jobId +
				", jobTitle='" + jobTitle + '\'' +
				", JobseekerId=" + JobseekerId +
				", first_name='" + first_name + '\'' +
				", last_name='" + last_name + '\'' +
				", Email='" + Email + '\'' +
				'}';
	}
}
