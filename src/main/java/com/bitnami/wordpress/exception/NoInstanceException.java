package com.bitnami.wordpress.exception;

public class NoInstanceException extends RuntimeException {
    public NoInstanceException(String message){
        super(message);
    }

    public NoInstanceException(){
        super("There is no linked instance");
    }
}
