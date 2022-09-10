package com.csm_backend.controller;

import com.csm_backend.exception.CustomerNotFoundException;
import com.csm_backend.exception.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;

@RestControllerAdvice
public class CustomerErrorController {

    @ResponseStatus(code = HttpStatus.NOT_FOUND)
    @ExceptionHandler(value = CustomerNotFoundException.class)
    public ErrorResponse handleEmployeeNotFoundException(Exception ex,
                                                         HttpServletRequest req) {
        return new ErrorResponse(LocalDateTime.now(),
                HttpStatus.NOT_FOUND.value(),
                HttpStatus.NOT_FOUND.getReasonPhrase(),
                ex.getMessage(),
                req.getRequestURI());
    }

}
