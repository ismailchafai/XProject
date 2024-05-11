package org.bshg.taxe38.ws.dto;
import com.fasterxml.jackson.annotation.JsonInclude;
import org.bshg.taxe38.zsecurity.ws.dto.AppUserDto;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.util.List;
@JsonInclude(JsonInclude.Include.NON_NULL)
public class RedevableDto extends AppUserDto {
private Long id;
private String cin;
private String firstName;
private String lastName;
public Long getId() {
return id;
}
public void setId(Long id) {
this.id = id;
}
public String getCin() {
return cin;
}
public void setCin(String value) {
this.cin = value;
}
public String getFirstName() {
return firstName;
}
public void setFirstName(String value) {
this.firstName = value;
}
public String getLastName() {
return lastName;
}
public void setLastName(String value) {
this.lastName = value;
}
}