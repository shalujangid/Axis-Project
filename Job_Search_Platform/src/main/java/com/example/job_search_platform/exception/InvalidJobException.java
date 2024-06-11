package com.example.job_search_platform.exception;

public class InvalidJobException extends RuntimeException {

	private static final long serialVersionUID = -6180346175284964931L;

	public InvalidJobException() {
		super();
	}

	public InvalidJobException(String message) {
		super(message);
	}

}
