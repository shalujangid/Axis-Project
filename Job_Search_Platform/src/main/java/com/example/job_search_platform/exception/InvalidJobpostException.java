package com.example.job_search_platform.exception;

public class InvalidJobpostException extends RuntimeException {

	private static final long serialVersionUID = -6180346175284964931L;

	public InvalidJobpostException() {
		super();
	}

	public InvalidJobpostException(String message) {
		super(message);
	}

}
