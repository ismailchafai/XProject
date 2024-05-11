package org.bshg.taxe38.exceptions;
import org.bshg.taxe38.zutils.validators.ValidateResult;
import org.springframework.http.HttpStatus;

import java.util.List;

public class ValidatorException extends RuntimeException {
    private final HttpStatus status = HttpStatus.BAD_REQUEST;
    private final List<ValidateResult<?>> results;

    public ValidatorException(List<ValidateResult<?>> results) {
        this.results = results;
    }

    public HttpStatus getStatus() {return status;}

    public List<ValidateResult<?>> getResults() {
        return results;
    }
}
