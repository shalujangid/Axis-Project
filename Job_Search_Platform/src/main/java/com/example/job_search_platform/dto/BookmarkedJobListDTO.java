package com.example.job_search_platform.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class BookmarkedJobListDTO {
	private Long id;
//	private Long skillId;
//	private String skillName;
	private Long seekerId;
	private String first_name;
	private String last_name;
	private Long jobId;
	private String jobName;
	public BookmarkedJobListDTO() {
		super();
	}


}
