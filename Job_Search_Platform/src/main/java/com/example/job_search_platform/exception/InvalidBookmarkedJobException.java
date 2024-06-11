package com.example.job_search_platform.exception;

public class InvalidBookmarkedJobException extends RuntimeException {

	private static final long serialVersionUID = 3902123202083288938L;

	public InvalidBookmarkedJobException() {
		super();
	}

	public InvalidBookmarkedJobException(String message) {
		super(message);
	}

}
