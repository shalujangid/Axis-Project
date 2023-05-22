/**
 * 
 */
package com.example.job_search_platform.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "company")
public class Company {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	@Column(name = "company_id", unique = true, nullable = false)
	private int company_id;
	
	@Column(name="company_name",nullable = false)
	private String company_name;
	
	@Column(name="company_desc",nullable = false)
	private String company_desc;

	@Column(nullable = false)
	private String website_url;


}
