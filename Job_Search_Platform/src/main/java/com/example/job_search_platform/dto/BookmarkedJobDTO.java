package com.example.job_search_platform.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;
@AllArgsConstructor
@Getter
@Setter
public class BookmarkedJobDTO
{
//	@NotNull()
//	private Long skillId;
	
	@NotNull()
	private Long seekerId;
	
	@NotNull()
    private Long jobId;

	public BookmarkedJobDTO() {
		super();
	}

	@Override
	public String toString() {
		return "BookmarkedJobDTO{" +
				"seekerId=" + seekerId +
				", jobId=" + jobId +
				'}';
	}
}
