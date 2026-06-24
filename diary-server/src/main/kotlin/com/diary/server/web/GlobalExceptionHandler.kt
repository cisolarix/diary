package com.diary.server.web

import com.diary.server.web.dto.ApiErrorResponse
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.validation.FieldError
import org.springframework.web.bind.MethodArgumentNotValidException
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice
import org.springframework.web.server.ResponseStatusException

@RestControllerAdvice
class GlobalExceptionHandler {

  @ExceptionHandler(ResponseStatusException::class)
  fun handleResponseStatus(ex: ResponseStatusException): ResponseEntity<ApiErrorResponse> =
    ResponseEntity.status(ex.statusCode)
      .body(ApiErrorResponse(ex.reason ?: ""))

  @ExceptionHandler(MethodArgumentNotValidException::class)
  fun handleValidation(ex: MethodArgumentNotValidException): ResponseEntity<ApiErrorResponse> {
    val errors = linkedMapOf<String, String>()
    for (error in ex.bindingResult.fieldErrors) {
      errors[error.field] = error.defaultMessage ?: ""
    }
    return ResponseEntity.status(HttpStatus.BAD_REQUEST)
      .body(ApiErrorResponse("Validation failed", errors))
  }
}
